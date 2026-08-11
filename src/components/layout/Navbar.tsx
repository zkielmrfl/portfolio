"use client";

import { Menu, FileText } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { personal } from "@/data/personal";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Home">
        <span className="brand-mark">OS</span>
        <span>PORTFOLIO</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <a className="btn resume" href={personal.resumeUrl} target="_blank">
          <FileText size={16} aria-hidden />
          Resume
        </a>
        <ThemeToggle />
        <button className="icon-btn menu-btn" type="button" aria-label="Open navigation menu" onClick={() => setOpen(true)}>
          <Menu size={20} />
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
