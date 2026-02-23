import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import CountdownTimer from "./CountdownTimer";
import TypewriterText from "./TypewriterText";
import SpinnerIcon from "./SpinnerIcon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      {/* Dotted pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
        >
          <span className="text-sm font-medium text-muted-foreground">
            Protocol Activation
          </span>
          <span className="text-sm font-bold text-primary">29 March</span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <CountdownTimer />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <SpinnerIcon className="w-16 h-16 md:w-20 md:h-20" />
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient">
            Evumus AI
          </h1>
        </motion.div>

        {/* Typewriter headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
        >
          The Future is <TypewriterText />
          <span className="animate-pulse-glow text-primary">|</span>
        </motion.h2>

        {/* Subtitle lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="space-y-1 mb-10 text-lg md:text-xl text-muted-foreground"
        >
          <p>Where AI meets <span className="font-semibold text-primary">Web3</span>.</p>
          <p>Where predictions become <span className="font-semibold text-foreground">power</span>.</p>
          <p>Where AI Employees <span className="font-semibold text-foreground">build your future</span>.</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="group glass glow px-8 py-3.5 rounded-lg border border-primary/40 text-foreground font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_hsl(174_72%_56%/0.3)]">
            Enter the Protocol
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="glass px-8 py-3.5 rounded-lg text-foreground font-medium transition-all duration-300 hover:bg-muted/50">
            Explore Vision
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex justify-center gap-12 md:gap-20"
        >
          {[
            { value: "100%", label: "Decentralized" },
            { value: "∞", label: "Intelligence" },
            { value: "0", label: "Limits" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary glow-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary/60"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
