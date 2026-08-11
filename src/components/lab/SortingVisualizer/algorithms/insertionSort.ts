export function insertionSort(values: number[]) {
  const steps: number[][] = [];
  const arr = [...values];
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      steps.push([...arr]);
    }
    arr[j + 1] = key;
    steps.push([...arr]);
  }
  return steps;
}
