import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Calendar, TrendingUp, ChevronRight } from "lucide-react";

interface CreateWindowModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateWindowModal = ({ open, onClose }: CreateWindowModalProps) => {
  const [question, setQuestion] = useState("");
  const [timeline, setTimeline] = useState(2030);
  const [yesPercent] = useState(53);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto relative w-full max-w-lg rounded-2xl border border-secondary/20 p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
              style={{
                background: "linear-gradient(135deg, hsl(230 20% 12% / 0.95), hsl(230 25% 7% / 0.98))",
                boxShadow: "0 0 60px hsl(270 60% 65% / 0.12), 0 0 120px hsl(174 72% 56% / 0.05), 0 25px 50px hsl(230 25% 7% / 0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                background: "linear-gradient(135deg, hsl(270 60% 65% / 0.06), transparent 50%, hsl(174 72% 56% / 0.06))",
              }} />

              {/* Close */}
              <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10">
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Prediction Window</span>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full border border-secondary/30 text-secondary bg-secondary/10">
                    Creator Mode
                  </span>
                </div>

                {/* Question */}
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Will BTC reach $1M By year 2030?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full bg-transparent text-xl md:text-2xl font-display font-bold text-foreground placeholder:text-muted-foreground/60 outline-none border-none"
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-mono tracking-widest uppercase">Timeline</span>
                  </div>
                  <p className="text-2xl font-display font-bold text-foreground">{timeline}</p>
                  <div className="relative">
                    <input
                      type="range"
                      min={2025}
                      max={2050}
                      value={timeline}
                      onChange={(e) => setTimeline(Number(e.target.value))}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, hsl(270 60% 65%) 0%, hsl(270 60% 65%) ${((timeline - 2025) / 25) * 100}%, hsl(230 15% 20%) ${((timeline - 2025) / 25) * 100}%, hsl(230 15% 20%) 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>2025</span>
                      <span>2050</span>
                    </div>
                  </div>
                </div>

                {/* YES / NO */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="glass rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">YES</span>
                      </div>
                      <span className="text-2xl font-display font-bold text-foreground">{yesPercent}%</span>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 border border-secondary/20 hover:border-secondary/40 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-secondary rotate-180" />
                        <span className="text-sm font-semibold text-secondary">NO</span>
                      </div>
                      <span className="text-2xl font-display font-bold text-foreground">{100 - yesPercent}%</span>
                    </div>
                  </div>
                </div>

                {/* Creator Profile */}
                <div className="glass rounded-xl p-4 border border-border/40 space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Creator Profile
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Credibility Score <span className="text-foreground font-bold ml-1">7.8/10</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Volume Cap Limit <span className="text-foreground font-bold ml-1">500K</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="glass rounded-xl p-4 border border-border/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Votes <span className="text-foreground font-bold ml-1">2,705</span>
                      <span className="text-primary text-xs ml-1">↑</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Staked Volume <span className="text-foreground font-bold ml-1">98.1K</span>
                    </div>
                  </div>
                  {/* Mini chart placeholder */}
                  <div className="h-16 w-full relative overflow-hidden rounded-lg">
                    <svg viewBox="0 0 400 60" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(270 60% 65%)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="hsl(270 60% 65%)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,40 Q50,35 100,30 T200,25 T300,20 T400,30" fill="none" stroke="hsl(270 60% 65%)" strokeWidth="2" />
                      <path d="M0,40 Q50,35 100,30 T200,25 T300,20 T400,30 L400,60 L0,60 Z" fill="url(#chartGrad)" />
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-muted-foreground px-1">
                      <span>10 days ago</span>
                      <span className="text-secondary font-semibold">53% YES</span>
                      <span>Now</span>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl py-3.5 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, hsl(270 60% 65%), hsl(174 72% 56%))",
                    boxShadow: "0 0 20px hsl(270 60% 65% / 0.2)",
                  }}
                >
                  <span className="text-primary-foreground font-bold tracking-wider">Launch Window</span>
                  <ChevronRight className="w-4 h-4 text-primary-foreground" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CreateWindowModal;
