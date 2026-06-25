"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-11 w-11 place-items-center rounded-full bg-white/80 text-pink-ink shadow-soft ring-1 ring-pink-soft"
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-current transition-all ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 top-16 z-40 bg-cream/95 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6">
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-lg font-bold text-ink hover:bg-pink-soft/50"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gradient-to-r from-pink-deep to-pink px-6 py-4 text-center text-base font-bold text-white shadow-pop"
            >
              Start your 3-day free trial
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
