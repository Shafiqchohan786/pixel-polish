import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Eye, Sparkles, Zap, Layers, Shield, BarChart3, Signal, ArrowRight, Check, Globe, Hash, Crown, ChevronDown, Target, Trophy, ShoppingCart } from "lucide-react";
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

const colorThemes = [
  { id: "neon-cyber", label: "Neon Cyber", colors: ["hsl(300,100%,50%)", "hsl(180,100%,50%)"], glow: "hsl(180 100% 50% / 0.4)" },
  { id: "quantum-gold", label: "Quantum Gold", colors: ["hsl(40,100%,50%)", "hsl(30,100%,60%)"], glow: "hsl(40 100% 50% / 0.4)" },
  { id: "chrome-silver", label: "Chrome Silver", colors: ["hsl(0,0%,80%)", "hsl(0,0%,95%)"], glow: "hsl(0 0% 80% / 0.4)" },
  { id: "reactor-red", label: "Reactor Red", colors: ["hsl(0,100%,50%)", "hsl(15,100%,55%)"], glow: "hsl(0 100% 50% / 0.4)" },
  { id: "neural-green", label: "Neural Green", colors: ["hsl(140,100%,50%)", "hsl(160,100%,45%)"], glow: "hsl(140 100% 50% / 0.4)" },
  { id: "void-purple", label: "Void Purple", colors: ["hsl(270,100%,60%)", "hsl(290,100%,50%)"], glow: "hsl(270 100% 60% / 0.4)" },
];

const modules = [
  { id: "efficiency", label: "Efficiency", desc: "Cooler system reduces fees", current: 65, max: 100, bonus: "-15% Fee Reduction", color: "hsl(var(--primary))" },
  { id: "power", label: "Power", desc: "Increases HashPower output", current: 80, max: 150, bonus: "+12% HashPower", color: "hsl(var(--secondary))" },
  { id: "durability", label: "Durability", desc: "Extends maximum claims", current: 45, max: 120, bonus: "+2 Max Claims", color: "hsl(270 80% 60%)" },
];

