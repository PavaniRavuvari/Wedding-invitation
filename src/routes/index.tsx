import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Envelope } from "@/components/invite/Envelope";
import { MusicToggle, Petals } from "@/components/invite/Effects";
import { Closing, Countdown, Couple, Events, Family, Gallery, Hero, Schedule } from "@/components/invite/Sections";
import pillar from "@/assets/pillar-garland.png";
import parchment from "@/assets/parchment.jpg";
import { wedding } from "@/config/wedding";

const title = `${wedding.bride.name.en} & ${wedding.groom.name.en} – Wedding Invitation`;
const desc = "మా ఇంటి పెళ్లి పిలుపు · You are cordially invited to our wedding — Haldi, Wedding & Reception.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  return (
    <main className="min-h-screen overflow-x-hidden">
      <AnimatePresence>{!opened && <Envelope onOpen={() => setOpened(true)} />}</AnimatePresence>
      {opened && (
        <>
          <div aria-hidden className="pointer-events-none fixed inset-0 bg-repeat" style={{ backgroundImage: `url(${parchment})`, backgroundSize: "520px" }} />
          <Petals />
          <img src={pillar} alt="" aria-hidden width={640} height={1920} className="pointer-events-none fixed left-0 top-0 z-20 h-screen w-[15vw] max-w-[170px] object-cover lg:left-[max(0px,calc(50%-560px))]" />
          <img src={pillar} alt="" aria-hidden width={640} height={1920} className="pointer-events-none fixed right-0 top-0 z-20 h-screen w-[15vw] max-w-[170px] -scale-x-100 object-cover lg:right-[max(0px,calc(50%-560px))]" />
          <div className="relative z-10 mx-auto max-w-3xl px-[15vw] lg:px-6">
          <Hero />
          <Couple />
          <Events />
          <Schedule />
          <Family />
          <Gallery />
          <Countdown />
          <Closing />
          </div>
        </>
      )}
      <MusicToggle start={opened} />
    </main>
  );
}
