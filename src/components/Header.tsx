"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import Meemi from "./Meemi";
import MobileMenu from "./MobileMenu";
import CTAButton from "./ui/CTAButton";
import LanguageToggle from "./i18n/LanguageToggle";
import { useT } from "./i18n/LanguageProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-pink-soft/60 bg-cream/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-soft">
            <Meemi className="h-9 w-9" />
          </span>
          <span className="font-display text-xl font-extrabold text-ink">
            Sakura<span className="text-pink-deep">Speak</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-pink-soft/50 hover:text-pink-ink"
            >
              {t.nav[i]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/auth"
              className="rounded-full px-4 py-2 text-sm font-bold text-pink-ink hover:text-pink-deep"
            >
              {t.header.signIn}
            </Link>
            <CTAButton href="/auth" size="md">
              {t.header.startFree}
            </CTAButton>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
