
// ============================================================
//  WEDDING DETAILS — edit everything here. All Telugu text is editable.
// ============================================================

import couple from "@/assets/couple-mandap.jpg";
import haldiArt from "@/assets/haldi.jpg";
import receptionArt from "@/assets/reception.jpg";
import weddingMusic from "@/assets/wedding-song.mp3";
import bridePhoto from "@/assets/bride.jpg";
import groomPhoto from "@/assets/groom.jpg";

export type Bilingual = {
  te: string;
  en: string;
};

export type WeddingEvent = {
  id: "haldi" | "wedding" | "reception";
  title: Bilingual;
  message: Bilingual;
  dateLabel: Bilingual;
  timeLabel: Bilingual;
  /** ISO date-time with India timezone (+05:30), used for Google Calendar */
  start: string;
  end: string;
  venueName: string;
  address: string;
  mapsUrl: string;
  image: string;
  theme: "haldi" | "wedding" | "reception";
};

export const wedding = {
  bride: {
    name: { te: "నిత్య శ్రీ", en: "Nithya Sri" },
    photo: bridePhoto,
    photoPosition: "30% 40%",
    intro: {
      te: "శ్రీ వెంకట శివ ప్రసాద్ & శ్రీమతి శ్రీదేవి గార్ల జేష్ఠ పుత్రిక",
      en: "Beloved daughter of Sri Venkata Siva Prasad & Srimathi Sridevi ",
    },
  },

  groom: {
    name: { te: "సాత్విక్", en: "Sathwik" },
    photo: groomPhoto,
    photoPosition: "68% 40%",
    intro: {
      te: "శ్రీ శ్రీనివాసులు & శ్రీమతి వరలక్ష్మి గార్ల ఏకైక పుత్రుడు",
      en: "Beloved son of Sri Srinivasulu & Srimathi VaraLakshmi",
    },
  },

  initials: "N & S",

  envelope: {
    welcome: { te: "శుభ స్వాగతం", en: "A warm welcome to you" },
    button: { te: "ఆహ్వాన పత్రిక తెరవండి", en: "Open Invitation" },
  },

  invitation: {
    blessing: { te: "శ్రీ గణేశాయ నమః", en: "Sri Ganeshaya Namaha" },
    heading: {
      te: "రావువారి వారి పెళ్లి సందడి",
      en: "You are cordially invited to our wedding",
    },
    message: {
      te: "మా అమ్మాయి వివాహ మహోత్సవానికి మీరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి, నూతన వదువరులను ఆశీర్వదించవలసిందిగా ప్రార్థన.",
      en: "With joy, we request your gracious presence with family at the wedding of our daughter, to bless the couple.",
    },
    muhurtham: { te: "శుభ ముహూర్తం", en: "Auspicious Muhurtham" },
  },

  families: {
    heading: { te: "ఆహ్వానించువారు", en: "With Blessings From" },

    brideParents: {
      te: "శ్రీ వెంకట శివ ప్రసాద్ & శ్రీమతి శ్రీదేవి",
      en: "Sri Venkata Siva Prasad & Smt. Sridevi",
    },

    groomParents: {
      te: "శ్రీ శ్రీనివాసులు & శ్రీమతి వరలక్ష్మి",
      en: "Sri Srinivasulu & Smt. VaraLakshmi",
    },

    // Special invitation from the bride's sister
    sisterInvitation: {
      heading: {
        te: "వధువు సోదరి నుండి ప్రత్యేక ఆహ్వానం",
        en: "A Special Invitation From The Bride's Sister",
      },
      name: "Pinky",
      message: {
        en: "With love, Pinky warmly invites you to celebrate this special occasion.",
      },
    },

    members: {
      te: "బంధుమిత్రులు",
      en: "Relatives & friends",
    },

    message: {
      te: "మీ రాక మాకు ఆనందం, మీ ఆశీస్సులే మాకు బలం.",
      en: "Your presence is our joy; your blessings are our strength.",
    },
  },

  events: [
    // --------------------------------------------------------
    // HALDI — Friday, 20 November 2026
    // --------------------------------------------------------
    {
      id: "haldi",
      theme: "haldi",
      title: { te: "పసుపు వేడుక", en: "Haldi Ceremony" },
      message: {
        te: "పసుపు కుంకుమలతో పెళ్లి కూతురిని ఆశీర్వదించడానికి రండి.",
        en: "Join us to bless the bride with turmeric and joy.",
      },
      dateLabel: {
        te: "శుక్రవారం, 20 నవంబర్ 2026",
        en: "Friday, 20 November 2026",
      },
      timeLabel: {
        te: "ఉదయం 9:00 గంటలకు",
        en: "9:00 AM onwards",
      },
      start: "2026-11-20T09:00:00+05:30",
      end: "2026-11-20T12:00:00+05:30",
      venueName: "Bride's Residence",
      address:
        "Addanki Nancharamma Ammavari Temple Road, Parchur",
      mapsUrl:
        "https://maps.app.goo.gl/5sg2H4WC16n7pRr99?g_st=aw",
      image: haldiArt,
    },

    // --------------------------------------------------------
    // WEDDING — Sunday, 22 November 2026
    // --------------------------------------------------------
    {
      id: "wedding",
      theme: "wedding",
      title: { te: "వివాహ మహోత్సవం", en: "Wedding Ceremony" },
      message: {
        te: "శుభ ముహూర్తాన జరిగే మా అమ్మాయి కళ్యాణానికి విచ్చేసి వదువరులను ఆశీర్వదించండి.",
        en: "Grace the sacred union at the auspicious muhurtham and bless the couple.",
      },
      dateLabel: {
        te: "ఆదివారం, 22 నవంబర్ 2026",
        en: "Sunday, 22 November 2026",
      },
      timeLabel: {
        te: "రాత్రి 8:45 గంటలకు",
        en: "Muhurtham 8:45 PM",
      },
      start: "2026-11-22T20:45:00+05:30",
      end: "2026-11-22T23:45:00+05:30",
      venueName: "Sri Srinivasa Kalyana Mandapam",
      address: "Sri Srinivasa Kalyana Mandapam, Darsi",
      mapsUrl:
        "https://maps.app.goo.gl/UG6kcYU37XQS29zk6?g_st=aw",
      image: couple,
    },

    // --------------------------------------------------------
    // RECEPTION — Tuesday, 24 November 2026
    // --------------------------------------------------------
    {
      id: "reception",
      theme: "reception",
      title: { te: "విందు వేడుక", en: "Reception" },
      message: {
        te: "నూతన దంపతులతో కలిసి విందు ఆనందాన్ని పంచుకోండి.",
        en: "Celebrate the newlyweds with us over dinner.",
      },
      dateLabel: {
        te: "మంగళవారం, 24 నవంబర్ 2026",
        en: "Tuesday, 24 November 2026",
      },
      timeLabel: {
        te: "మధ్యాహ్నం 12:00 గంటలకు",
        en: "12:00 PM onwards",
      },
      start: "2026-11-24T12:00:00+05:30",
      end: "2026-11-24T16:00:00+05:30",
      venueName: "Sri Addanki Nancharamma Kalyana Mandapam",
      address:
        "Addanki Nancharamma Ammavari Temple Road, Parchur",
      mapsUrl:
        "https://share.google/XXMrd693gvWpSiP5P",
      image: receptionArt,
    },
  ] satisfies WeddingEvent[],

  countdown: {
    target: "2026-11-22T20:45:00+05:30",
    heading: {
      te: "శుభ ముహూర్తానికి ఇంకా",
      en: "Counting down to the Muhurtham",
    },
    labels: {
      days: { te: "రోజులు", en: "Days" },
      hours: { te: "గంటలు", en: "Hours" },
      minutes: { te: "నిమిషాలు", en: "Minutes" },
      seconds: { te: "సెకన్లు", en: "Seconds" },
    },
  },

  gallery: [
    couple,
    haldiArt,
    receptionArt,
    couple,
    receptionArt,
    haldiArt,
  ],

  closing: {
    blessing: {
      te: "నూరేళ్లు చల్లగా వర్ధిల్లండి",
      en: "May you flourish together for a hundred years",
    },
    thanks: { te: "ధన్యవాదాలు", en: "Thank you" },
  },

  // Put an mp3 URL here. Empty hides the player.
  music:weddingMusic,
};

export function googleCalendarUrl(e: WeddingEvent) {
  const fmt = (iso: string) =>
    new Date(iso)
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");

  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `${e.title.en} – ${wedding.bride.name.en} & ${wedding.groom.name.en}`,
    dates: `${fmt(e.start)}/${fmt(e.end)}`,
    details: `${e.title.te} | ${e.message.en}`,
    location: `${e.venueName}, ${e.address}`,
  });

  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}
