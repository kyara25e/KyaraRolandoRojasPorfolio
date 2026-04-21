"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-black/40 px-6 py-8 text-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-lg font-bold text-white">Kyara Rojas</h4>
          <p className="mt-2 max-w-md text-sm text-white/55">
            {t.footer.text}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm md:items-end">
          <a
            href="mailto:kyara_177@protonmail.com"
            className="transition hover:text-orange-300"
          >
            kyara_177@protonmail.com
          </a>
          <a
            href="https://github.com/kyara25e"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-orange-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-orange-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}