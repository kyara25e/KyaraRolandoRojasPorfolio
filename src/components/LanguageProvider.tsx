"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Language } from "@/data/translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof translations)["es"] | (typeof translations)["en"];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("site-language") as Language | null;
    if (savedLang === "es" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("site-language", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}