export function GameControls({ running, onToggle, onRestart, onJump }: { running: boolean; onToggle: () => void; onRestart: () => void; onJump: () => void }) {
  return (
    <div className="game-controls">
      <button type="button" onClick={onToggle}>{running ? "Pause" : "Start"}</button>
      <button type="button" onClick={onRestart}>Restart</button>
      <button type="button" onClick={onJump} disabled={!running}>Jump</button>
      <span>CLICK / TAP: JUMP</span>
    </div>
  );
}
