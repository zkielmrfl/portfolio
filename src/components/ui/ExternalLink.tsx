import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import type { ReactNode } from "react";

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="btn secondary" href={href} target="_blank" rel="noreferrer">
      {children}
      <ExternalLinkIcon size={15} aria-hidden />
    </a>
  );
}
