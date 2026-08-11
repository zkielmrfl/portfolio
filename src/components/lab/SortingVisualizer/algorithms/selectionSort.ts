export function selectionSort(values: number[]) {
  const steps: number[][] = [];
  const arr = [...values];
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[min]) min = j;
    [arr[i], arr[min]] = [arr[min], arr[i]];
    steps.push([...arr]);
  }
  return steps;
}
