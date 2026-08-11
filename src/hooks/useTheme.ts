"use client";

import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>("portfolio-theme", "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark")
  };
}
