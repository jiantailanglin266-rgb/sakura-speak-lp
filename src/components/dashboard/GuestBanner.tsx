"use client";

import Link from "next/link";
import { useAuth } from "../auth/AuthProvider";

/* Shown only to guest sessions: a gentle nudge to create a real account so
   progress is saved. Links to the upgrade form on /auth. */
export default function GuestBanner() {
  const { user } = useAuth();
  if (!user?.isGuest) return null;

  return (
    <div className="fixed inset-x-0 bottom-20 z-40 flex justify-center px-4 lg:bottom-5">
      <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-2.5 shadow-pop ring-1 ring-pink-soft/60 backdrop-blur">
        <span className="text-sm font-semibold text-ink-soft">
          You're browsing as a guest — save your progress 🌸
        </span>
        <Link
          href="/auth?upgrade=1"
          className="shrink-0 rounded-full bg-gradient-to-r from-pink-deep to-pink px-4 py-1.5 text-xs font-extrabold text-white shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}
