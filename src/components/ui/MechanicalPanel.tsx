import type { ReactNode } from "react";

export function MechanicalPanel({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="mechanical-panel">
      {label ? <span className="panel-label">{label}</span> : null}
      {children}
    </div>
  );
}
