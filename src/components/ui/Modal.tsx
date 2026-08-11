"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";

export function Modal({ title, children, onClose }: { title: string; children: ReactNode; onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => event.stopPropagation()}>
        <button className="icon-btn close" type="button" aria-label="Close project window" onClick={onClose}>
          <X size={18} />
        </button>
        {children}
      </section>
    </div>
  );
}
