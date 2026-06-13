import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as ArrowRight, l as Star } from "../_libs/lucide-react.mjs";
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
const heroImg = "/assets/event-plan-dw0xt89u.jpg";
const brandImg = "/assets/celebrations-DbUwyOJx.png";
const Conferences = "/assets/conferences-mrtGmcxo.png";
const Milestonecelebrations = "/assets/milestone%20celebrations-b40ilmMA.png";
const brands = "/assets/brands-CXrPO9Im.png";
const services = [{
  icon: brandImg,
  title: "Weddings",
  desc: "Ceremonies, receptions, and welcome dinners styled down to the last petal.",
  price: "from KSH 100,000"
}, {
  icon: Conferences,
  title: "Corporate & Galas",
  desc: "Conferences, awards nights, and donor experiences that feel anything but corporate.",
  price: "from KSH 150,000"
}, {
  icon: Milestonecelebrations,
  title: "Milestone Celebrations",
  desc: "Birthdays, anniversaries, and engagements with a signature point of view.",
  price: "from KSH 50,000"
}, {
  icon: brands,
  title: "Brand Activations",
  desc: "Pop-ups, launches, and dinners that turn guests into storytellers.",
  price: "custom"
}];
const testimonials = [{
  quote: "Marigold & Ember understood exactly what we wanted. The setup was elegant, warm, and perfectly coordinated. Our guests still talk about it.",
  name: "Amina W.",
  event: "Wedding, Nairobi"
}, {
  quote: "They handled everything with so much calmness and professionalism. I did not have to worry about vendors, timing, or the setup.",
  name: "Grace M.",
  event: "Birthday Dinner, Karen"
}, {
  quote: "Our corporate gala looked polished and premium. The team brought our brand to life in a way that felt modern and memorable.",
  name: "Brian K.",
  event: "Corporate Gala, Westlands"
}, {
  quote: "The decor, coordination, and attention to detail were beautiful. It felt personal, not copied from another event.",
  name: "Leah N.",
  event: "Baby Shower, Kiambu"
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "", className: "h-full w-full object-cover", width: 1600, height: 1100 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 pb-32 pt-28 md:pt-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl", children: "Marigold Event Planning Services in Kenya" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-xl text-foreground/80", children: "Elegant weddings, private celebrations, corporate events, and brand activations, beautifully planned and smoothly managed from concept to execution." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "http://localhost:5000/api/book-call", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
            "Book A Call ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/80 hover:bg-blue-700 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-background", children: "About us" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 flex justify-center  gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md uppercase tracking-[0.25em] text-muted-foreground items-center", children: "What we do" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.icon, alt: s.title, className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-md text-muted-foreground", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm uppercase tracking-widest text-blue-400", children: s.price })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden bg-muted/40 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl leading-tight md:text-5xl", children: "Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "From intimate celebrations to polished brand experiences, our clients trust us to create events that feel beautiful, smooth, and deeply personal." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testimonial-track flex gap-6", children: [...testimonials, ...testimonials].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[280px] shrink-0 md:w-[340px] rounded-[1.5rem] border border-border bg-background p-8 shadow-sm md:min-w-[420px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex gap-1 text-accent", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-2xl italic leading-snug", children: [
          '"',
          item.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm uppercase tracking-[0.25em] text-muted-foreground", children: item.event })
        ] })
      ] }, index)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-blue-700 p-10 md:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "max-w-2xl font-display text-4xl text-primary-foreground md:text-5xl", children: "Have a date in mind? Let's see if we're a fit." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-primary-foreground/90", children: "We respond to every inquiry within two business days." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-background/90", children: [
        "Get a Quote ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
