import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { wedding } from "@/config/wedding";

export function Petals() {
  const [items, setItems] = useState<{ l: number; d: number; s: number; delay: number; c: string }[]>([]);
  useEffect(() => {
    const colors = ["var(--rose)", "var(--marigold)", "var(--vermilion)", "var(--gold)"];
    setItems(Array.from({ length: 16 }, (_, i) => ({ l: Math.random() * 100, d: 10 + Math.random() * 10, s: 8 + Math.random() * 10, delay: Math.random() * 12, c: colors[i % 4]! })));
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
      {items.map((p, i) => (
        <motion.span
          key={i}
          className="absolute -top-8 block rounded-[60%_0]"
          style={{ left: `${p.l}%`, width: p.s, height: p.s, background: p.c, opacity: 0.7 }}
          animate={{ y: ["0vh", "110vh"], x: [0, 40, -30, 20], rotate: [0, 360] }}
          transition={{ duration: p.d, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

export function Sparkles({ count = 10 }: { count?: number }) {
  const [items, setItems] = useState<{ l: number; t: number; d: number }[]>([]);
  useEffect(() => setItems(Array.from({ length: count }, () => ({ l: Math.random() * 100, t: Math.random() * 100, d: Math.random() * 3 }))), [count]);
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {items.map((s, i) => (
        <motion.span key={i} className="absolute text-gold" style={{ left: `${s.l}%`, top: `${s.t}%` }} animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 0.4] }} transition={{ duration: 2.5, delay: s.d, repeat: Infinity }}>
          ✦
        </motion.span>
      ))}
    </div>
  );
}

export function MusicToggle({ start }: { start: boolean }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (start && ref.current) ref.current.play().then(() => setPlaying(true)).catch(() => {});
  }, [start]);
  if (!wedding.music) return null;
  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => {});
    else { a.pause(); setPlaying(false); }
  };
  return (
    <>
      <audio ref={ref} src={wedding.music} loop preload="none" />
      <button onClick={toggle} aria-label={playing ? "Pause music" : "Play music"} className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-maroon-gradient text-gold shadow-royal">
        {playing ? <motion.span animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}><Music size={20} /></motion.span> : <VolumeX size={20} />}
      </button>
    </>
  );
}
