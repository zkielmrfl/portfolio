"use client";

import { useState } from "react";
import { commands } from "./commands";
import { TerminalInput } from "./TerminalInput";

export function Terminal() {
  const [lines, setLines] = useState(["PORTFOLIO TERMINAL // type help"]);
  function run(command: string) {
    if (command === "clear") {
      setLines([]);
      return;
    }
    setLines((current) => [...current, `> ${command}`, commands[command] ?? "Unknown command. Type help."]);
  }
  return (
    <article className="panel lab-panel terminal-panel">
      <h3>Terminal</h3>
      <div className="terminal-lines">{lines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div>
      <TerminalInput onSubmit={run} />
    </article>
  );
}
