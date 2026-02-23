import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { label: "ACC", icon: "◎", value: 99.2, suffix: "%", color: "text-primary" },
  { label: "LAT", icon: "⚡", value: 13.6, suffix: "ms", color: "text-secondary" },
  { label: "THR", icon: "↯", value: 899.6, suffix: "/s", color: "text-primary" },
  { label: "EFF", icon: "⬡", value: 96.1, suffix: "%", color: "text-primary" },
];

const barHeights = [40, 65, 50, 80, 45, 70, 55, 90, 60, 75, 85, 50, 95, 70, 60, 45, 80, 55, 65, 40];

const SystemDashboard = () => {
  const [activeNodes, setActiveNodes] = useState(13);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="glass rounded-2xl p-5 space-y-4 w-full max-w-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-semibold">LIVE</span>
          <span className="text-muted-foreground ml-2">EVUMUS SYSTEMS V3.1.4</span>
        </div>
        <span className="text-muted-foreground">• • •</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-lg p-2.5 text-center">
            <div className="text-[10px] text-muted-foreground mb-1">{s.label}</div>
            <div className={`text-sm font-bold font-mono ${s.color}`}>
              <span className="mr-1 text-xs">{s.icon}</span>
              {s.value}<span className="text-xs text-muted-foreground">{s.suffix}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-2 gap-3">
        {/* Neural Stream */}
        <div className="glass rounded-lg p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-muted-foreground">NEURAL STREAM</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            </div>
          </div>
          <div className="flex items-end gap-[3px] h-24">
            {barHeights.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  background: `linear-gradient(to top, hsl(174 72% 56%), hsl(174 72% 56% / 0.2))`,
                }}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
              />
            ))}
          </div>
        </div>

        {/* Protocol Matrix - Radar */}
        <div className="glass rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-muted-foreground">PROTOCOL MATRIX</span>
          </div>
          <svg viewBox="0 0 120 120" className="w-full h-24">
            {/* Grid circles */}
            {[20, 35, 50].map((r) => (
              <polygon
                key={r}
                points={getHexPoints(60, 60, r)}
                fill="none"
                stroke="hsl(230 15% 25%)"
                strokeWidth="0.5"
              />
            ))}
            {/* Axes labels */}
            {["SEC", "LAT", "THR", "EFF", "OPT", "ACC"].map((label, i) => {
              const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
              const x = 60 + Math.cos(angle) * 57;
              const y = 60 + Math.sin(angle) * 57;
              return (
                <text key={label} x={x} y={y} textAnchor="middle" className="fill-muted-foreground" fontSize="5" fontFamily="monospace">
                  {label}
                </text>
              );
            })}
            {/* Data polygon */}
            <motion.polygon
              points={getHexPoints(60, 60, 40, [0.9, 0.7, 0.95, 0.6, 0.8, 0.85])}
              fill="hsl(270 60% 65% / 0.15)"
              stroke="hsl(270 60% 65%)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            />
            {/* Data points */}
            {getHexPointsArray(60, 60, 40, [0.9, 0.7, 0.95, 0.6, 0.8, 0.85]).map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="hsl(174 72% 56%)" />
            ))}
          </svg>
        </div>
      </div>

      {/* Active Nodes */}
      <div className="glass rounded-lg p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-muted-foreground">ACTIVE NODES</div>
            <div className="text-xl font-bold font-mono text-primary flex items-center gap-1.5">
              <span className="text-xs text-secondary">⚡</span> {activeNodes}
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i < activeNodes ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-[10px] font-mono text-muted-foreground flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary/60" />
        <span className="text-primary">AI PRODUCT</span>
        <span>→ feature_priority(backlog) → sprint_planning: optimized</span>
        <span className="ml-auto">• • •</span>
      </div>
    </motion.div>
  );
};

function getHexPoints(cx: number, cy: number, r: number, scales?: number[]): string {
  return Array.from({ length: 6 })
    .map((_, i) => {
      const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
      const s = scales ? scales[i] : 1;
      return `${cx + Math.cos(angle) * r * s},${cy + Math.sin(angle) * r * s}`;
    })
    .join(" ");
}

function getHexPointsArray(cx: number, cy: number, r: number, scales: number[]): number[][] {
  return Array.from({ length: 6 }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    return [cx + Math.cos(angle) * r * scales[i], cy + Math.sin(angle) * r * scales[i]];
  });
}

export default SystemDashboard;
