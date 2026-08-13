import { engineeringStats } from "@/data/engineeringStats";

const center = 130;
const chartCenterY = 116;
const maxRadius = 66;
const labelRadius = 102;
const levels = [2, 4, 6, 8, 10];

function pointFor(index: number, value: number, radiusLimit = maxRadius) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / engineeringStats.length;
  const radius = (value / 10) * radiusLimit;
  return {
    x: center + Math.cos(angle) * radius,
    y: chartCenterY + Math.sin(angle) * radius
  };
}

function polygonPoints(value: number) {
  return engineeringStats
    .map((_, index) => {
      const point = pointFor(index, value);
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

export function StatsSpiderChart() {
  const statLabel = engineeringStats.map((stat) => `${stat.label} ${stat.score}/10`).join(", ");
  const statPoints = engineeringStats
    .map((stat, index) => {
      const point = pointFor(index, stat.score);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <aside className="stats-spider panel" aria-label={`Software engineering essentials spider chart: ${statLabel}`}>
      <header>
        <p className="eyebrow">CURRENT STATS // /10 SCALE</p>
        <h3>Software Engineering Essentials</h3>
      </header>
      <div className="spider-chart-wrap">
        <svg className="spider-chart" viewBox="0 0 260 232" role="img" aria-label={statLabel}>
          <circle cx={center} cy={chartCenterY} r="76" className="spider-scan-ring" />
          {levels.map((level) => (
            <polygon key={level} points={polygonPoints(level)} className="spider-grid" />
          ))}
          {engineeringStats.map((_, index) => {
            const outer = pointFor(index, 10);
            return <line key={index} x1={center} y1={chartCenterY} x2={outer.x} y2={outer.y} className="spider-axis" />;
          })}
          <polygon points={statPoints} className="spider-value" />
          <circle cx={center} cy={chartCenterY} r="4" className="spider-core" />
          <text x={center} y={chartCenterY + 19} className="spider-center-label" textAnchor="middle">
            /10
          </text>
          {engineeringStats.map((stat, index) => {
            const point = pointFor(index, stat.score);
            return <circle key={stat.label} cx={point.x} cy={point.y} r="3.5" className="spider-dot" />;
          })}
          {engineeringStats.map((stat, index) => {
            const labelPoint = pointFor(index, 10, labelRadius);
            const width = Math.max(48, stat.shortLabel.length * 6.8 + 34);
            const height = 17;
            return (
              <g key={`${stat.label}-label`} className="spider-label-group" transform={`translate(${labelPoint.x}, ${labelPoint.y})`}>
                <rect x={-width / 2} y={-height / 2} width={width} height={height} rx="7" />
                <text textAnchor="middle" dominantBaseline="middle">
                  {stat.shortLabel} {stat.score}/10
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </aside>
  );
}
