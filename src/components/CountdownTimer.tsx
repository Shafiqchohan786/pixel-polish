import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-03-29T00:00:00Z");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "D" },
    { value: timeLeft.hours, label: "H" },
    { value: timeLeft.minutes, label: "M" },
    { value: timeLeft.seconds, label: "S" },
  ];

  return (
    <div className="flex gap-3">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1 }}
          className="glass rounded-xl w-16 h-20 flex flex-col items-center justify-center"
        >
          <span className="text-2xl font-display font-bold text-foreground">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-xs text-muted-foreground">{unit.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
