export function GameHUD({ score, highScore, running }: { score: number; highScore: number; running: boolean }) {
  return (
    <div className="stats-row">
      <span>SCORE: {score}</span>
      <span>HIGH: {highScore}</span>
      <span>STATUS: {running ? "RUNNING" : "IDLE"}</span>
    </div>
  );
}
