import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Bilingual } from "@/config/wedding";
import { cn } from "@/lib/utils";

export function BiText({ t, className, teClass, enClass }: { t: Bilingual; className?: string; teClass?: string; enClass?: string }) {
  return (
    <div className={cn("text-center", className)}>
      <p className={cn("font-telugu leading-relaxed", teClass)}>{t.te}</p>
      <p className={cn("font-serif italic opacity-85", enClass)}>{t.en}</p>
    </div>
  );
}

export function BiHeading({ t, light }: { t: Bilingual; light?: boolean }) {
  return (
    <div className="mb-8 text-center">
      <h2 className={cn("font-telugu text-3xl font-semibold md:text-4xl", light ? "text-gold" : "text-maroon")}>{t.te}</h2>
      <p className={cn("mt-1 font-serif text-sm font-display uppercase tracking-[0.25em]", light ? "text-primary-foreground" : "text-gold-deep")}>{t.en}</p>
      <Divider />
    </div>
  );
}

export function Divider() {
  return (
    <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-gold">
      <span className="h-px w-10 bg-gold" />
      <svg width="16" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 4 4 6 8 7-4 1-7 3-8 7-1-4-4-6-8-7 4-1 7-3 8-7z" /><circle cx="12" cy="20" r="2" /></svg>
      <span className="h-px w-10 bg-gold" />
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("relative px-5 py-20 md:py-28", className)}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

/** Corner ornaments for gold frames */
export function Corners() {
  const c = "absolute h-10 w-10 border-gold";
  return (
    <>
      <span className={cn(c, "left-2 top-2 rounded-tl-xl border-l-2 border-t-2")} />
      <span className={cn(c, "right-2 top-2 rounded-tr-xl border-r-2 border-t-2")} />
      <span className={cn(c, "bottom-2 left-2 rounded-bl-xl border-b-2 border-l-2")} />
      <span className={cn(c, "bottom-2 right-2 rounded-br-xl border-b-2 border-r-2")} />
    </>
  );
}

export function Toran() {
  // mango-leaf garland
  return (
    <div className="pointer-events-none flex justify-center overflow-hidden" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <svg key={i} width="28" height="40" viewBox="0 0 28 40" className="shrink-0">
          <path d="M14 0 C24 10 22 28 14 38 C6 28 4 10 14 0z" fill={i % 3 === 1 ? "var(--marigold)" : "oklch(0.5 0.12 145)"} />
        </svg>
      ))}
    </div>
  );
}
