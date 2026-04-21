"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProyectosPage() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative overflow-hidden px-6 pb-20 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,80,0,0.14),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,0,90,0.10),transparent_22%),linear-gradient(to_bottom,#070707,#0b0b0f,#070707)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
            {t.projectsPage.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            {t.projectsPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/65">
            {t.projectsPage.subtitle}
          </p>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-orange-400/30 hover:shadow-[0_0_40px_rgba(255,90,0,0.14)]"
            >
              <div className="relative h-56 overflow-hidden bg-[#111]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#1a1b22,#0d0f13)] text-white/40">
                    {t.projectsPage.noMedia}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
                    {t.projectsPage.featured}
                  </span>
                </div>
              </div>

              <div className="flex h-full flex-col p-5">
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {project.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-orange-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="relative z-20 mt-auto flex gap-3 pt-6">
                  <Link
                    href={"/proyectos/" + project.slug}
                    className="relative z-20 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03]"
                  >
                    {t.projectsPage.viewProject}
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {t.projectsPage.github}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}