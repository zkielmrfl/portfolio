"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/project";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectWindow } from "@/components/projects/ProjectWindow/ProjectWindow";
import { useProjectWindow } from "@/hooks/useProjectWindow";

const categories: Array<"ALL" | ProjectCategory> = ["ALL", "PERSONAL", "ACADEMIC", "EVENT"];

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("ALL");
  const { activeProject, openProject, closeProject } = useProjectWindow();
  const filtered = useMemo(() => filter === "ALL" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return (
    <section id="projects" className="section projects-section">
      <SectionHeader kicker="03 // PROJECT MODULES" title="Projects" copy="Flashcards keep the system clean. Open a module to inspect the full engineering file." />
      <ProjectFilter categories={categories} active={filter} onChange={setFilter} />
      <ProjectGrid projects={filtered} onOpen={openProject} />
      {activeProject ? <ProjectWindow project={activeProject} onClose={closeProject} /> : null}
    </section>
  );
}
