import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-team.jpg";

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
  { year: "2016", text: "Iris Okonkwo plans a friend's backyard wedding and accidentally finds a career." },
  { year: "2018", text: "Marigold & Ember opens a studio in Highland Park with a team of two." },
  { year: "2021", text: "First gala for the LA County Conservancy raises $1.2M in a single night." },
  { year: "2024", text: "Named one of Vogue's 'Twelve Wedding Planners Worth the Flight'." },
];

const values = [
  { title: "Slow planning", text: "We take on fewer events on purpose. Quiet calendars make for loud nights." },
  { title: "Crafted, not curated", text: "Every centerpiece, menu, and playlist is made for the room it will sit in." },
  { title: "Vendors as collaborators", text: "We pay our florists, caterers, and stage crews fairly, on time, every time." },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 md:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The studio</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] md:text-6xl">
          A small studio with a <span className="text-gradient-sunset italic">long memory</span> for what makes a night land.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          Marigold &amp; Ember is a four-person event studio working out of a converted bakery in Highland Park, Los Angeles. We make a deliberately small number of events each year — and we make them entirely.
        </p>
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
              <span className="font-display text-3xl text-gradient-sunset">{t.year}</span>
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
              <div key={v.title} className="rounded-2xl border border-border bg-card p-8">
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
