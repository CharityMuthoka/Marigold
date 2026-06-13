import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Sparkles, Flame, Wind, Moon, Sun, Music2, Camera, Utensils,
  Flower2, Lightbulb, Wine, Mic2, ArrowRight, Clock,
  Calendar, Users, DollarSign, Palette, Mail, Phone, User, MapPin, MessageSquare, CheckCircle2,
} from "lucide-react";
import garden from "@/assets/exp-garden.jpg";
import loft from "@/assets/exp-loft.jpg";
import desert from "@/assets/exp-desert.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Marigold & Ember" },
      { name: "description", content: "Signature event experiences, an interactive Vibe Finder, a live investment estimator, and the small details that make our nights unforgettable." },
      { property: "og:title", content: "Signature Experiences — Marigold & Ember" },
      { property: "og:description", content: "Tour our signature event worlds, build your own vibe, and preview a custom investment range — all in one place." },
      { property: "og:image", content: garden },
    ],
  }),
  component: Experiences,
});

// ---------- Signature worlds ----------
const worlds = [
  {
    name: "Golden Hour Garden",
    tag: "Outdoor · 60–140 guests",
    img: garden,
    blurb: "Long farm tables, tapered candles, terracotta linens and roses still warm from the sun.",
    palette: ["#f7931e", "#ff6b35", "#e84393"],
  },
  {
    name: "Velvet Loft Gala",
    tag: "Indoor · 80–300 guests",
    img: loft,
    blurb: "Industrial bones, magenta uplighting, amber pendants and a long banquet that ends in a dance floor.",
    palette: ["#6c5ce7", "#e84393", "#f7931e"],
  },
  {
    name: "Desert Dusk Dinner",
    tag: "Destination · 24–80 guests",
    img: desert,
    blurb: "Low tables on layered rugs, lanterns staked in the sand, a fire pit at the center of every story.",
    palette: ["#ff6b35", "#c2956b", "#6c5ce7"],
  },
];

// ---------- Vibe Finder ----------
type Vibe = "garden" | "loft" | "desert";
const quiz: { q: string; options: { label: string; icon: typeof Sun; vibe: Vibe }[] }[] = [
  {
    q: "When the night peaks, the room should feel…",
    options: [
      { label: "Warm and lingering", icon: Sun, vibe: "garden" },
      { label: "Loud and electric", icon: Flame, vibe: "loft" },
      { label: "Quiet and wide open", icon: Moon, vibe: "desert" },
    ],
  },
  {
    q: "The first thing a guest should notice…",
    options: [
      { label: "The flowers", icon: Flower2, vibe: "garden" },
      { label: "The lighting", icon: Lightbulb, vibe: "loft" },
      { label: "The horizon", icon: Wind, vibe: "desert" },
    ],
  },
  {
    q: "After the toast, we want…",
    options: [
      { label: "A long, slow dinner", icon: Utensils, vibe: "garden" },
      { label: "A DJ and a packed floor", icon: Music2, vibe: "loft" },
      { label: "A bonfire and a guitar", icon: Flame, vibe: "desert" },
    ],
  },
];

