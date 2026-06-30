/* Stripe hook-up for a static site (no server needed).

   Uses Stripe **Payment Links**: the client creates one Payment Link per plan in
   their Stripe dashboard and pastes the URLs into env. The subscribe screen then
   redirects to the Stripe-hosted page. When no links are set, the screen falls
   back to the existing mock checkout — same as the auth mock pattern.

   Reconciling a completed payment back to a member (marking them subscribed) is
   done by the client's Stripe webhook → Supabase ("つなぎ込み"); we pass
   client_reference_id so that mapping is possible. */

import type { PlanId } from "./billing";

const links: Record<PlanId, string | undefined> = {
  monthly: process.env.NEXT_PUBLIC_STRIPE_LINK_MONTHLY,
  "3month": process.env.NEXT_PUBLIC_STRIPE_LINK_3MONTH,
  yearly: process.env.NEXT_PUBLIC_STRIPE_LINK_YEARLY,
  lifetime: process.env.NEXT_PUBLIC_STRIPE_LINK_LIFETIME,
};

export const stripeEnabled = Object.values(links).some(Boolean);

export type CheckoutOpts = { clientReferenceId?: string; email?: string };

/** Full Payment Link URL for a plan (with member reference + prefilled email),
    or null if that plan has no link configured (→ caller uses the mock flow). */
export function buildPaymentLink(plan: PlanId, opts: CheckoutOpts = {}): string | null {
  const base = links[plan];
  if (!base) return null;
  try {
    const url = new URL(base);
    if (opts.clientReferenceId) url.searchParams.set("client_reference_id", opts.clientReferenceId);
    if (opts.email) url.searchParams.set("prefilled_email", opts.email);
    return url.toString();
  } catch {
    return base;
  }
}
