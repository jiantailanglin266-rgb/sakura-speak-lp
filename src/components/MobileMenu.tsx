"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import LanguageToggle from "./i18n/LanguageToggle";
import { useT } from "./i18n/LanguageProvider";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useT();

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
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-cream"
          onClick={() => setOpen(false)}
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            {site.nav.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-lg font-bold text-ink hover:bg-pink-soft/50"
              >
                {t.nav[i]}
              </Link>
            ))}

            <div className="mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 ring-1 ring-pink-soft/50">
              <span className="text-sm font-bold text-ink-soft">Language</span>
              <LanguageToggle />
            </div>

            <Link
              href="/auth"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gradient-to-r from-pink-deep to-pink px-6 py-4 text-center text-base font-bold text-white shadow-pop"
            >
              {t.hero.ctaStart}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
