"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Dict, type Lang } from "@/lib/i18n";

const STORAGE = "sakura-lang";

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const s = localStorage.getItem(STORAGE);
      if (s === "ja" || s === "en") setLangState(s);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE, l);
      document.documentElement.lang = l;
    } catch {
      /* ignore */
    }
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
export const useT = (): Dict => translations[useContext(Ctx).lang] as Dict;
