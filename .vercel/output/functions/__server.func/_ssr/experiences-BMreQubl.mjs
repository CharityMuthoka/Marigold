import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as aboutImg } from "./router-DtadbG54.mjs";
import { c as Sun, F as Flame, d as Moon, e as Flower2, L as Lightbulb, W as Wind, U as Utensils, f as Music2, g as Sparkles, A as ArrowRight, C as Camera, h as MicVocal, i as Wine } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const loft = "/assets/exp-loft-CybLAgux.jpg";
const desert = "/assets/exp-desert-DxzrQER5.jpg";
const worlds = [{
  name: "Golden Hour Garden",
  tag: "Outdoor · 60–140 guests",
  img: aboutImg,
  blurb: "Long farm tables, tapered candles, terracotta linens and roses still warm from the sun.",
  palette: ["#f7931e", "#ff6b35", "#e84393"]
}, {
  name: "Velvet Loft Gala",
  tag: "Indoor · 80–300 guests",
  img: loft,
  blurb: "Industrial bones, magenta uplighting, amber pendants and a long banquet that ends in a dance floor.",
  palette: ["#6c5ce7", "#e84393", "#f7931e"]
}, {
  name: "Desert Dusk Dinner",
  tag: "Destination · 24–80 guests",
  img: desert,
  blurb: "Low tables on layered rugs, lanterns staked in the sand, a fire pit at the center of every story.",
  palette: ["#ff6b35", "#c2956b", "#6c5ce7"]
}];
const quiz = [{
  q: "When the night peaks, the room should feel…",
  options: [{
    label: "Warm and lingering",
    icon: Sun,
    vibe: "garden"
  }, {
    label: "Loud and electric",
    icon: Flame,
    vibe: "loft"
  }, {
    label: "Quiet and wide open",
    icon: Moon,
    vibe: "desert"
  }]
}, {
  q: "The first thing a guest should notice…",
  options: [{
    label: "The flowers",
    icon: Flower2,
    vibe: "garden"
  }, {
    label: "The lighting",
    icon: Lightbulb,
    vibe: "loft"
  }, {
    label: "The horizon",
    icon: Wind,
    vibe: "desert"
  }]
}, {
  q: "After the toast, we want…",
  options: [{
    label: "A long, slow dinner",
    icon: Utensils,
    vibe: "garden"
  }, {
    label: "A DJ and a packed floor",
    icon: Music2,
    vibe: "loft"
  }, {
    label: "A bonfire and a guitar",
    icon: Flame,
    vibe: "desert"
  }]
}];
function VibeFinder() {
  const [answers, setAnswers] = reactExports.useState([null, null, null]);
  const step = answers.findIndex((a) => a === null);
  const done = step === -1;
  const result = reactExports.useMemo(() => {
    const tally = {
      garden: 0,
      loft: 0,
      desert: 0
    };
    answers.forEach((a) => a && (tally[a] += 1));
    return Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0];
  }, [answers]);
  const world = worlds.find((w) => result === "garden" ? w.name.startsWith("Golden") : result === "loft" ? w.name.startsWith("Velvet") : w.name.startsWith("Desert"));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
      " Vibe Finder · ",
      done ? "Complete" : `${step + 1} of ${quiz.length}`
    ] }),
    !done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl", children: quiz[step].q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-3", children: quiz[step].options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        const next = [...answers];
        next[step] = opt.vibe;
        setAnswers(next);
      }, className: "group flex flex-col items-start gap-4 rounded-2xl border border-border bg-background p-6 text-left transition-all hover:-translate-y-1 hover:border-accent hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(opt.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl", children: opt.label })
      ] }, opt.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-1.5", children: quiz.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1 flex-1 rounded-full ${i <= step ? "bg-blue-700" : "bg-border"}` }, i)) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-8 md:grid-cols-[1.1fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: world.img, alt: world.name, loading: "lazy", width: 1280, height: 960, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-accent", children: "Your vibe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-4xl md:text-5xl", children: world.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/80", children: world.blurb }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-2", children: world.palette.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-full border border-border", style: {
          backgroundColor: c
        } }, c)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow", children: [
            "Book this vibe ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAnswers([null, null, null]), className: "rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted", children: "Start over" })
        ] })
      ] })
    ] })
  ] });
}
function Estimator() {
  const [guests, setGuests] = reactExports.useState(120);
  const [tier, setTier] = reactExports.useState("signature");
  const [addons, setAddons] = reactExports.useState(["florals"]);
  const tierMultiplier = {
    essentials: 380,
    signature: 720,
    couture: 1280
  }[tier];
  const addonCost = addons.reduce((sum, a) => sum + ({
    florals: 8500,
    lighting: 6200,
    photo: 9400,
    live: 11200,
    bar: 7800,
    stage: 14500
  }[a] ?? 0), 0);
  const low = Math.round((guests * tierMultiplier + addonCost) * 0.92);
  const high = Math.round((guests * tierMultiplier + addonCost) * 1.18);
  const fmt = (n) => `KSh ${n.toLocaleString()}`;
  const addonList = [{
    id: "florals",
    label: "Full florals",
    icon: Flower2
  }, {
    id: "lighting",
    label: "Custom lighting",
    icon: Lightbulb
  }, {
    id: "photo",
    label: "Photo + video",
    icon: Camera
  }, {
    id: "live",
    label: "Live music",
    icon: MicVocal
  }, {
    id: "bar",
    label: "Craft bar program",
    icon: Wine
  }, {
    id: "stage",
    label: "Stage + production",
    icon: Music2
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-card shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1.1fr_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Live estimator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-4xl", children: "Sketch your investment." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "A real-time range based on guest count, service tier, and the experiences you'd add." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-8 block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Guests" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl", children: guests })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 20, max: 400, step: 5, value: guests, onChange: (e) => setGuests(+e.target.value), className: "mt-3 w-full accent-[color:var(--sunset)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Service tier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-3 gap-2", children: ["essentials", "signature", "couture"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTier(t), className: `rounded-xl border px-3 py-2.5 text-sm capitalize transition-all ${tier === t ? "border-accent bg-blue-700 text-primary-foreground" : "border-border bg-background hover:bg-muted"}`, children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Add experiences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: addonList.map((a) => {
          const on = addons.includes(a.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setAddons(on ? addons.filter((x) => x !== a.id) : [...addons, a.id]), className: `inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-all ${on ? "border-accent bg-accent/10 text-accent-foreground" : "border-border bg-background hover:bg-muted"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "h-3.5 w-3.5" }),
            " ",
            a.label
          ] }, a.id);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center bg-blue-700 p-8 text-primary-foreground md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] opacity-80", children: "Estimated production budget" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-5xl leading-none md:text-6xl", children: fmt(low) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm opacity-90", children: [
        "to ",
        fmt(high),
        " all-in"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-px w-16 bg-primary-foreground/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm opacity-90", children: "Includes venue styling, design fees, vendor coordination, and day-of production. Final quote depends on city, season, and ambition." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 self-start rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background/90", children: [
        "Get a real quote ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] }) });
}
function Experiences() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pb-12 pt-20 md:pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-muted-foreground", children: "Signature experiences" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl", children: [
        "Three worlds we know ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700 italic", children: "by heart" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-xl text-foreground/80", children: "Every event we make is custom — but most begin as a variation on one of these three rooms. Tour them, then build your own." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: worlds.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group overflow-hidden rounded-3xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: w.img, alt: w.name, loading: "lazy", width: 1280, height: 960, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-foreground/80", children: w.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-3xl", children: w.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: w.blurb }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-1.5", children: w.palette.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-6 w-6 rounded-full border border-border", style: {
          backgroundColor: c
        } }, c)) })
      ] })
    ] }, w.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-muted-foreground", children: "Interactive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl", children: "Find your vibe in three questions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VibeFinder, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Estimator, {}) })
  ] });
}
export {
  Experiences as component
};
