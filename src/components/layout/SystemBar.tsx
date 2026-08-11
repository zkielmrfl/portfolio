import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { SITE_STATUS } from "@/lib/constants";

export function SystemBar() {
  const technologyCount = skills.reduce((count, group) => count + group.skills.length, 0);
  return (
    <aside className="system-bar" aria-label="Portfolio system status">
      <span>PORTFOLIO.OS</span>
      <span>SOFTWARE ENGINEER</span>
      <span>SYSTEM {SITE_STATUS}</span>
      <span>PROJECTS {projects.length}</span>
      <span>TECH {technologyCount}</span>
    </aside>
  );
}
