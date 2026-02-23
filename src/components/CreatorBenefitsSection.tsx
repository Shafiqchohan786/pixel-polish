import { motion } from "framer-motion";
import { Gift, TrendingUp, Users, Zap, ShieldCheck, Sparkles, Plus } from "lucide-react";

const benefitCards = [
  {
    icon: Gift,
    title: "Volume Rewards",
    desc: "Earn extra based on trading volume",
    accent: "primary" as const,
  },
  {
    icon: TrendingUp,
    title: "Remix Events",
    desc: "Copy popular windows, add your twist",
    accent: "secondary" as const,
  },
  {
    icon: Users,
    title: "Build Communities",
    desc: "Connect audiences across markets",
    accent: "primary" as const,
  },
];

const bottomCards = [
  {
    icon: Zap,
    title: "Zero Risk",
    desc: "Keep all your assets",
  },
  {
    icon: ShieldCheck,
    title: "Build Trust",
    desc: "Unlock higher limits",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const CreatorBenefitsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      {/* Dotted pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 20}%` }}
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column — Creator Benefits */}
          <div>
            {/* Section label */}
            <motion.div
              {...fadeUp}
              className="flex items-center gap-3 mb-10"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-primary font-semibold">
                Creator
              </span>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-secondary font-semibold">
                Benefits
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </motion.div>

            {/* Benefit cards */}
            <div className="space-y-4">
              {benefitCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="glass rounded-xl p-5 md:p-6 group cursor-pointer border border-border/40 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      card.accent === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}>
                      <card.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base md:text-lg font-display font-bold text-foreground">
                          {card.title}
                        </h3>
                        <div className={`w-2 h-2 rounded-full ${
                          card.accent === "primary" ? "bg-primary" : "bg-secondary"
                        } animate-pulse-glow`} />
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom small cards */}
            <div className="flex flex-wrap gap-4 mt-10">
              {bottomCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="glass rounded-xl px-5 py-4 group cursor-pointer border border-border/40 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <card.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-foreground">{card.title}</h4>
                      <p className="text-xs text-muted-foreground">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column — Big Typography */}
          <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right pt-4 lg:pt-12">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-foreground">Design Your</span>
              <br />
              <span className="text-foreground">Own</span>
              <br />
              <span className="text-gradient">Prediction</span>
              <br />
              <span className="text-gradient">Windows</span>
            </motion.h2>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-primary/50 bg-primary/5 text-foreground font-display font-semibold text-base hover:bg-primary/10 hover:border-primary transition-all duration-300 glow"
            >
              <Plus className="w-4 h-4 text-primary" />
              <span>Create Window</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorBenefitsSection;