function VibeFinder() {
  const [answers, setAnswers] = useState<(Vibe | null)[]>([null, null, null]);
  const step = answers.findIndex((a) => a === null);
  const done = step === -1;

  const result = useMemo<Vibe>(() => {
    const tally: Record<Vibe, number> = { garden: 0, loft: 0, desert: 0 };
    answers.forEach((a) => a && (tally[a] += 1));
    return (Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0] as Vibe);
  }, [answers]);

  const world = worlds.find((w) =>
    result === "garden" ? w.name.startsWith("Golden") :
    result === "loft" ? w.name.startsWith("Velvet") :
    w.name.startsWith("Desert")
  )!;

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
      <div className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
        <Sparkles className="h-3 w-3" /> Vibe Finder · {done ? "Complete" : `${step + 1} of ${quiz.length}`}
      </div>

      {!done ? (
        <div className="mt-6">
          <h3 className="font-display text-3xl md:text-4xl">{quiz[step].q}</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {quiz[step].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => {
                  const next = [...answers];
                  next[step] = opt.vibe;
                  setAnswers(next);
                }}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-background p-6 text-left transition-all hover:-translate-y-1 hover:border-accent hover:shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-primary-foreground">
                  <opt.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-xl">{opt.label}</span>
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-1.5">
            {quiz.map((_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-blue-700" : "bg-border"}`} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-2xl">
            <img src={world.img} alt={world.name} loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Your vibe</p>
            <h3 className="mt-2 font-display text-4xl md:text-5xl">{world.name}</h3>
            <p className="mt-4 text-foreground/80">{world.blurb}</p>
            <div className="mt-6 flex gap-2">
              {world.palette.map((c) => (
                <span key={c} className="h-9 w-9 rounded-full border border-border" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow">
                Book this vibe <ArrowRight className="h-4 w-4" />
              </Link>
              <button onClick={() => setAnswers([null, null, null])} className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted">
                Start over
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Investment Estimator ----------
function Estimator() {
  const [guests, setGuests] = useState(120);
  const [tier, setTier] = useState<"essentials" | "signature" | "couture">("signature");
  const [addons, setAddons] = useState<string[]>(["florals"]);

  const tierMultiplier = { essentials: 380, signature: 720, couture: 1280 }[tier];
  const addonCost = addons.reduce((sum, a) => sum + ({
    florals: 8500, lighting: 6200, photo: 9400, live: 11200, bar: 7800, stage: 14500,
  }[a] ?? 0), 0);

  const low = Math.round((guests * tierMultiplier + addonCost) * 0.92);
  const high = Math.round((guests * tierMultiplier + addonCost) * 1.18);

  const fmt = (n: number) => `KSh ${n.toLocaleString()}`;

  const addonList = [
    { id: "florals", label: "Full florals", icon: Flower2 },
    { id: "lighting", label: "Custom lighting", icon: Lightbulb },
    { id: "photo", label: "Photo + video", icon: Camera },
    { id: "live", label: "Live music", icon: Mic2 },
    { id: "bar", label: "Craft bar program", icon: Wine },
    { id: "stage", label: "Stage + production", icon: Music2 },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className="grid md:grid-cols-[1.1fr_1fr]">
        <div className="p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Live estimator</p>
          <h3 className="mt-2 font-display text-4xl">Sketch your investment.</h3>
          <p className="mt-2 text-sm text-muted-foreground">A real-time range based on guest count, service tier, and the experiences you'd add.</p>

          <label className="mt-8 block">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Guests</span>
              <span className="font-display text-2xl">{guests}</span>
            </div>
            <input
              type="range" min={20} max={400} step={5}
              value={guests} onChange={(e) => setGuests(+e.target.value)}
              className="mt-3 w-full accent-[color:var(--sunset)]"
            />
          </label>

          <div className="mt-8">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Service tier</span>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {(["essentials", "signature", "couture"] as const).map((t) => (
                <button key={t} onClick={() => setTier(t)}
                  className={`rounded-xl border px-3 py-2.5 text-sm capitalize transition-all ${
                    tier === t ? "border-accent bg-blue-700 text-primary-foreground" : "border-border bg-background hover:bg-muted"
                  }`}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Add experiences</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {addonList.map((a) => {
                const on = addons.includes(a.id);
                return (
                  <button key={a.id}
                    onClick={() => setAddons(on ? addons.filter((x) => x !== a.id) : [...addons, a.id])}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-all ${
                      on ? "border-accent bg-accent/10 text-accent-foreground" : "border-border bg-background hover:bg-muted"
                    }`}>
                    <a.icon className="h-3.5 w-3.5" /> {a.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-blue-700 p-8 text-primary-foreground md:p-12">
          <p className="text-xs uppercase tracking-[0.25em] opacity-80">Estimated production budget</p>
          <p className="mt-3 font-display text-5xl leading-none md:text-6xl">{fmt(low)}</p>
          <p className="mt-1 text-sm opacity-90">to {fmt(high)} all-in</p>
          <div className="mt-6 h-px w-16 bg-primary-foreground/40" />
          <p className="mt-6 text-sm opacity-90">
            Includes venue styling, design fees, vendor coordination, and day-of production. Final quote depends on city, season, and ambition.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background/90">
            Get a real quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ---------- Day-of Timeline ----------
const timeline = [
  { time: "3:00", title: "Last-light walkthrough", desc: "Final pass on lighting cues, place cards, and floral edits." },
  { time: "4:30", title: "Guests arrive", desc: "Welcome bar opens with a signature cocktail named for you." },
  { time: "5:15", title: "Ceremony / opening", desc: "We cue music, hold the room, and watch the door." },
  { time: "6:30", title: "Long dinner", desc: "Three courses paced with intentional silence between toasts." },
  { time: "9:00", title: "The peak", desc: "Lights drop, floor opens, a surprise act steps in." },
  { time: "11:30", title: "Quiet send-off", desc: "Late-night bites, sparklers, and one last private moment." },
];

// ---------- Signature touches ----------
const touches = [
  "A custom scent diffused at the entrance",
  "Hand-written menu cards in your handwriting",
  "A signature cocktail named after a private joke",
  "Florals re-purposed for the morning-after brunch",
  "A live string trio for the ceremony only",
  "A film photographer for the first 45 minutes",
  "A late-night ice cream cart at 11pm",
  "Vendor tip envelopes pre-stuffed and delivered for you",
];

// ---------- Inquiry Form ----------
type InquiryData = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  flexibleDate: boolean;
  guestCount: string;
  budget: string;
  eventType: string;
  style: string[];
  location: string;
  vision: string;
};

const initialInquiry: InquiryData = {
  name: "", email: "", phone: "", eventDate: "", flexibleDate: false,
  guestCount: "", budget: "", eventType: "", style: [], location: "", vision: "",
};

const eventTypes = ["Wedding", "Corporate", "Private celebration", "Launch / brand", "Destination", "Other"];
const budgets = ["Under KSH 25k", "25k – KSH 50k", "KSH 50k – KSH 100k", "KSH 100k – KSH 250k", "KSH 250k+"];
const guestRanges = ["Under 25", "25 – 75", "75 – 150", "150 – 300", "300+"];
const styles = [
  "Golden Hour Garden", "Velvet Loft Gala", "Desert Dusk Dinner",
  "Black-tie classic", "Editorial minimal", "Bohemian organic", "Modern industrial", "Not sure yet",
];

function InquiryForm() {
  const [data, setData] = useState<InquiryData>(initialInquiry);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const update = <K extends keyof InquiryData>(k: K, v: InquiryData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleStyle = (s: string) => {
    update("style", data.style.includes(s) ? data.style.filter((x) => x !== s) : [...data.style, s]);
  };

  const validate = () => {
    const e: Partial<Record<keyof InquiryData, string>> = {};
    if (!data.name.trim()) e.name = "Your name is required";
    else if (data.name.length > 100) e.name = "Keep it under 100 characters";
    if (!data.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email";
    if (data.phone && data.phone.length > 30) e.phone = "Phone seems too long";
    if (!data.eventDate && !data.flexibleDate) e.eventDate = "Pick a date or mark flexible";
    if (!data.guestCount) e.guestCount = "Choose a guest range";
    if (!data.budget) e.budget = "Choose a budget range";
    if (!data.eventType) e.eventType = "Pick an event type";
    if (data.vision.length > 2000) e.vision = "Keep it under 2000 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const API_URL = import.meta.env.VITE_API_URL || "";

  {formError && (
    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
      {formError}
    </p>
  )}

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  
    if (!validate()) return;
  
    setSubmitting(true);
    setFormError("");
  
    try {
      const response = await fetch(`${API_URL}/api/send-detailed-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send inquiry.");
      }
  
      setSubmitted(true);
      setData(initialInquiry);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft md:p-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 shadow-glow">
          <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="mt-6 font-display text-4xl">Thank you, {data.name.split(" ")[0]}.</h3>
        <p className="mt-3 text-foreground/70">
          Your inquiry is in. A planner will reply within one business day with next steps and a preliminary vision deck.
        </p>
        <button
          onClick={() => { setData(initialInquiry); setSubmitted(false); }}
          className="mt-8 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const labelCls = "flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground";
  const inputCls = "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  const errCls = "mt-1.5 text-xs text-destructive";
  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition-all ${
      active ? "border-accent bg-blue-700 text-primary-foreground shadow-glow" : "border-border bg-background hover:bg-muted"
    }`;

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
      {/* Contact */}
      <fieldset>
        <legend className="font-display text-2xl">Tell us who you are</legend>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <label className={labelCls}><User className="h-3.5 w-3.5" /> Full name</label>
            <input className={inputCls} value={data.name} maxLength={100}
              onChange={(e) => update("name", e.target.value)} placeholder="Your name" />
            {errors.name && <p className={errCls}>{errors.name}</p>}
          </div>
          <div>
            <label className={labelCls}><Mail className="h-3.5 w-3.5" /> Email</label>
            <input className={inputCls} type="email" value={data.email} maxLength={255}
              onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
            {errors.email && <p className={errCls}>{errors.email}</p>}
          </div>
          <div>
            <label className={labelCls}><Phone className="h-3.5 w-3.5" /> Phone <span className="lowercase tracking-normal opacity-60">(optional)</span></label>
            <input className={inputCls} type="tel" value={data.phone} maxLength={30}
              onChange={(e) => update("phone", e.target.value)} placeholder="+1 555 000 0000" />
            {errors.phone && <p className={errCls}>{errors.phone}</p>}
          </div>
          <div>
            <label className={labelCls}><MapPin className="h-3.5 w-3.5" /> City / venue <span className="lowercase tracking-normal opacity-60">(optional)</span></label>
            <input className={inputCls} value={data.location} maxLength={200}
              onChange={(e) => update("location", e.target.value)} placeholder="Where is this happening?" />
          </div>
        </div>
      </fieldset>

      {/* Event */}
      <fieldset className="mt-12">
        <legend className="font-display text-2xl">The event</legend>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <label className={labelCls}><Calendar className="h-3.5 w-3.5" /> Event date</label>
            <input className={inputCls} type="date" value={data.eventDate}
              disabled={data.flexibleDate}
              onChange={(e) => update("eventDate", e.target.value)} />
            <label className="mt-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <input type="checkbox" checked={data.flexibleDate}
                onChange={(e) => update("flexibleDate", e.target.checked)} />
              My date is flexible
            </label>
            {errors.eventDate && <p className={errCls}>{errors.eventDate}</p>}
          </div>
          <div>
            <label className={labelCls}><Sparkles className="h-3.5 w-3.5" /> Event type</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {eventTypes.map((t) => (
                <button type="button" key={t} onClick={() => update("eventType", t)} className={chip(data.eventType === t)}>{t}</button>
              ))}
            </div>
            {errors.eventType && <p className={errCls}>{errors.eventType}</p>}
          </div>
          <div>
            <label className={labelCls}><Users className="h-3.5 w-3.5" /> Guest count</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {guestRanges.map((g) => (
                <button type="button" key={g} onClick={() => update("guestCount", g)} className={chip(data.guestCount === g)}>{g}</button>
              ))}
            </div>
            {errors.guestCount && <p className={errCls}>{errors.guestCount}</p>}
          </div>
          <div>
            <label className={labelCls}><DollarSign className="h-3.5 w-3.5" /> Investment range</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button type="button" key={b} onClick={() => update("budget", b)} className={chip(data.budget === b)}>{b}</button>
              ))}
            </div>
            {errors.budget && <p className={errCls}>{errors.budget}</p>}
          </div>
        </div>
      </fieldset>

      {/* Style */}
      <fieldset className="mt-12">
        <legend className="font-display text-2xl">The style</legend>
        <p className="mt-1 text-sm text-muted-foreground">Pick any that resonate. You can choose more than one.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {styles.map((s) => (
            <button type="button" key={s} onClick={() => toggleStyle(s)} className={chip(data.style.includes(s))}>
              <Palette className="mr-1.5 inline h-3.5 w-3.5" />{s}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Vision */}
      <fieldset className="mt-12">
        <legend className="font-display text-2xl">Your vision <span className="text-sm font-normal text-muted-foreground">(optional)</span></legend>
        <label className={`${labelCls} mt-4`}><MessageSquare className="h-3.5 w-3.5" /> What should we know?</label>
        <textarea className={`${inputCls} min-h-[140px] resize-y`} value={data.vision} maxLength={2000}
          onChange={(e) => update("vision", e.target.value)}
          placeholder="A favorite memory, a non-negotiable, a song that has to play at midnight…" />
        <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
          {errors.vision ? <span className="text-destructive">{errors.vision}</span> : <span />}
          <span>{data.vision.length} / 2000</span>
        </div>
      </fieldset>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
        <p className="text-xs text-muted-foreground">We reply within one business day. Inquiries are confidential.</p>
        <button type="submit" disabled={submitting}
          className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-opacity disabled:opacity-60">
          {submitting ? "Sending…" : "Send inquiry"} <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function Experiences() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 md:pt-28">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Signature experiences</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
          Three worlds we know <span className="text-blue-700 italic">by heart</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-foreground/80">
          Every event we make is custom — but most begin as a variation on one of these three rooms. Tour them, then build your own.
        </p>
      </section>

      {/* Worlds gallery */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {worlds.map((w) => (
            <article key={w.name} className="group overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={w.img} alt={w.name} loading="lazy" width={1280} height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-foreground/80">{w.tag}</p>
                  <h3 className="mt-1 font-display text-3xl">{w.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-lg text-muted-foreground">{w.blurb}</p>
                <div className="mt-4 flex gap-1.5">
                  {w.palette.map((c) => (
                    <span key={c} className="h-6 w-6 rounded-full border border-border" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Vibe finder */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Interactive</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">Find your vibe in three questions.</h2>
        </div>
        <VibeFinder />
      </section>

      {/* Estimator */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Estimator />
      </section>

    


      
    </>
  );
}
