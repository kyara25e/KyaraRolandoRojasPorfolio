import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import Link from "next/dist/client/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) return notFound();

  const galleryImages = [project.image, project.image2, project.image3 || ""];

  return (
    <section className="relative overflow-hidden px-6 pb-20 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,80,0,0.14),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,0,90,0.10),transparent_22%),linear-gradient(to_bottom,#070707,#0b0b0f,#070707)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-bold uppercase tracking-[0.3em] text-orange-300/80">
            Proyecto
          </p>
          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-xl text-white/70">
            {project.description}
          </p>

          <div className="mt-6 text-xl flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-orange-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <ProjectGallery images={galleryImages} title={project.title} />

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white">Video del proyecto</h2>
          <p className="mt-3 text-xl text-white/65">
            Acá podés ver una demo real del funcionamiento del proyecto.
            Estas fotos y videos estan alojados en Cloudinary.
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            {project.video ? (
              <video
                src={project.video}
                controls
                className="w-full rounded-2xl"
              />
            ) : (
              <div className="flex h-[360px] items-center justify-center rounded-2xl bg-black/30 text-white/40">
                Todavía no agregaste el video
              </div>
            )}
          </div>
        </div>
        <div className="relative z-20 mt-auto flex gap-3 pt-6">
                  <Link
                    href={"/proyectos/"}
                    className="relative z-20 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03]"
                  >
                    Ver mas proyectos
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
      </div>
    </section>
  );
}