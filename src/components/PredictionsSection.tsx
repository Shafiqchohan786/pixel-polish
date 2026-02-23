import { motion } from "framer-motion";
import { Brain, ShieldCheck, TrendingUp, CalendarPlus } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "AI Training Ground",
    stat: "24/7",
    statLabel: "Learning",
    desc: "Every prediction trains the AI. Every forecast shapes the protocol. Your predictions aren't just guesses — they're training data for a superintelligent system.",
  },
  {
    icon: ShieldCheck,
    title: "No-Loss Participation",
    stat: "100%",
    statLabel: "Assets Protected",
    desc: "Stake to participate in prediction windows. Win to reduce staking duration and unlock miner boosts. Lose to extend the period — your assets are always protected.",
  },
  {
    icon: TrendingUp,
    title: "Trust & Reputation",
    stat: "∞",
    statLabel: "Growth Potential",
    desc: "Accurate forecasts build your reputation. High reputation unlocks better protocol benefits, validation power, and improved limits on trusted events.",
  },
  {
    icon: CalendarPlus,
    title: "Create Own Events",
    stat: "∞",
    statLabel: "Event Freedom",
    desc: "Launch prediction windows on any topic, or clone and adjust existing ones. With smart AI verification and top predictor support, the system autonomously validates results. Earn additional benefits based on your event's volume.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const PredictionsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            {...fadeUp}
            className="inline-block glass px-5 py-2 rounded-full text-xs font-mono tracking-widest text-muted-foreground uppercase mb-6"
          >
            PREDICTME.AI
          </motion.span>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
          >
            Your <span className="text-gradient">Insight</span>
            <br />
            <span className="text-foreground">Is Your Power</span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Create your own prediction windows on world events. Make yes/no predictions.
            Win to unlock miner upgrades and reduced staking time. Never lose your assets.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-7 md:p-8 group cursor-pointer border border-border/40 hover:border-primary/30 transition-colors duration-300"
            >
              {/* Top row: Title + Stat */}
              <div className="flex items-start justify-between mb-5">
                <h3 className="text-xl md:text-2xl font-display font-bold text-gradient leading-tight">
                  {card.title}
                </h3>
                <div className="text-right shrink-0 ml-4">
                  <div className="text-2xl md:text-3xl font-display font-bold text-secondary">
                    {card.stat}
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground">
                    {card.statLabel}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="mt-6 h-0.5 rounded-full bg-gradient-to-r from-primary via-secondary to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PredictionsSection;
