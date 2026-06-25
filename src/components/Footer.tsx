"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import Meemi from "./Meemi";
import { useT } from "./i18n/LanguageProvider";

export default function Footer() {
  const t = useT();
  return (
    <footer className="relative overflow-hidden bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white">
                <Meemi className="h-9 w-9" mood="happy" />
              </span>
              <span className="font-display text-xl font-extrabold text-white">
                Sakura<span className="text-pink">Speak</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              {t.footer.explore}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.nav.map((n, i) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/70 transition-colors hover:text-pink">
                    {t.nav[i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              {t.footer.getStarted}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="#pricing" className="text-white/70 hover:text-pink">
                  {t.footer.pricingPlans}
                </Link>
              </li>
              <li>
                <Link href="/auth" className="text-white/70 hover:text-pink">
                  {t.footer.startTrial}
                </Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-white/70 hover:text-pink">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Sakura Speak. {t.footer.rights}</p>
          <p className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="hover:text-white/70">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-white/70">{t.footer.terms}</Link>
            <Link href="/admin" className="hover:text-white/70">Admin</Link>
            <Link href="/dashboard" className="hover:text-white/70">Dashboard (demo)</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
