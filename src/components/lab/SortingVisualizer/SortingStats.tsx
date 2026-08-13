import type { Algorithm } from "./SortingVisualizer";

export function SortingStats({ algorithm, size, comparisons, running }: { algorithm: Algorithm; size: number; comparisons: number; running: boolean }) {
  return (
    <div className="stats-row">
      <span>ALGORITHM: {algorithm.toUpperCase()}</span>
      <span>ARRAY: {size}</span>
      <span>COMPARISONS: {comparisons}</span>
      <span>STATUS: {running ? "RUNNING" : "IDLE"}</span>
    </div>
  );
}
