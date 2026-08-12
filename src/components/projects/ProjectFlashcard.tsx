import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { Project } from "@/types/project";
import { ProjectCategory } from "./ProjectCategory";

export function ProjectFlashcard({ project, index, onOpen }: { project: Project; index?: number; onOpen: () => void }) {
  return (
    <button className="project-card" style={{ "--card-order": index ?? 0 } as CSSProperties} type="button" onClick={onOpen}>
      <span className="corner top-left" />
      <span className="project-logo">{project.icon}</span>
      <strong>{project.name}</strong>
      <span>ROLE // {project.role}</span>
      <ProjectCategory category={project.category} />
      <span className="open-file">OPEN PROJECT FILE <ArrowUpRight size={14} /></span>
    </button>
  );
}
