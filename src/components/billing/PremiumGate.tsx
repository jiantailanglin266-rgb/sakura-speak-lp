"use client";

import Link from "next/link";
import Meemi from "../Meemi";
import { useEntitlement } from "@/lib/useEntitlement";

/* Wrap premium-only content. Free members see an upsell; premium members see
   the children. */
export default function PremiumGate({
  title = "A Premium feature 🌸",
  blurb = "Unlock this with any Sakura Speak plan — start your free trial.",
  children,
}: {
  title?: string;
  blurb?: string;
  children: React.ReactNode;
}) {
  const { premium, loading } = useEntitlement();

  if (loading)
    return <p className="py-12 text-center text-sm text-ink-soft">Loading…</p>;

  if (premium) return <>{children}</>;

  return (
    <div className="mx-auto max-w-md rounded-[1.75rem] bg-white p-8 text-center shadow-card ring-1 ring-pink-soft/50">
      <Meemi className="mx-auto w-24 animate-float" mood="wink" />
      <h2 className="mt-4 font-display text-xl font-extrabold text-ink">{title}</h2>
      <p className="mt-2 text-sm text-ink-soft">{blurb}</p>
      <Link
        href="/subscribe"
        className="mt-5 inline-block w-full rounded-full bg-gradient-to-r from-pink-deep to-pink py-3.5 text-sm font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5"
      >
        See plans
      </Link>
      <p className="mt-3 text-xs text-ink-mute">3-day free trial · cancel anytime</p>
    </div>
  );
}
