"use client";

import { useLang } from "./LanguageProvider";
import type { Lang } from "@/lib/i18n";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const opts: { id: Lang; label: string }[] = [
    { id: "en", label: "EN" },
    { id: "ja", label: "日本語" },
  ];
  return (
    <div className={`flex rounded-full bg-white/70 p-0.5 text-xs font-bold ring-1 ring-pink-soft/60 ${className}`}>
      {opts.map((o) => (
        <button
          key={o.id}
          onClick={() => setLang(o.id)}
          aria-pressed={lang === o.id}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === o.id ? "bg-pink-deep text-white" : "text-ink-soft hover:text-pink-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
