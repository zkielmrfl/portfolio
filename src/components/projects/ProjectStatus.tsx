import type { ProjectStatus as Status } from "@/types/project";

export function ProjectStatus({ status }: { status: Status }) {
  return <span className="meta-pill status">STATUS: {status}</span>;
}
