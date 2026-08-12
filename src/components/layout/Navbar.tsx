"use client";

import { Menu, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { personal } from "@/data/personal";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { cx } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    function updateActiveSection() {
      const probeY = window.scrollY + window.innerHeight * 0.38;
      const active = sections.reduce((current, section) => {
        return section.offsetTop <= probeY ? section : current;
      }, sections[0]);

      if (active?.id) setActiveSection(active.id);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Home">
        <span className="brand-mark">OS</span>
        <span>PORTFOLIO</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} className={cx(activeSection === item.href.replace("#", "") && "active")} href={item.href}>{item.label}</a>
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