const moduleActions = [
  { icon: Target, label: "Complete Tasks", desc: "Share, refer, engage", pts: "+15 pts", color: "hsl(var(--primary))" },
  { icon: Trophy, label: "Win Predictions", desc: "Stake on events", pts: "+40 pts", color: "hsl(40 100% 50%)" },
  { icon: ShoppingCart, label: "Purchase Boost", desc: "Instant acceleration", pts: "+100 pts", color: "hsl(var(--secondary))" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const tabContentVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

const MinersSection = () => {
  const [activeTab, setActiveTab] = useState("upgrade");
  const [selectedTheme, setSelectedTheme] = useState("neon-cyber");
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [uniqueTag, setUniqueTag] = useState("");
  const [specOpen, setSpecOpen] = useState(false);
  const [specValue, setSpecValue] = useState("UNASSIGNED");

  const activeTheme = colorThemes.find((t) => t.id === selectedTheme)!;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Cube image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <motion.img
                key={selectedTheme}
                src={minerCube}
                alt="Evumus Miner"
                className="w-72 md:w-96"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  filter: `drop-shadow(0 0 30px ${activeTheme.glow}) drop-shadow(0 0 60px ${activeTheme.glow}) drop-shadow(0 0 100px ${activeTheme.glow})`,
                  transition: "filter 0.6s ease",
                }}
              />
              {/* Ground glow */}
              <motion.div
                key={`glow-${selectedTheme}`}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-8 rounded-full blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: activeTheme.glow, transition: "background 0.6s ease" }}
              />
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
            <div className="glass rounded-xl p-1 flex border border-primary/20">
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

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === "upgrade" && (
                <motion.div key="upgrade" {...tabContentVariants} className="glass rounded-xl p-5 border border-primary/20 space-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-primary">SYSTEM ACTIVE</span>
                    </div>
                    <span className="glass text-xs font-mono px-2.5 py-1 rounded-md text-primary border border-primary/30">⊞ 1/5</span>
                  </div>
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
                  <div className="pt-3 border-t border-border/40">
                    <p className="text-[10px] font-mono text-primary/70 mb-3">● ENTRY POINT TO THE ECOSYSTEM. START YOUR MINING JOURNEY.</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-lg font-mono text-sm font-semibold text-primary-foreground bg-gradient-to-r from-secondary via-primary to-secondary flex items-center justify-center gap-2 transition-shadow hover:shadow-[0_0_30px_hsl(174_72%_56%/0.3)]"
                    >
                      /// UPGRADE TO TIER 2 <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {activeTab === "visuals" && (
                <motion.div key="visuals" {...tabContentVariants} className="glass rounded-xl p-5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-5">
                    <Eye className="w-4 h-4 text-secondary" />
                    <h4 className="text-sm font-mono font-bold text-foreground">Choose Color Theme</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {colorThemes.map((theme) => (
                      <motion.button
                        key={theme.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTheme(theme.id)}
                        className={`relative flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
                          selectedTheme === theme.id
                            ? "border-secondary bg-secondary/10 shadow-[0_0_20px_hsl(var(--secondary)/0.2)]"
                            : "border-border/40 hover:border-primary/40 bg-muted/20"
                        }`}
                      >
                        {/* Hexagon shape */}
                        <div
                          className="w-12 h-12 rounded-lg relative flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})` }}
                        >
                          <div className="w-3 h-3 rounded-full bg-background/80" />
                          {selectedTheme === theme.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <Check className="w-5 h-5 text-foreground drop-shadow-lg" />
                            </motion.div>
                          )}
                        </div>
                        <span className={`text-[10px] font-mono ${selectedTheme === theme.id ? "text-secondary" : "text-muted-foreground"}`}>
                          {theme.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "modules" && (
                <motion.div key="modules" {...tabContentVariants} className="space-y-4">
                  {/* Active Modules */}
                  <div className="glass rounded-xl p-5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Settings className="w-4 h-4 text-secondary" />
                      <h4 className="text-sm font-mono font-bold text-foreground uppercase tracking-wider">Select Active Module</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {modules.map((mod) => (
                        <motion.button
                          key={mod.id}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSelectedModule(mod.id)}
                          className={`text-left p-3 rounded-lg border transition-all duration-300 ${
                            selectedModule === mod.id
                              ? "border-secondary bg-secondary/10"
                              : "border-border/40 bg-muted/20 hover:border-primary/30"
                          }`}
                        >
                          <p className="text-xs font-mono font-bold text-foreground mb-0.5">{mod.label}</p>
                          <p className="text-[10px] text-muted-foreground mb-2">{mod.desc}</p>
                          <div className="w-full h-1 rounded-full bg-muted overflow-hidden mb-1.5">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: mod.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${(mod.current / mod.max) * 100}%` }}
                              transition={{ duration: 0.8 }}
                            />
                          </div>
                          <div className="flex justify-between text-[9px] font-mono">
                            <span className="text-muted-foreground">{mod.current}/{mod.max}</span>
                            <span className="text-secondary">{mod.bonus}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Module Actions */}
                  <div className="glass rounded-xl p-5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Crown className="w-4 h-4 text-secondary" />
                      <h4 className="text-sm font-mono font-bold text-foreground uppercase tracking-wider">Select a Module First</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {moduleActions.map((action) => (
                        <div key={action.label} className="flex flex-col items-center text-center p-3 rounded-lg border border-border/30 bg-muted/10">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 border border-border/40" style={{ background: `${action.color}20` }}>
                            <action.icon className="w-4 h-4" style={{ color: action.color }} />
                          </div>
                          <p className="text-xs font-mono font-bold text-foreground">{action.label}</p>
                          <p className="text-[9px] text-muted-foreground mb-1">{action.desc}</p>
                          <span className="text-[10px] font-mono text-secondary">{action.pts}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "effects" && (
                <motion.div key="effects" {...tabContentVariants} className="glass rounded-xl p-5 border border-primary/20 space-y-5">
                  <p className="text-xs text-muted-foreground font-mono">
                    A miner truly yours: personalized to match both your aesthetic style and your play strategy.
                  </p>

                  {/* Unique Tag */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Hash className="w-3.5 h-3.5 text-secondary" />
                      <span className="text-xs font-mono font-bold text-foreground uppercase">Unique Tag</span>
                      <span className="text-[10px] text-muted-foreground">· Exclusively reserved for your miner</span>
                    </div>
                    <input
                      type="text"
                      value={uniqueTag}
                      onChange={(e) => setUniqueTag(e.target.value.slice(0, 12))}
                      placeholder="Enter unique tag (max 12 chars)"
                      className="w-full bg-muted/30 border border-border/40 rounded-lg px-4 py-2.5 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/60 focus:shadow-[0_0_12px_hsl(var(--secondary)/0.15)] transition-all"
                    />
                  </div>

                  {/* Community */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-3.5 h-3.5 text-secondary" />
                      <span className="text-xs font-mono font-bold text-foreground uppercase">Community</span>
                      <span className="text-[10px] text-muted-foreground">· Unlock exclusive rewards by representing your origin</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-2.5 rounded-lg border border-secondary/40 bg-secondary/10 text-secondary text-sm font-mono flex items-center justify-center gap-2 hover:bg-secondary/15 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      Reveal Your Community Origin
                    </motion.button>
                  </div>

                  {/* Specialization */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-3.5 h-3.5 text-secondary" />
                      <span className="text-xs font-mono font-bold text-foreground uppercase">Specialization</span>
                      <span className="text-[10px] text-muted-foreground">· Select cognitive enhancement path</span>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => setSpecOpen(!specOpen)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-border/40 bg-muted/30 text-sm font-mono text-foreground hover:border-primary/40 transition-all"
                      >
                        <span>◇ {specValue}</span>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${specOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {specOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-20 w-full mt-1 rounded-lg border border-primary/20 bg-card/95 backdrop-blur-lg overflow-hidden origin-top"
                          >
                            {["UNASSIGNED", "ANALYST", "STRATEGIST", "OPERATOR"].map((opt) => (
                              <button
                                key={opt}
                                onClick={() => { setSpecValue(opt); setSpecOpen(false); }}
                                className={`w-full text-left px-4 py-2.5 text-sm font-mono transition-colors ${
                                  specValue === opt ? "text-secondary bg-secondary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                }`}
                              >
                                ◇ {opt}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MinersSection;
