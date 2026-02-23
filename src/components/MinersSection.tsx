import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Eye, Sparkles, Zap, Layers, Shield, BarChart3, Signal, ArrowRight } from "lucide-react";
import minerCube from "@/assets/miner-cube.png";

const tabs = [
  { id: "upgrade", label: "Upgrade", icon: Settings },
  { id: "visuals", label: "Visuals", icon: Eye },
  { id: "modules", label: "Modules", icon: Sparkles },
  { id: "effects", label: "Effects", icon: Zap },
];

const stats = [
  { icon: Zap, label: "MINING POWER", value: "50", progress: 0.05, color: "bg-primary" },
  { icon: Layers, label: "MAX CLAIMS", value: "10", progress: 0.35, color: "bg-primary" },
  { icon: Shield, label: "SUPPLY CAP", value: "100K", progress: 0.7, colorClass: "from-primary via-secondary to-pink-500" },
  { icon: BarChart3, label: "MINING EFFICIENCY", value: "50%", progress: 0.5, colorClass: "from-secondary to-pink-400" },
  { icon: Signal, label: "NETWORK PRIORITY", value: "", dots: true },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const MinersSection = () => {
  const [activeTab, setActiveTab] = useState("upgrade");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      {/* Dotted pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            {...fadeUp}
            className="inline-block glass px-5 py-2 rounded-full text-xs font-mono tracking-widest text-muted-foreground uppercase mb-6"
          >
            The Miners
          </motion.span>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
          >
            <span className="text-gradient">Your Gateway</span>
            <br />
            <span className="text-foreground">To The Entire Ecosystem</span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            The only way to collect coins — 60% of supply locked in mining. Evumus miners are
            more than just distribution mechanisms. Your exclusive access to predictions, AI
            builders, and automated workflows — customize, upgrade, and unlock through one core asset.
          </motion.p>
        </div>

        {/* Miner card */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Cube image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={minerCube}
                alt="Evumus Miner"
                className="w-72 md:w-96 drop-shadow-[0_0_40px_hsl(270_60%_65%/0.3)]"
              />
              {/* Glow ring beneath */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-6 rounded-full bg-secondary/20 blur-xl" />
            </motion.div>
          </motion.div>

          {/* Right: Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Tier badge + Title */}
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 rounded-xl border-2 border-secondary flex flex-col items-center justify-center bg-muted/50">
                <span className="text-[9px] font-mono text-secondary">TIER</span>
                <span className="text-2xl font-display font-bold text-primary">1</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground">Basic Miner</h3>
            </div>

            {/* Tabs */}
            <div className="glass rounded-xl p-1 flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary/20 text-primary border border-primary/40"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Stats card */}
            <div className="glass rounded-xl p-5 border border-primary/20 space-y-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary">SYSTEM ACTIVE</span>
                </div>
                <span className="glass text-xs font-mono px-2.5 py-1 rounded-md text-primary border border-primary/30">
                  ⊞ 1/5
                </span>
              </div>

              {/* Stat rows */}
              {stats.map((stat, i) => (
                <div key={stat.label} className="py-2.5 border-t border-border/40">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <stat.icon className="w-3.5 h-3.5 text-primary" />
                      {stat.label}
                    </div>
                    <span className="text-sm font-mono font-bold text-primary">{stat.value}</span>
                  </div>
                  {stat.dots ? (
                    <div className="flex gap-1.5">
                      {Array.from({ length: 10 }).map((_, j) => (
                        <span key={j} className={`w-2.5 h-2.5 rounded-full ${j === 0 ? "bg-secondary" : "bg-muted"}`} />
                      ))}
                    </div>
                  ) : (
                    <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${stat.colorClass ? `bg-gradient-to-r ${stat.colorClass}` : stat.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.progress * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Footer text */}
              <div className="pt-3 border-t border-border/40">
                <p className="text-[10px] font-mono text-primary/70 mb-3">
                  ● ENTRY POINT TO THE ECOSYSTEM. START YOUR MINING JOURNEY.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg font-mono text-sm font-semibold text-primary-foreground bg-gradient-to-r from-secondary via-primary to-secondary flex items-center justify-center gap-2 transition-shadow hover:shadow-[0_0_30px_hsl(174_72%_56%/0.3)]"
                >
                  /// UPGRADE TO TIER 2 <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MinersSection;
