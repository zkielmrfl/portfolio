"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export function SystemMonitor() {
  const [time, setTime] = useState("");
  const techCount = skills.reduce((count, group) => count + group.skills.length, 0);
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <article className="panel lab-panel monitor">
      <h3>System Monitor</h3>
      <p>PORTFOLIO STATUS: ONLINE</p>
      <p>PROJECTS: {projects.length}</p>
      <p>TECHNOLOGIES: {techCount}</p>
      <p>CURRENT TIME: {time}</p>
    </article>
  );
}
