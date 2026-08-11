import type { Project } from "@/types/project";
import { CaseStudySection } from "../CaseStudy/CaseStudySection";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <div className="case-grid">
      <CaseStudySection title="Problem" copy={project.caseStudy.problem} />
      <CaseStudySection title="Solution" copy={project.caseStudy.solution} />
      <CaseStudySection title="My Role" copy={project.caseStudy.role} />
      <CaseStudySection title="Description" copy={project.description} />
    </div>
  );
}
