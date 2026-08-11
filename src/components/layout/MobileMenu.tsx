"use client";

import { X } from "lucide-react";
import { navigation } from "@/data/navigation";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button className="icon-btn close" type="button" aria-label="Close navigation menu" onClick={onClose}>
        <X size={18} />
      </button>
      {navigation.map((item) => (
        <a key={item.href} href={item.href} onClick={onClose}>{item.label}</a>
      ))}
    </div>
  );
}
