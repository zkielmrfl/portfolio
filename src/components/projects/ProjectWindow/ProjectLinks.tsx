import { Code2, Rocket } from "lucide-react";
import type { Project } from "@/types/project";

export function ProjectLinks({ links }: { links: Project["links"] }) {
  return (
    <div className="project-links">
      {links.github ? <a className="btn secondary" href={links.github} target="_blank"><Code2 size={16} /> GitHub</a> : null}
      {links.live ? <a className="btn primary" href={links.live} target="_blank"><Rocket size={16} /> Live Project</a> : null}
    </div>
  );
}
