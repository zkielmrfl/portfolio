import type { Project } from "@/types/project";
import { ProjectFlashcard } from "./ProjectFlashcard";

export function ProjectGrid({ projects, onOpen }: { projects: Project[]; onOpen: (project: Project) => void }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectFlashcard key={project.slug} project={project} onOpen={() => onOpen(project)} />
      ))}
    </div>
  );
}
