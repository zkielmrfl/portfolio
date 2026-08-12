"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "@/types/project";
import { ProjectFlashcard } from "./ProjectFlashcard";

export function ProjectGrid({ projects, onOpen }: { projects: Project[]; onOpen: (project: Project) => void }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(projects.length - 3, 0);
  const canMove = projects.length > 3;

  const status = useMemo(() => {
    const start = Math.min(activeIndex + 1, projects.length);
    const end = Math.min(activeIndex + 3, projects.length);
    return `${start}-${end} / ${projects.length}`;
  }, [activeIndex, projects.length]);

  useEffect(() => {
    setActiveIndex(0);
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [projects]);

  function move(direction: "left" | "right") {
    if (!trackRef.current || !canMove) return;
    const nextIndex = direction === "right" ? Math.min(activeIndex + 1, maxIndex) : Math.max(activeIndex - 1, 0);
    const firstCard = trackRef.current.querySelector<HTMLElement>(".project-card");
    const gap = 16;
    const distance = firstCard ? firstCard.offsetWidth + gap : trackRef.current.clientWidth;
    trackRef.current.scrollTo({ left: nextIndex * distance, behavior: "smooth" });
    setActiveIndex(nextIndex);
  }

  return (
    <div className="project-carousel" aria-label="Scrollable project carousel">
      <div className="project-carousel-bar">
      </div>
      <div className="project-carousel-stage">
        <button className="project-arrow left" type="button" aria-label="Show previous projects" onClick={() => move("left")} disabled={!canMove || activeIndex === 0}>
          <ChevronLeft size={26} />
        </button>
        <div className="project-grid" ref={trackRef}>
          {projects.map((project, index) => (
            <ProjectFlashcard key={project.slug} project={project} index={index} onOpen={() => onOpen(project)} />
          ))}
        </div>
        <button className="project-arrow right" type="button" aria-label="Show next projects" onClick={() => move("right")} disabled={!canMove || activeIndex === maxIndex}>
          <ChevronRight size={26} />
        </button>
      </div>
    </div>
  );
}
