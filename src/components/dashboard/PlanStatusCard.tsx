"use client";

import Link from "next/link";
import { useEntitlement } from "@/lib/useEntitlement";

/* SideNav card reflecting the member's real plan state (Free / Trial / Premium). */
export default function PlanStatusCard() {
  const { sub, premium, loading } = useEntitlement();

  if (loading) return null;

  const isTrial = premium && sub?.status === "trial";
  const label = premium ? (isTrial ? "Trial active" : "Premium") : "Free plan";

  return (
    <div className="mt-4 rounded-2xl bg-gradient-to-br from-blue-soft/70 to-pink-soft/70 p-4">
      <p className="text-xs font-bold text-pink-ink">
        {label} {premium ? "🌸" : ""}
      </p>
      <p className="mt-1 text-xs text-ink-soft">
        {premium
          ? isTrial
            ? "Enjoy full access during your trial."
            : "You have full access. Thank you!"
          : "Unlock unlimited learning."}
      </p>
      <Link
        href="/subscribe"
        className="mt-3 block rounded-full bg-white py-2 text-center text-xs font-bold text-pink-deep shadow-soft hover:bg-cream"
      >
        {premium ? "Manage plan" : "Upgrade"}
      </Link>
    </div>
  );
}
