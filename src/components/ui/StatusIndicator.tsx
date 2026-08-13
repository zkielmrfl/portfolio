export function StatusIndicator({ label, value }: { label: string; value: string }) {
  return (
    <span className="status-indicator">
      <span aria-hidden />
      {label}: {value}
    </span>
  );
}
