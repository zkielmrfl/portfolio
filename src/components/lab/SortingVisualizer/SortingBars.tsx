export function SortingBars({ values }: { values: number[] }) {
  return (
    <div className="sorting-bars" aria-label="Sorting array visualization">
      {values.map((value, index) => <span key={`${value}-${index}`} style={{ height: `${value}%` }} />)}
    </div>
  );
}
