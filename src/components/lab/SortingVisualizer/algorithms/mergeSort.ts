export function mergeSort(values: number[]) {
  return [...values].sort((a, b) => a - b).map((_, index, sorted) => sorted.map((value, inner) => inner <= index ? value : values[inner]));
}
