import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

interface EnterProtocolModalProps {
  open: boolean;
  onClose: () => void;
}

const EnterProtocolModal = ({ open, onClose }: EnterProtocolModalProps) => {
  const [referral, setReferral] = useState("");

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto relative w-full max-w-md rounded-2xl border border-primary/20 p-8 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(230 20% 12% / 0.95), hsl(230 25% 7% / 0.98))",
                boxShadow: "0 0 60px hsl(174 72% 56% / 0.1), 0 0 120px hsl(270 60% 65% / 0.05), 0 25px 50px hsl(230 25% 7% / 0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                background: "linear-gradient(135deg, hsl(174 72% 56% / 0.08), transparent 50%, hsl(270 60% 65% / 0.08))",
              }} />

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 space-y-6">
                {/* Title */}
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-wider text-foreground uppercase">
                    Connect Wallet
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    Connect your crypto wallet to start mining Evumus tokens and earning rewards in our decentralized ecosystem.
                  </p>
                </div>

                {/* Referral Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Referral Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter referrer's wallet address"
                    value={referral}
                    onChange={(e) => setReferral(e.target.value)}
                    className="w-full rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary/60 focus:shadow-[0_0_20px_hsl(174_72%_56%/0.15)] focus:bg-muted/60"
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="group w-full rounded-lg py-3.5 font-semibold text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, hsl(200 30% 75%), hsl(210 20% 85%))",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, hsl(174 72% 56%), hsl(270 60% 65%))";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px hsl(174 72% 56% / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, hsl(200 30% 75%), hsl(210 20% 85%))";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }}
                >
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <ChevronRight className="w-5 h-5 -ml-3 transition-transform group-hover:translate-x-1" />
                  <ChevronRight className="w-5 h-5 -ml-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnterProtocolModal;
