"use client";

import { useEffect, useMemo, useState } from "react";
import { bubbleSort } from "./algorithms/bubbleSort";
import { insertionSort } from "./algorithms/insertionSort";
import { mergeSort } from "./algorithms/mergeSort";
import { quickSort } from "./algorithms/quickSort";
import { selectionSort } from "./algorithms/selectionSort";
import { SortingBars } from "./SortingBars";
import { SortingControls } from "./SortingControls";
import { SortingStats } from "./SortingStats";

export type Algorithm = "Bubble" | "Selection" | "Insertion" | "Merge" | "Quick";
const algorithms = { Bubble: bubbleSort, Selection: selectionSort, Insertion: insertionSort, Merge: mergeSort, Quick: quickSort };
const initialArray = [54, 86, 55, 99, 66, 67, 88, 24, 59, 12, 65, 94, 17, 85, 27, 50, 33, 26, 78, 80, 18, 48, 81, 73, 56, 85, 42, 48];

function generateArray() {
  return Array.from({ length: 28 }, () => 12 + Math.floor(Math.random() * 88));
}

export function SortingVisualizer() {
  const [array, setArray] = useState(initialArray);
  const [algorithm, setAlgorithm] = useState<Algorithm>("Quick");
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(60);
  const [step, setStep] = useState(0);
  const steps = useMemo(() => algorithms[algorithm](array), [algorithm, array]);

  useEffect(() => {
    if (!running) return;
    if (step >= steps.length) {
      setRunning(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setArray(steps[step]);
      setStep((current) => current + 1);
    }, 130 - speed);
    return () => window.clearTimeout(timer);
  }, [running, speed, step, steps]);

  return (
    <article className="panel lab-panel sort-panel">
      <h3>Sorting Visualizer</h3>
      <SortingStats algorithm={algorithm} size={array.length} comparisons={step} running={running} />
      <SortingBars values={array} />
      <SortingControls
        algorithm={algorithm}
        speed={speed}
        running={running}
        onAlgorithm={setAlgorithm}
        onSpeed={setSpeed}
        onGenerate={() => { setArray(generateArray()); setStep(0); setRunning(false); }}
        onStart={() => setRunning(true)}
        onPause={() => setRunning(false)}
        onReset={() => { setArray(generateArray()); setStep(0); setRunning(false); }}
      />
    </article>
  );
}
