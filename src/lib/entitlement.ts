/* Subscription entitlement — "is this member premium?".

   Mock mode: stored per-user in localStorage (set by the mock checkout success).
   Supabase mode: read from the profiles row (plan / subscription_status /
   trial_ends). In production those columns are written by the client's Stripe
   webhook ("つなぎ込み"), NOT by the browser — so setSubscription is a no-op
   under Supabase. See supabase/schema.sql and docs/backend-setup.md. */

import type { PlanId } from "./billing";
import { authBackend } from "./auth";
import { supabase } from "./supabase";

export type SubStatus = "active" | "trial" | "none";
export type Subscription = { plan: PlanId | null; status: SubStatus; trialEnds?: string };

const KEY = "sakura-subscription"; // mock: { [userId]: Subscription }

export function isPremium(s: Subscription | null): boolean {
  if (!s) return false;
  if (s.status === "active") return true;
  if (s.status === "trial") return !s.trialEnds || new Date(s.trialEnds).getTime() > Date.now();
  return false;
}

function readAll(): Record<string, Subscription> {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export async function getSubscription(userId: string): Promise<Subscription | null> {
  if (authBackend === "supabase" && supabase) {
    const { data } = await supabase
      .from("profiles")
      .select("plan, subscription_status, trial_ends")
      .eq("id", userId)
      .single();
    if (!data) return null;
    return {
      plan: (data.plan as PlanId) ?? null,
      status: (data.subscription_status as SubStatus) ?? "none",
      trialEnds: data.trial_ends ?? undefined,
    };
  }
  return readAll()[userId] ?? null;
}

export async function setSubscription(userId: string, sub: Subscription): Promise<void> {
  // Production (Supabase) subscription state is set server-side by the Stripe
  // webhook; the browser must not self-grant premium.
  if (authBackend === "supabase") return;
  const all = readAll();
  all[userId] = sub;
  localStorage.setItem(KEY, JSON.stringify(all));
}
