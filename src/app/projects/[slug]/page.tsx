import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectOverview } from "@/components/projects/ProjectWindow/ProjectOverview";
import { TechStack } from "@/components/projects/ProjectWindow/TechStack";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main className="section project-page">
      <p className="eyebrow">PROJECT CASE STUDY</p>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <ProjectOverview project={project} />
      <TechStack tech={project.tech} />
    </main>
  );
}
