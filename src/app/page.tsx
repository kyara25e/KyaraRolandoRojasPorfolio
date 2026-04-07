import FireBackground from "@/components/FireBackground";
import SkillPills from "@/components/SkillPills";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,80,0,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(255,0,90,0.12),transparent_25%),linear-gradient(to_bottom,#070707,#0b0b0f,#070707)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col items-center justify-center gap-14 px-6 pb-16 md:flex-row md:px-10">
        <div className="z-10 max-w-2xl flex-1">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur-md">
            Porfolio personal · Frontend + Diseño
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              Kyara
            </span>
          </h1>

          <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-white/95 sm:text-4xl md:text-5xl">
            Frontend / Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Construyo experiencias web modernas combinando desarrollo, diseño
            gráfico y creatividad. Me gusta crear interfaces prolijas,
            visualmente fuertes y con identidad propia.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/proyectos"
              className="rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(255,90,0,0.25)] transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,90,0,0.4)]"
            >
              Ver proyectos
            </Link>

            <Link
              href="/contacto"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10"
            >
              Contacto
            </Link>
          </div>

          <div className="mt-10">
            <SkillPills />
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative flex h-[420px] w-full max-w-[620px] items-center justify-center sm:h-[480px]">
            <FireBackground />

            <div className="relative z-10 w-full max-w-[560px] rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="rounded-[22px] border border-white/10 bg-[#0f1117] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="grid gap-4 md:grid-cols-[1.35fr_0.9fr]">
                  <div className="rounded-2xl border border-white/10 bg-[#0b0d12] p-4">
                    <div className="mb-3 h-4 w-28 rounded bg-white/10" />
                    <div className="space-y-2 font-mono text-sm text-white/80">
                      <div>
                        <span className="text-pink-400">const</span>{" "}
                        <span className="text-blue-400">developer</span> = {"{"}
                      </div>
                      <div className="pl-4">
                        name: <span className="text-orange-300">"Kyara"</span>,
                      </div>
                      <div className="pl-4">
                        stack:{" "}
                        <span className="text-orange-300">
                          ["Next.js", "React", "TS"]
                        </span>
                        ,
                      </div>
                      <div className="pl-4">
                        style:{" "}
                        <span className="text-orange-300">"Modern UI"</span>,
                      </div>
                      <div className="pl-4">
                        focus:{" "}
                        <span className="text-orange-300">
                          "Frontend + Design"
                        </span>
                      </div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/50">UI Preview</p>
                      <div className="mt-3 rounded-xl bg-gradient-to-br from-[#191b22] to-[#0b0c10] p-4">
                        <div className="mb-3 h-3 w-16 rounded bg-white/10" />
                        <div className="space-y-2">
                          <div className="h-8 rounded-lg bg-gradient-to-r from-red-500/70 to-orange-400/70" />
                          <div className="h-8 rounded-lg bg-white/10" />
                          <div className="h-8 rounded-lg bg-white/10" />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/50">Creative + Code</p>
                      <div className="mt-3 flex gap-2">
                        <div className="h-14 flex-1 rounded-xl bg-gradient-to-br from-pink-500/50 to-red-500/20" />
                        <div className="h-14 flex-1 rounded-xl bg-gradient-to-br from-orange-400/50 to-yellow-300/20" />
                        <div className="h-14 flex-1 rounded-xl bg-gradient-to-br from-blue-500/40 to-cyan-300/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 left-1/2 z-0 h-12 w-[75%] -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-8">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-gradient-to-r from-red-500 to-orange-400" />
              <h3 className="text-3xl font-bold text-white">
                Proyecto destacado
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
                  Destacado
                </p>
                <h4 className="mt-3 text-4xl font-black text-white">
                  Montevino
                </h4>
                <p className="mt-4 text-white/70 leading-7">
                  Proyecto web para restaurante enfocado en reservas, selección
                  de platos y bebidas, y una experiencia visual moderna. Fue uno
                  de los trabajos donde más combiné desarrollo frontend, diseño
                  de interfaz y estructura funcional.
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
                    Ver proyecto
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
                Qué hago
              </p>
              <h4 className="mt-3 text-2xl font-bold text-white">
                Desarrollo web
              </h4>
              <p className="mt-3 leading-7 text-white/70">
                Creo interfaces modernas, responsivas y enfocadas en la
                experiencia del usuario usando tecnologías como React, Next.js,
                TypeScript y Tailwind CSS.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.25em] text-orange-300/80">
                Qué hago
              </p>
              <h4 className="mt-3 text-2xl font-bold text-white">
                Diseño visual
              </h4>
              <p className="mt-3 leading-7 text-white/70">
                Me gusta combinar desarrollo con diseño gráfico para crear
                productos digitales que no solo funcionen bien, sino que también
                tengan identidad, estética y coherencia visual.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.25em] text-orange-300/80">
                Qué hago
              </p>
              <h4 className="mt-3 text-2xl font-bold text-white">
                Contenido creativo
              </h4>
              <p className="mt-3 leading-7 text-white/70">
                También disfruto la edición de video, el contenido visual y la
                parte creativa de comunicar proyectos y marcas de forma más
                atractiva.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-gradient-to-r from-red-500 to-orange-400" />
              <h3 className="text-3xl font-bold text-white">
                Más sobre mí
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-3xl">🏍️</p>
                <h4 className="mt-3 text-xl font-semibold text-white">
                  Motos
                </h4>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Me apasionan las motos y todo lo que transmite ese mundo:
                  energía, estilo y libertad.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-3xl">🎥</p>
                <h4 className="mt-3 text-xl font-semibold text-white">
                  Edición y contenido
                </h4>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Disfruto crear contenido visual y editar videos con un enfoque
                  creativo y estético.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-3xl">🔐</p>
                <h4 className="mt-3 text-xl font-semibold text-white">
                  Ciberseguridad
                </h4>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Tengo interés en seguir aprendiendo sobre ciberseguridad y el
                  funcionamiento más profundo del mundo tech.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-3xl">⚽</p>
                <h4 className="mt-3 text-xl font-semibold text-white">
                  Deportes
                </h4>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Me gustan los deportes y todo lo que tenga que ver con
                  disciplina, constancia y superación.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}