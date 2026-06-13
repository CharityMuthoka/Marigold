import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as aboutImg } from "./router-DtadbG54.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
const timeline = [{
  year: "2024",
  text: "Marigold & Ember begins with a simple vision, to create celebrations that feel beautiful, organized, and deeply personal."
}, {
  year: "2025",
  text: "The studio expands into weddings, milestone celebrations, corporate events, and intimate private gatherings."
}, {
  year: "2026",
  text: "Marigold & Ember grows into a boutique event planning brand serving clients who want elegance, detail, and stress-free execution."
}];
const values = [{
  title: "Thoughtful Planning",
  text: "Great events do not happen by accident. We take time to understand the client, the guests, the mood, the budget, and every important detail."
}, {
  title: "Designed With Meaning",
  text: "We do not believe in copy-paste events. Every celebration should have its own personality, color, flow, and feeling."
}, {
  title: "Vendors as Partners",
  text: "We work with reliable decorators, caterers, photographers, sound teams, florists, MCs, and service providers to make every event run smoothly."
}];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pb-12 pt-20 md:pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "The studio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 max-w-3xl font-display text-5xl leading-[1.05] md:text-6xl", children: [
        "A boutique studio with a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700 italic", children: "lasting memory" }),
        " for what makes an event unforgettable."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 max-w-2xl text-lg text-foreground/80 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Marigold & Ember is a boutique event planning and design studio creating elegant weddings, private celebrations, corporate gatherings, and curated brand experiences across Kenya.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "We believe every event should feel personal, beautifully styled, and smoothly managed. From the first idea to the final guest departure, we help our clients plan with clarity, confidence, and calm.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our work blends thoughtful design, organized coordination, trusted vendors, and a warm understanding of how people want to feel when they gather." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImg, alt: "The Marigold & Ember team in their studio", width: 1400, height: 1e3, loading: "lazy", className: "h-full w-full object-cover" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "How we got here" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl", children: "A short timeline." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-8", children: timeline.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-6 border-l-2 border-accent pl-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl text-blue-700", children: t.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 pt-2 text-foreground/80", children: t.text })
      ] }, t.year)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl", children: "Three things we believe." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: v.text })
      ] }, v.title)) })
    ] }) })
  ] });
}
export {
  About as component
};
