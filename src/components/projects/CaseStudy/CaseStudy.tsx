import type { Project } from "@/types/project";
import { ProjectOverview } from "../ProjectWindow/ProjectOverview";

export function CaseStudy({ project }: { project: Project }) {
  return <ProjectOverview project={project} />;
}
