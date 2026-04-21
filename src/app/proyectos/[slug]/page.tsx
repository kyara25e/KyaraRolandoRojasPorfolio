import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}