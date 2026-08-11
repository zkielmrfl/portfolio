import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectCategory } from "./ProjectCategory";

export function ProjectFlashcard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button className="project-card" type="button" onClick={onOpen}>
      <span className="corner top-left" />
      <span className="project-logo">{project.icon}</span>
      <strong>{project.name}</strong>
      <span>ROLE // {project.role}</span>
      <ProjectCategory category={project.category} />
      <span className="open-file">OPEN PROJECT FILE <ArrowUpRight size={14} /></span>
    </button>
  );
}
