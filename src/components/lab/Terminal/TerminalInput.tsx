"use client";

import { FormEvent, useState } from "react";

export function TerminalInput({ onSubmit }: { onSubmit: (command: string) => void }) {
  const [value, setValue] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (command) onSubmit(command);
    setValue("");
  }
  return (
    <form className="terminal-input" onSubmit={submit}>
      <span>&gt;</span>
      <input value={value} onChange={(event) => setValue(event.target.value)} aria-label="Terminal command" />
    </form>
  );
}
