import type { Project } from "@/types/project";
import { ProjectStatus } from "../ProjectStatus";
import { ProjectCategory } from "../ProjectCategory";

export function WindowHeader({ project }: { project: Project }) {
  return (
    <header className="window-header">
      <span className="project-logo small">
        {project.image ? <img src={project.image} alt={project.imageAlt ?? `${project.name} preview`} /> : project.icon}
      </span>
      <div>
        <p className="eyebrow">PROJECT FILE: {project.slug}</p>
        <h3>{project.name}</h3>
        <div className="meta-row">
          <ProjectCategory category={project.category} />
          <ProjectStatus status={project.status} />
        </div>
      </div>
    </header>
  );
}
