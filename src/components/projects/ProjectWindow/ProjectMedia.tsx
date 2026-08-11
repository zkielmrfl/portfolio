import type { Project } from "@/types/project";

export function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className="media-placeholder">
      <span>{project.icon}</span>
      <p>PROJECT MEDIA BAY // Add screenshots, diagrams, or demos in `public/images/projects/{project.slug}`.</p>
    </div>
  );
}
