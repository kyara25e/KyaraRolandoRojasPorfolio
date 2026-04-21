"use client";

import Link from "next/link";
import FireBackground from "@/components/FireBackground";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomeComponents() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,80,0,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(255,0,90,0.12),transparent_25%),linear-gradient(to_bottom,#070707,#0b0b0f,#070707)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col items-center justify-center gap-14 px-6 pb-16 md:flex-row md:px-10">
        <div className="z-10 max-w-2xl flex-1">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur-md">
            {t.hero.badge}
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            {t.hero.titleStart}{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              Kyara
            </span>
          </h1>

          <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-white/95 sm:text-4xl md:text-5xl">
            {t.hero.role}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/proyectos"
              className="rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(255,90,0,0.25)] transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,90,0,0.4)]"
            >
              {t.hero.projectsBtn}
            </Link>

            <Link
              href="/contacto"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10"
            >
              {t.hero.contactBtn}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {t.hero.pills.map((pill) => (
              <div
                key={pill}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white/90 shadow-[0_0_25px_rgba(255,80,0,0.06)] backdrop-blur-md transition hover:-translate-y-1 hover:border-red-500/30"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative flex h-[420px] w-full max-w-[620px] items-center justify-center sm:h-[480px]">
            <FireBackground />
          </div>
        </div>
      </div>
      <div className="relative px-6 pb-20 md:px-30">
          <div className="grid gap-8">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-gradient-to-r from-red-500 to-orange-400" />
                <h3 className="text-3xl font-bold text-white">
                  {lang === 'es' ? 'Proyecto destacado' : 'Featured project'}
                </h3>
              </div>

              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                  <img
                    src="https://res.cloudinary.com/dzslmv02r/image/upload/v1775556823/hylyzyu49vye7cxummwe.png"
                    alt="Montevino preview"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
                    {lang === 'es' ? 'Destacado' : 'Featured'}
                  </p>
                  <h4 className="mt-3 text-4xl font-black text-white">
                    Montevino
                  </h4>
                  <p className="mt-4 text-white/70 leading-7">
                    {t.hero.descriptionProject}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Figma"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-orange-200"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/proyectos/montevino"
                      className="rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.03]"
                    >
                      {t.hero.projectsBtn}
                    </Link>

                    <a
                      href="https://github.com/kyara25e/MontevinoFront"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.25em] text-orange-300/80">
                  {t.hero.text[0]}
                </p>
                <h4 className="mt-3 text-2xl font-bold text-white">
                  {t.hero.text[1]}
                </h4>
                <p className="mt-3 leading-7 text-white/70">
                  {t.hero.textDescription[0]}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.25em] text-orange-300/80">
                  {t.hero.text[0]}
                </p>
                <h4 className="mt-3 text-2xl font-bold text-white">
                  {t.hero.text[2]}
                </h4>
                <p className="mt-3 leading-7 text-white/70">
                  {t.hero.textDescription[1]}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.25em] text-orange-300/80">
                  {t.hero.text[0]}
                </p>
                <h4 className="mt-3 text-2xl font-bold text-white">
                  {t.hero.text[3]}
                </h4>
                <p className="mt-3 leading-7 text-white/70">
                  {t.hero.textDescription[2]}
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-gradient-to-r from-red-500 to-orange-400" />
                <h3 className="text-3xl font-bold text-white">
                  {lang === 'es' ? 'Más sobre mí' : 'More about me'}
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-3xl">🏍️</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">
                    {t.hero.more[0]}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {t.hero.moreDesciption[0]}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-3xl">🎥</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">
                    {t.hero.more[1]}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {t.hero.moreDesciption[1]}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-3xl">🔐</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">
                    {t.hero.more[2]}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {t.hero.moreDesciption[2]}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-3xl">⚽</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">
                    {t.hero.more[3]}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {t.hero.moreDesciption[3]}
                  </p>
                </div>
              </div>
            </section>
          </div>
          </div>
      
    </section>
  );
}