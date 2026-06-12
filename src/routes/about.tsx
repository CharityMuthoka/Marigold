import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/exp-garden.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marigold & Ember" },
      { name: "description", content: "Meet the studio behind Marigold & Ember — a four-person team designing a small calendar of meaningful events each year." },
      { property: "og:title", content: "About Marigold & Ember" },
      { property: "og:description", content: "A four-person event studio working from Los Angeles, designing weddings, galas, and brand experiences with intention." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2024", text: "Marigold & Ember begins with a simple vision, to create celebrations that feel beautiful, organized, and deeply personal." },
  { year: "2025", text: "The studio expands into weddings, milestone celebrations, corporate events, and intimate private gatherings." },
  { year: "2026", text: "Marigold & Ember grows into a boutique event planning brand serving clients who want elegance, detail, and stress-free execution." },
];

const values = [
  { title: "Thoughtful Planning", text: "Great events do not happen by accident. We take time to understand the client, the guests, the mood, the budget, and every important detail." },
  { title: "Designed With Meaning", text: "We do not believe in copy-paste events. Every celebration should have its own personality, color, flow, and feeling." },
  { title: "Vendors as Partners", text: "We work with reliable decorators, caterers, photographers, sound teams, florists, MCs, and service providers to make every event run smoothly." },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 md:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The studio</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] md:text-6xl">
          A boutique studio with a <span className="text-blue-700 italic">lasting memory</span> for what makes an event unforgettable.
        </h1>
        <div className="mt-6 max-w-2xl text-lg text-foreground/80 space-y-4">
          <p>Marigold &amp; Ember is a boutique event planning and design studio creating elegant weddings, private celebrations, corporate gatherings, and curated brand experiences across Kenya.<br/></p>

<p >We believe every event should feel personal, beautifully styled, and smoothly managed. From the first idea to the final guest departure, we help our clients plan with clarity, confidence, and calm.<br/></p>

<p>Our work blends thoughtful design, organized coordination, trusted vendors, and a warm understanding of how people want to feel when they gather.
        </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl">
          <img src={aboutImg} alt="The Marigold & Ember team in their studio" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">How we got here</p>
          <h2 className="mt-2 font-display text-4xl">A short timeline.</h2>
        </div>
        <ol className="space-y-8">
          {timeline.map((t) => (
            <li key={t.year} className="flex gap-6 border-l-2 border-accent pl-6">
              <span className="font-display text-3xl text-blue-700">{t.year}</span>
              <p className="flex-1 pt-2 text-foreground/80">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl">Three things we believe.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500">
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
