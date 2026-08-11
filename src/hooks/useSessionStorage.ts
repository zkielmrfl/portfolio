"use client";

import { useEffect, useState } from "react";

export function useSessionStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const stored = window.sessionStorage.getItem(key);
    if (stored) setValue(JSON.parse(stored) as T);
  }, [key]);

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
