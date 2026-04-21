"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { uploadToCloudinary } from "@/lib/cloudinary";

export default function ContactoPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
          {t.contactPage.eyebrow}
        </p>

        <h1 className="mt-3 text-4xl font-black md:text-5xl">{t.contactPage.title}</h1>

        <p className="mt-5 max-w-2xl text-white/70">
          {t.contactPage.subtitle}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a
            href="https://github.com/kyara25e"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/5"
          >
            <p className="text-sm text-white/50">GitHub</p>
            <p className="mt-2 font-semibold text-white">{t.contactPage.github}</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kyara-rojas-279bb7256/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/5"
          >
            <p className="text-sm text-white/50">LinkedIn</p>
            <p className="mt-2 font-semibold text-white">{t.contactPage.linkedin}</p>
          </a>

          <a
            href="mailto:kyara_177@protonmail.com"
            className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/5"
          >
            <p className="text-sm text-white/50">Email</p>
            <p className="mt-2 font-semibold text-white">kyara_177@protonmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}