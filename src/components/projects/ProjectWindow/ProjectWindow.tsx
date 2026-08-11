import type { Project } from "@/types/project";
import { Modal } from "@/components/ui/Modal";
import { WindowHeader } from "./WindowHeader";
import { ProjectOverview } from "./ProjectOverview";
import { ProjectMedia } from "./ProjectMedia";
import { TechStack } from "./TechStack";
import { EngineeringProcess } from "./EngineeringProcess";
import { Challenges } from "./Challenges";
import { ProjectOutcome } from "./ProjectOutcome";
import { ProjectLessons } from "./ProjectLessons";
import { ProjectLinks } from "./ProjectLinks";

export function ProjectWindow({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <Modal title={project.name} onClose={onClose}>
      <WindowHeader project={project} />
      <ProjectLinks links={project.links} />
      <ProjectOverview project={project} />
      <ProjectMedia project={project} />
      <TechStack tech={project.tech} />
      <EngineeringProcess steps={project.caseStudy.process} />
      <Challenges challenges={project.caseStudy.challenges} />
      <ProjectOutcome outcome={project.caseStudy.outcome} />
      <ProjectLessons learned={project.caseStudy.learned} />
    </Modal>
  );
}
