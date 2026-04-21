"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl md:px-8">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Kyara Rojas
        </Link>

        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-4">
            <Link href="/" className="transition hover:text-orange-300">
              {t.nav.home}
            </Link>
            <Link href="/proyectos" className="transition hover:text-orange-300">
              {t.nav.projects}
            </Link>
            <Link href="/contacto" className="transition hover:text-orange-300">
              {t.nav.contact}
            </Link>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}