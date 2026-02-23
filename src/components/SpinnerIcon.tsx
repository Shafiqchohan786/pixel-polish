const SpinnerIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`animate-spin-slow ${className}`}
    fill="none"
  >
    {Array.from({ length: 12 }).map((_, i) => (
      <line
        key={i}
        x1="50"
        y1="10"
        x2="50"
        y2="30"
        stroke="hsl(174 72% 56%)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity={0.3 + (i / 12) * 0.7}
        transform={`rotate(${i * 30} 50 50)`}
      />
    ))}
  </svg>
);

export default SpinnerIcon;
