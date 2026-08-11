"use client";

import { useState } from "react";
import type { Project } from "@/types/project";

export function useProjectWindow() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return { activeProject, openProject: setActiveProject, closeProject: () => setActiveProject(null) };
}
