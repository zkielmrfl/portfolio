import type { Algorithm } from "./SortingVisualizer";

export function SortingControls({
  algorithm,
  speed,
  running,
  onAlgorithm,
  onSpeed,
  onGenerate,
  onStart,
  onPause,
  onReset
}: {
  algorithm: Algorithm;
  speed: number;
  running: boolean;
  onAlgorithm: (algorithm: Algorithm) => void;
  onSpeed: (speed: number) => void;
  onGenerate: () => void;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}) {
  return (
    <div className="sort-controls">
      <select value={algorithm} onChange={(event) => onAlgorithm(event.target.value as Algorithm)} aria-label="Select sorting algorithm">
        {(["Bubble", "Selection", "Insertion", "Merge", "Quick"] as Algorithm[]).map((name) => <option key={name}>{name}</option>)}
      </select>
      <button type="button" onClick={onGenerate}>Generate</button>
      <button type="button" onClick={running ? onPause : onStart}>{running ? "Pause" : "Start"}</button>
      <button type="button" onClick={onReset}>Reset</button>
      <label>Speed <input type="range" min="10" max="120" value={speed} onChange={(event) => onSpeed(Number(event.target.value))} /></label>
    </div>
  );
}
