import gauriArt from "@/assets/ritual-gauri.png";
import jeelakarraArt from "@/assets/ritual-jeelakarra.png";
import mangalyaArt from "@/assets/ritual-mangalyadharana.png";
import talambraluArt from "@/assets/ritual-talambralu.png";
import saptapadiArt from "@/assets/ritual-saptapadi.png";
import appagintaluArt from "@/assets/ritual-appagintalu.png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { CalendarPlus, Clock, MapPin, Navigation, X } from "lucide-react";
import ganesha from "@/assets/ganesha.png";
import arch from "@/assets/temple-arch.png";
import mandap from "@/assets/mandap-couple.jpg";
import { googleCalendarUrl, wedding, type WeddingEvent } from "@/config/wedding";
import { BiHeading, BiText, Corners, Divider, Reveal, Section } from "./primitives";
import { Sparkles } from "./Effects";
import { cn } from "@/lib/utils";


const w = wedding;

export function Hero() {
  const we = w.events[1]!;
  return (
    <section className="relative overflow-hidden pb-0">
      <motion.img
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        src={arch}
        alt="Temple arch with Lord Ganesha and bells"
        width={1536}
        height={768}
        className="relative z-10 mx-auto w-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="relative -mt-[16%] px-[12%] text-center text-shadow-soft"
      >
        <p className="mt-2 font-telugu text-lg font-semibold text-vermilion">
          {w.invitation.blessing.te}
        </p>

        <p className="font-display text-xs uppercase tracking-[0.3em] text-gold-deep">
          {w.invitation.blessing.en}
        </p>

        <Divider />

        <h1 className="mt-5 font-telugu text-2xl font-semibold text-maroon md:text-3xl">
          {w.invitation.heading.te}
        </h1>

        <p className="mt-1 font-display text-xs uppercase tracking-[0.25em] text-gold-deep md:text-sm">
          {w.invitation.heading.en}
        </p>

        {/* Groom's name first, bride's name below */}
        <div className="my-6">
          <p className="font-telugu text-2xl text-maroon">
            {w.bride.name.te}
          </p>

          <p className="font-script text-6xl leading-tight text-vermilion md:text-7xl">
            {w.bride.name.en}
          </p>

          <div className="my-1 flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-12 bg-gold" />
            <span className="font-script text-3xl text-maroon">weds</span>
            <span className="h-px w-12 bg-gold" />
          </div>

          <p className="font-telugu text-2xl text-maroon">
            {w.groom.name.te}
          </p>

          <p className="font-script text-6xl leading-tight text-vermilion md:text-7xl">
            {w.groom.name.en}
          </p>
        </div>

        {/* Invitation message inside a subtle gold-bordered box */}
        <div className="my-5 rounded-xl border border-gold px-5 py-4">
          <BiText
            t={w.invitation.message}
            teClass="text-base text-foreground"
            enClass="mt-1 text-base text-muted-foreground"
          />
        </div>

        {/* Bride's parents below the invitation message */}
        <BiText
          t={w.families.brideParents}
          teClass="text-base font-semibold text-maroon"
          enClass="text-base text-foreground"
        />

        <Divider />

        <div className="mt-5 space-y-3">
          <BiText
            t={we.dateLabel}
            teClass="text-xl font-semibold text-maroon"
            enClass="font-display text-sm not-italic uppercase tracking-widest text-gold-deep"
          />

          <BiText
            t={w.invitation.muhurtham}
            teClass="text-vermilion"
            enClass="text-sm"
          />

          <BiText
            t={we.timeLabel}
            teClass="text-lg text-maroon"
            enClass="text-sm"
          />

          <div>
            <p className="font-display text-base font-semibold text-maroon">
              {we.venueName}
            </p>
            <p className="font-serif text-sm text-muted-foreground">
              {we.address}
            </p>
          </div>
        </div>
      </motion.div>

      <img
        src={mandap}
        alt="Bride and groom seated at a traditional wedding mandap"
        width={1536}
        height={1024}
        className="relative mt-4 w-full fade-top"
      />
    </section>
  );
}

