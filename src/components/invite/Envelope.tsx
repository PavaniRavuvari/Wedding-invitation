import { motion } from "framer-motion";
import { useState } from "react";
import ganesha from "@/assets/ganesha.png";
import { wedding } from "@/config/wedding";
import { Sparkles } from "./Effects";

export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const open = () => {
    setOpening(true);
    setTimeout(onOpen, 1600);
  };
  return (
    <motion.div className="fixed inset-0 z-40 flex items-center justify-center bg-page px-4" exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
      <Sparkles count={18} />
      <motion.div className="relative w-full max-w-sm" initial={{ scale: 0.9, opacity: 0 }} animate={opening ? { scale: 1.08, y: 40 } : { scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
        {/* card peeking out */}
        <motion.div className="absolute inset-x-6 top-6 h-[78%] rounded-lg border border-gold bg-card shadow-royal" animate={opening ? { y: -180 } : { y: 0 }} transition={{ delay: 0.7, duration: 0.9 }}>
          <img src={ganesha} alt="" className="mx-auto mt-6 h-20 w-20" />
          <p className="mt-2 text-center font-script text-3xl text-maroon">{wedding.bride.name.en} & {wedding.groom.name.en}</p>
        </motion.div>
        {/* envelope body */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl border-2 border-gold bg-maroon-gradient shadow-royal">
          <div className="absolute inset-3 rounded-lg border border-gold/60" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 p-8 pb-10 text-center">
            <p className="font-telugu text-2xl text-gold">{wedding.envelope.welcome.te}</p>
            <p className="font-serif text-sm uppercase tracking-[0.25em] text-primary-foreground">{wedding.envelope.welcome.en}</p>
            <p className="font-script text-4xl text-gold-gradient">{wedding.initials}</p>
            {!opening && (
              <motion.button onClick={open} whileTap={{ scale: 0.95 }} animate={{ boxShadow: ["0 0 0 0 var(--gold)", "0 0 0 10px transparent"] }} transition={{ repeat: Infinity, duration: 1.8 }} className="rounded-full bg-gold-gradient px-6 py-3 text-accent-foreground">
                <span className="block font-telugu text-base font-semibold">{wedding.envelope.button.te}</span>
                <span className="block font-serif text-xs uppercase tracking-widest">{wedding.envelope.button.en}</span>
              </motion.button>
            )}
          </div>
        </div>
        {/* flap */}
        <motion.div className="absolute inset-x-0 top-0 h-1/2 origin-top" style={{ transformStyle: "preserve-3d", perspective: 800 }} animate={opening ? { rotateX: 180 } : { rotateX: 0 }} transition={{ duration: 0.8 }}>
          <svg viewBox="0 0 300 200" preserveAspectRatio="none" className="h-full w-full drop-shadow-lg">
            <path d="M0 0 H300 L150 170 Z" fill="var(--maroon)" stroke="var(--gold)" strokeWidth="2" />
          </svg>
          <div className="absolute left-1/2 top-[70%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-vermilion">
            <img src={ganesha} alt="Ganesha seal" className="h-11 w-11 brightness-150" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
