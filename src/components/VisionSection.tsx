import { motion } from "framer-motion";
import { Zap, Target, Bot } from "lucide-react";
import SystemDashboard from "./SystemDashboard";

const features = [
  { icon: Zap, title: "Miners", desc: "Fuel the Network" },
  { icon: Target, title: "Predictions", desc: "Shape Reality" },
  { icon: Bot, title: "AI Employees", desc: "Earn Forever" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const VisionSection = () => {
  return (
    <section id="vision-section" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      {/* Dotted pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Dashboard */}
          <SystemDashboard />

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.span
              {...fadeUp}
              className="inline-block glass px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-muted-foreground uppercase"
            >
              The Vision
            </motion.span>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground"
            >
              Earning the <span className="text-gradient drop-shadow-[0_0_20px_hsl(174_72%_56%/0.3)]">Future</span>
              <br />Not Just <span className="text-gradient">Finances</span>
            </motion.h2>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                This isn't just another token. This is the{" "}
                <span className="text-primary font-semibold">genesis of a synthetic workforce</span>.
                A system where your participation doesn't just grant access — it creates the foundation for a fully autonomous economy.
              </p>
              <p>
                Through <span className="text-foreground font-semibold">collective intelligence</span>,
                we are engineering a living ecosystem that learns, adapts, and evolves.
                Every prediction strengthens the network. Every action fuels the revolution.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-xl p-6 border-l-2 border-primary/60 text-xl md:text-2xl font-display font-semibold text-foreground leading-snug"
            >
              "When AI controls jobs, those who own the infrastructure own{" "}
              <span className="text-primary">the future</span>."
            </motion.blockquote>
          </div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 max-w-3xl mx-auto"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(174_72%_56%/0.2)]">
                <f.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