export function Couple() {
  const people = [w.bride, w.groom];
  const labels = [
    { te: "వధువు", en: "The Bride" },
    { te: "వరుడు", en: "The Groom" },
  ];

  return (
    <Section>
      <BiHeading t={{ te: "వదువరులు", en: "The Couple" }} />

      <div className="grid gap-12 md:grid-cols-2">
        {people.map((p, i) => (
          <Reveal key={i} delay={i * 0.2} className="text-center">
            <div className="relative mx-auto h-60 w-60 rounded-full bg-gold-gradient p-2 shadow-royal">
              <motion.div
                className="absolute -inset-3 rounded-full border-2 border-dashed border-gold"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <img
                src={p.photo}
                alt={p.name.en}
                loading="lazy"
                className="h-full w-full rounded-full border-4 border-card object-cover"
                style={{ objectPosition: p.photoPosition }}
              />
            </div>

            <BiText
              t={labels[i]!}
              className="mt-6"
              teClass="text-vermilion"
              enClass="text-xs font-display uppercase tracking-[0.25em] not-italic text-gold-deep"
            />

            <p className="mt-2 font-telugu text-2xl text-maroon">
              {p.name.te}
            </p>

            <p className="font-script text-5xl text-vermilion">
              {p.name.en}
            </p>

            <BiText
              t={p.intro}
              className="mt-2"
              teClass="text-sm"
              enClass="text-sm text-muted-foreground"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const themeCls: Record<WeddingEvent["theme"], string> = {
  haldi: "bg-haldi/25 border-marigold",
  wedding: "bg-maroon-gradient text-primary-foreground border-gold",
  reception: "bg-rose/20 border-gold",
};

function EventActions({ e }: { e: WeddingEvent }) {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-3">
      <a
        href={googleCalendarUrl(e)}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 font-serif text-sm font-semibold text-accent-foreground shadow-royal"
      >
        <CalendarPlus size={16} /> Add to Calendar
      </a>

      <a
        href={e.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-gold bg-leaf px-4 py-2 font-serif text-sm font-semibold text-maroon"
      >
        <Navigation size={16} /> Location
      </a>
    </div>
  );
}

function EventDetail({ e }: { e: WeddingEvent }) {
  const grand = e.theme === "wedding";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 p-6 text-center shadow-royal md:p-10",
        themeCls[e.theme]
      )}
    >
      <Corners />

      {grand && <Sparkles count={14} />}

      <img
        src={e.image}
        alt={e.title.en}
        loading="lazy"
        className={cn(
          "mx-auto w-full rounded-xl border border-gold object-cover",
          grand ? "aspect-[4/5] max-w-sm" : "aspect-[4/3]"
        )}
      />

      <h3
        className={cn(
          "mt-6 font-telugu font-semibold",
          grand ? "text-4xl text-gold" : "text-3xl text-maroon"
        )}
      >
        {e.title.te}
      </h3>

      <p
        className={cn(
          "font-serif font-display uppercase tracking-[0.25em]",
          grand ? "text-primary-foreground" : "text-gold-deep"
        )}
      >
        {e.title.en}
      </p>

      <Divider />

      <BiText
        t={e.message}
        className="mt-4"
        teClass="text-lg"
        enClass="text-base"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col items-center gap-1">
          <Clock className="text-gold" size={20} />

          <BiText
            t={e.dateLabel}
            teClass="font-semibold"
            enClass="text-sm"
          />

          <BiText
            t={e.timeLabel}
            teClass="text-sm"
            enClass="text-sm"
          />
        </div>

        <div className="flex flex-col items-center gap-1">
          <MapPin className="text-gold" size={20} />

          <p className="font-serif text-lg font-semibold">
            {e.venueName}
          </p>

          <p className="font-serif text-sm opacity-85">
            {e.address}
          </p>
        </div>
      </div>

      <EventActions e={e} />
    </div>
  );
}


function ScratchOverlay({
  theme,
  onReveal,
}: {
  theme: WeddingEvent["theme"];
  onReveal: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const moveCount = useRef(0);
  const revealed = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(ratio, ratio);

    const colors = {
      haldi: ["#f7df72", "#d9a51c"],
      wedding: ["#e9a7b5", "#a94763"],
      reception: ["#f3d68b", "#b3832e"],
    } as const;
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, colors[theme][0]);
    gradient.addColorStop(1, colors[theme][1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "rgba(255,255,255,0.18)";
    for (let x = 24; x < rect.width; x += 48) {
      for (let y = 24; y < rect.height; y += 48) {
        ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fffaf0";
    ctx.font = "600 25px Georgia, serif";
    ctx.fillText("Scratch to Reveal", rect.width / 2, rect.height / 2 - 16);
    ctx.font = "15px Georgia, serif";
    ctx.fillText(
      theme === "haldi" ? "Reveal the Haldi Invitation" :
      theme === "wedding" ? "Reveal the Wedding Invitation" :
      "Reveal the Reception Invitation",
      rect.width / 2, rect.height / 2 + 22,
    );
  }, [theme]);

  const scratch = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current || revealed.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const point = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 58;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    if (lastPoint.current) {
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(point.x, point.y);
    } else {
      ctx.arc(point.x, point.y, 29, 0, Math.PI * 2);
    }
    ctx.stroke();
    ctx.restore();
    lastPoint.current = point;
    moveCount.current += 1;
    if (moveCount.current % 5 !== 0) return;

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let clear = 0;
    let total = 0;
    for (let i = 3; i < pixels.length; i += 4 * 24) {
      total++;
      if (pixels[i] < 40) clear++;
    }
    if (total && clear / total >= 0.3) {
      revealed.current = true;
      drawing.current = false;
      onReveal();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      aria-label="Scratch to reveal the event invitation"
      className="absolute inset-0 z-20 h-full w-full touch-none cursor-crosshair rounded-2xl"
      onPointerDown={(event) => {
        if (revealed.current) return;
        drawing.current = true;
        lastPoint.current = null;
        event.currentTarget.setPointerCapture(event.pointerId);
        scratch(event);
      }}
      onPointerMove={scratch}
      onPointerUp={() => { drawing.current = false; lastPoint.current = null; }}
      onPointerCancel={() => { drawing.current = false; lastPoint.current = null; }}
    />
  );
}

function SprinkleEffect({
  theme,
  onDone,
}: {
  theme: WeddingEvent["theme"];
  onDone: () => void;
}) {
  const doneRef = useRef(onDone);
  doneRef.current = onDone;
  useEffect(() => {
    const timer = window.setTimeout(() => doneRef.current(), 3200);
    return () => window.clearTimeout(timer);
  }, []);

  const particles = Array.from({ length: 42 }, (_, i) => i);
  const symbol = theme === "haldi" ? "✦" : theme === "wedding" ? "🌸" : "✧";
  const color = theme === "haldi" ? "#d9a51c" : theme === "wedding" ? "#cf6681" : "#d6a32c";
  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-2xl" aria-hidden="true">
      {particles.map((i) => (
        <motion.span
          key={i}
          className="absolute top-0"
          style={{ left: `${(i * 37) % 100}%`, color, fontSize: theme === "wedding" ? 17 + (i % 3) * 3 : 14 + (i % 4) * 3 }}
          initial={{ y: -25, opacity: 0, rotate: 0 }}
          animate={{ y: [0, 260 + (i % 5) * 45], x: [0, i % 2 === 0 ? 24 : -24], opacity: [0, 1, 1, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 2.2 + (i % 5) * 0.18, delay: (i % 14) * 0.06, ease: "easeOut" }}
        >{symbol}</motion.span>
      ))}
    </div>
  );
}

export function Events() {
  const [active, setActive] = useState(1);
  const [scratchOpen, setScratchOpen] = useState(true);
  const [sprinkle, setSprinkle] = useState(false);
  const e: WeddingEvent = w.events[active]!;

  return (
    <Section id="events">
      <BiHeading
        t={{ te: "శుభ కార్యక్రమాలు", en: "Wedding Celebrations" }}
      />

      <div className="mb-8 grid grid-cols-3 gap-3">
        {w.events.map((ev, i) => (
          <motion.button
            key={ev.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActive(i);
              setScratchOpen(true);
              setSprinkle(false);
            }}
            className={cn(
              "overflow-hidden rounded-xl border-2 bg-leaf text-center transition-all",
              i === active
                ? "border-gold shadow-royal -translate-y-1"
                : "border-border opacity-75"
            )}
          >
            <img
              src={ev.image}
              alt=""
              loading="lazy"
              className="aspect-square w-full object-cover"
            />

            <div className="p-2">
              <p className="font-telugu text-sm text-maroon md:text-base">
                {ev.title.te}
              </p>

              <p className="font-serif text-[10px] uppercase tracking-widest text-gold-deep md:text-xs">
                {ev.title.en}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={e.id}
          initial={{ opacity: 0, x: 40, rotateY: 8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <EventDetail e={e} />
            {scratchOpen && (
              <ScratchOverlay
                theme={e.theme}
                onReveal={() => {
                  setScratchOpen(false);
                  setSprinkle(true);
                }}
              />
            )}
            {sprinkle && (
              <SprinkleEffect theme={e.theme} onDone={() => setSprinkle(false)} />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

export function Schedule() {
  return (
    <Section>
      <BiHeading
        t={{ te: "వేదిక & సమయం", en: "Venue & Schedule" }}
      />

      <div className="space-y-5">
        {w.events.map((e, i) => (
          <Reveal key={e.id} delay={i * 0.1}>
            <div className="flex flex-col gap-4 rounded-xl border border-gold bg-leaf p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-telugu text-xl text-maroon">
                  {e.title.te}
                </p>

                <p className="font-serif text-xs uppercase tracking-widest text-gold-deep">
                  {e.title.en}
                </p>

                <p className="mt-2 font-serif">
                  {e.dateLabel.en} · {e.timeLabel.en}
                </p>

                <p className="font-serif text-sm text-muted-foreground">
                  {e.venueName}, {e.address}
                </p>
              </div>

              <EventActions e={e} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Family() {
  const f = w.families;

  return (
    <Section>
      <Reveal className="relative mx-auto max-w-2xl rounded-2xl bg-leaf p-8 text-center shadow-royal gold-frame">
        <Corners />

        <BiHeading t={f.heading} />

        {/* Parents' details */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-serif text-xs font-display uppercase tracking-[0.25em] text-vermilion">
              Bride's Parents
            </p>

            <BiText
              t={f.brideParents}
              className="mt-2"
              teClass="text-lg text-maroon"
              enClass="text-base"
            />
          </div>

          <div>
            <p className="font-serif text-xs font-display uppercase tracking-[0.25em] text-vermilion">
              Groom's Parents
            </p>

            <BiText
              t={f.groomParents}
              className="mt-2"
              teClass="text-lg text-maroon"
              enClass="text-base"
            />
          </div>
        </div>

        {/* Special invitation from bride's sister */}
        <Divider />

        <div className="my-5 space-y-2 text-center">
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-vermilion">
            {f.sisterInvitation.heading.en}
          </p>

          <p className="font-telugu text-base font-medium text-maroon">
            {f.sisterInvitation.heading.te}
          </p>

          <p className="font-script text-4xl text-vermilion">
            {f.sisterInvitation.name}
          </p>

          <BiText
            t={f.sisterInvitation.message}
            teClass="text-sm text-maroon"
            enClass="text-sm text-muted-foreground italic"
          />
        </div>

        {/* Grandparents, relatives and friends */}
        <BiText
          t={f.members}
          className="mt-6"
          teClass="text-sm"
          enClass="text-sm text-muted-foreground"
        />

        <Divider />

        {/* Final blessing message */}
        <BiText
          t={f.message}
          className="mt-4"
          teClass="text-xl text-maroon"
          enClass="text-base text-gold-deep"
        />
      </Reveal>
    </Section>
  );
}

const weddingRituals = [
  {
    id: "gauri",
    title: { te: "గౌరీ పూజ", en: "Gauri Puja" },
    image: gauriArt,
    te: [
      "వధువు గౌరీ దేవిని భక్తితో పూజించి ఆశీస్సులు కోరుకుంటుంది.",
      "సుఖసంతోషాలతో కూడిన వైవాహిక జీవితం కోసం ప్రార్థిస్తుంది.",
      "ఈ పూజ కొత్త జీవితానికి శుభారంభంగా భావించబడుతుంది.",
    ],
    en: [
      "The bride worships Goddess Gauri with devotion and seeks her blessings.",
      "She prays for a happy and harmonious married life.",
      "This ritual symbolizes an auspicious beginning to her new journey.",
    ],
  },
  {
    id: "jeelakarra",
    title: { te: "జీలకర్ర బెల్లం", en: "Jeelakarra Bellam" },
    image: jeelakarraArt,
    te: [
      "వధూవరులు జీలకర్ర బెల్లాన్ని ఒకరి తలపై మరొకరు ఉంచుకుంటారు.",
      "ఇది వారి జీవితాల్లోని తీపి, కష్టాలను కలిసి పంచుకోవడాన్ని సూచిస్తుంది.",
      "ఈ ఆచారం వారి అనుబంధాన్ని, ఐక్యతను తెలియజేస్తుంది.",
    ],
    en: [
      "The bride and groom place cumin and jaggery on each other's heads.",
      "It symbolizes sharing life's sweetness and challenges together.",
      "This ritual represents their unity and lifelong bond.",
    ],
  },
  {
    id: "mangalyadharana",
    title: { te: "మాంగల్యధారణ", en: "Mangala Sutra Dharana" },
    image: mangalyaArt,
    te: [
      "వరుడు వధువు మెడలో మంగళసూత్రాన్ని కడతాడు.",
      "ఇది వివాహ బంధానికి పవిత్రమైన గుర్తుగా నిలుస్తుంది.",
      "వారి జీవితాంతపు అనుబంధానికి ఇది ప్రతీకగా భావించబడుతుంది.",
    ],
    en: [
      "The groom ties the sacred mangalsutra around the bride's neck.",
      "It marks the sacred bond of their marriage.",
      "It symbolizes their lifelong commitment to each other.",
    ],
  },
  {
    id: "talambralu",
    title: { te: "తలంబ్రాలు", en: "Talambralu" },
    image: talambraluArt,
    te: [
      "వధూవరులు ఒకరిపై మరొకరు పసుపు కలిపిన అక్షింతలు పోసుకుంటారు.",
      "ఇది ఆనందం, శ్రేయస్సు మరియు ఆశీర్వాదాలకు ప్రతీక.",
      "ఈ వేడుక వారి వివాహంలో సంతోషాన్ని నింపుతుంది.",
    ],
    en: [
      "The couple shower each other with rice mixed with turmeric.",
      "It symbolizes happiness, prosperity and blessings.",
      "This joyful ritual adds warmth to their wedding celebration.",
    ],
  },
  {
    id: "saptapadi",
    title: { te: "సప్తపది", en: "Saptapadi" },
    image: saptapadiArt,
    te: [
      "వధూవరులు పవిత్ర అగ్ని చుట్టూ ఏడు అడుగులు వేస్తారు.",
      "ప్రతి అడుగు వారి జీవితంలోని ఒక ముఖ్యమైన వాగ్దానాన్ని సూచిస్తుంది.",
      "ఇది జీవితాంతం కలిసి నడిచే బంధానికి ప్రతీక.",
    ],
    en: [
      "The couple take seven sacred steps around the holy fire.",
      "Each step represents an important promise for their married life.",
      "It symbolizes their journey together through life.",
    ],
  },
  {
    id: "appagintalu",
    title: { te: "అప్పగింతలు", en: "Appagintalu" },
    image: appagintaluArt,
    te: [
      "తల్లిదండ్రులు తమ కుమార్తెను ప్రేమతో కొత్త కుటుంబానికి అప్పగిస్తారు.",
      "ఇది ఆనందం, ఆశీర్వాదాలు మరియు భావోద్వేగాలతో కూడిన ఘట్టం.",
      "వధువు జీవితంలో కొత్త అధ్యాయానికి ఇది నాంది పలుకుతుంది.",
    ],
    en: [
      "The bride's parents lovingly entrust her to her new family.",
      "It is an emotional moment filled with love and blessings.",
      "It marks the beginning of a new chapter in her life.",
    ],
  },
] as const;


export function Gallery() {
  const [selected, setSelected] =
    useState<(typeof weddingRituals)[number] | null>(null);

  return (
    <Section>
      <BiHeading
        t={{ te: "మన వివాహ సంప్రదాయాలు", en: "Our Wedding Rituals" }}
      />

      <p className="mx-auto mb-8 max-w-xl text-center font-serif text-sm text-muted-foreground">
        Discover the beautiful traditions and sacred rituals
        that make a Telugu wedding truly special.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {weddingRituals.map((ritual, i) => (
          <Reveal key={ritual.id} delay={i * 0.08}>
            <motion.button
              type="button"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(ritual)}
              className="group w-full overflow-hidden rounded-2xl border-2 border-gold bg-leaf p-2 text-center shadow-royal transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden rounded-xl border border-gold/60">
                <img
                  src={ritual.image}
                  alt={ritual.title.en}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="px-2 py-4">
                <p className="font-telugu text-xl font-semibold text-maroon">
                  {ritual.title.te}
                </p>

                <p className="mt-1 font-display text-sm font-semibold text-gold-deep">
                  {ritual.title.en}
                </p>

                <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                  <span className="h-px w-8 bg-gold" />
                  <span className="text-gold">✿</span>
                  <span className="h-px w-8 bg-gold" />
                </div>

                <p className="mt-2 font-serif text-xs text-muted-foreground">
                  Tap to explore this ritual
                </p>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-maroon/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="ritual-title"
              className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-gold bg-leaf p-4 shadow-2xl md:p-7"
              initial={{ opacity: 0, scale: 0.9, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 25 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close ritual details"
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-maroon text-gold shadow-md transition-transform hover:scale-110"
              >
                <X size={20} />
              </button>

              <div className="grid items-center gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border-2 border-gold shadow-royal">
                  <img
                    src={selected.image}
                    alt={selected.title.en}
                    className="max-h-[420px] w-full object-cover"
                  />
                </div>

                <div className="px-1 py-3 text-center md:px-3">
                  <p className="mb-2 text-2xl text-gold">❀</p>

                  <h3
                    id="ritual-title"
                    className="font-telugu text-3xl font-bold text-maroon"
                  >
                    {selected.title.te}
                  </h3>

                  <p className="mt-1 font-display text-lg font-semibold text-gold-deep">
                    {selected.title.en}
                  </p>

                  <div className="my-4 flex items-center justify-center gap-2">
                    <span className="h-px flex-1 bg-gold" />
                    <span className="text-gold">✿</span>
                    <span className="h-px flex-1 bg-gold" />
                  </div>

                  <div className="space-y-3 text-left">
                    {selected.te.map((line, i) => (
                      <p
                        key={`te-${i}`}
                        className="font-telugu text-base leading-8 text-maroon"
                      >
                        <span className="mr-2 text-vermilion">❀</span>
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="my-4 border-t border-gold/60" />

                  <div className="space-y-3 text-left">
                    {selected.en.map((line, i) => (
                      <p
                        key={`en-${i}`}
                        className="font-serif text-sm leading-6 text-foreground"
                      >
                        <span className="mr-2 text-vermilion">❀</span>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}


function diff(target: number) {
  const d = Math.max(0, target - Date.now());

  return {
    days: Math.floor(d / 864e5),
    hours: Math.floor(d / 36e5) % 24,
    minutes: Math.floor(d / 6e4) % 60,
    seconds: Math.floor(d / 1e3) % 60,
  };
}

export function Countdown() {
  const target = new Date(w.countdown.target).getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff(target));

    const id = setInterval(() => setT(diff(target)), 1000);

    return () => clearInterval(id);
  }, [target]);

  const keys = ["days", "hours", "minutes", "seconds"] as const;

  return (
    <Section>
      <Sparkles count={14} />

      <Reveal className="text-center">
        <div className="relative mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gold-gradient shadow-royal">
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-dotted border-gold"
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-leaf font-script text-3xl text-maroon">
            {w.initials}
          </div>
        </div>

        <BiHeading t={w.countdown.heading} />

        <div className="grid grid-cols-4 gap-2 md:gap-5">
          {keys.map((k) => (
            <div
              key={k}
              className="rounded-xl border-2 border-gold bg-leaf px-1 py-4 shadow-royal"
            >
              <p className="font-serif text-3xl font-bold text-maroon md:text-5xl">
                {t ? String(t[k]).padStart(2, "0") : "--"}
              </p>

              <p className="font-telugu text-xs text-vermilion md:text-sm">
                {w.countdown.labels[k].te}
              </p>

              <p className="font-serif text-[10px] uppercase tracking-widest text-gold-deep">
                {w.countdown.labels[k].en}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function Closing() {
  return (
    <section className="relative overflow-hidden pt-16 text-center">
      <Reveal className="relative mx-auto max-w-md px-6">
        <img
          src={ganesha}
          alt=""
          aria-hidden
          className="mx-auto h-16 w-16"
        />

        <p className="mt-4 font-script text-5xl text-vermilion">
          {w.bride.name.en} & {w.groom.name.en}
        </p>

        <p className="font-telugu text-xl text-maroon">
          {w.bride.name.te} ❀ {w.groom.name.te}
        </p>

        <Divider />

        <BiText
          t={w.closing.blessing}
          className="mt-6"
          teClass="text-2xl text-maroon"
          enClass="text-base"
        />

        <BiText
          t={w.closing.thanks}
          className="mt-6"
          teClass="text-2xl text-vermilion"
          enClass="font-script text-4xl not-italic text-gold-deep"
        />
      </Reveal>

      <img
        src={mandap}
        alt="Bride and groom at the mandap"
        loading="lazy"
        width={1536}
        height={1024}
        className="mt-6 w-full fade-top"
      />
    </section>
  );
}
