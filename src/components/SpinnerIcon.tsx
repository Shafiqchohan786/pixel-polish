const SpinnerIcon = ({ className = "" }: { className?: string }) => {
  const rays = [
    { angle: 0, length: 22 },
    { angle: 30, length: 16 },
    { angle: 60, length: 20 },
    { angle: 90, length: 24 },
    { angle: 120, length: 14 },
    { angle: 150, length: 18 },
    { angle: 180, length: 22 },
    { angle: 210, length: 16 },
    { angle: 240, length: 20 },
    { angle: 270, length: 14 },
    { angle: 300, length: 18 },
    { angle: 330, length: 12 },
  ];

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <defs>
        <linearGradient id="starburst-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b385e0" />
          <stop offset="50%" stopColor="#6b8de6" />
          <stop offset="100%" stopColor="#70c4e6" />
        </linearGradient>
      </defs>
      {rays.map((ray, i) => (
        <line
          key={i}
          x1="50"
          y1={50 - 8}
          x2="50"
          y2={50 - 8 - ray.length}
          stroke="url(#starburst-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${ray.angle} 50 50)`}
        />
      ))}
    </svg>
  );
};

export default SpinnerIcon;
