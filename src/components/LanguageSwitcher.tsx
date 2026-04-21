"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
      <button
        onClick={() => setLang("es")}
        className={`px-3 py-1 text-sm transition ${
          lang === "es" ? "bg-white/10 text-white" : "text-white/60"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 text-sm transition ${
          lang === "en" ? "bg-white/10 text-white" : "text-white/60"
        }`}
      >
        EN
      </button>
    </div>
  );
}