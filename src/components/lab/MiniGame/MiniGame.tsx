"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { GameCanvas } from "./GameCanvas";
import { GameControls } from "./GameControls";
import { GameHUD } from "./GameHUD";
import { nextScore } from "./gameEngine";

export function MiniGame() {
  const [running, setRunning] = useState(false);
  const [jumping, setJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useLocalStorage("portfolio-game-high-score", 0);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setScore((current) => nextScore(current, true)), 120);
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score, highScore, setHighScore]);

  function jump() {
    if (!running || jumping) return;
    setJumping(true);
    window.setTimeout(() => setJumping(false), 620);
  }

  return (
    <article className="panel lab-panel cat-game-panel">
      <h3>Cat Jumper</h3>
      <GameHUD score={score} highScore={highScore} running={running} />
      <GameCanvas running={running} jumping={jumping} onJump={jump} />
      <GameControls running={running} onToggle={() => setRunning(!running)} onRestart={() => { setScore(0); setRunning(true); }} onJump={jump} />
    </article>
  );
}
