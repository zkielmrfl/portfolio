"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-switch" type="button" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      <span>{theme.toUpperCase()}</span>
    </button>
  );
}
