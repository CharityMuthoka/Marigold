import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-event.jpg";
import { Heart, Sparkles, Building2, PartyPopper, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marigold & Ember — Boutique Event Planning & Design" },
      { name: "description", content: "From intimate weddings to brand activations, we design events that feel like a slow exhale and a standing ovation at once." },
      { property: "og:title", content: "Marigold & Ember — Events that linger" },
      { property: "og:description", content: "Boutique event planning, styling, and full production for weddings, galas, and brand experiences." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Heart, title: "Weddings", desc: "Ceremonies, receptions, and welcome dinners styled down to the last petal.", price: "from $12,000" },
  { icon: Building2, title: "Corporate & Galas", desc: "Conferences, awards nights, and donor experiences that feel anything but corporate.", price: "from $18,000" },
  { icon: PartyPopper, title: "Milestone Celebrations", desc: "Birthdays, anniversaries, and engagements with a signature point of view.", price: "from $6,500" },
  { icon: Sparkles, title: "Brand Activations", desc: "Pop-ups, launches, and dinners that turn guests into storytellers.", price: "custom" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1600} height={1100} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-28 md:pt-40">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3" /> Boutique event design
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Events that <span className="text-gradient-sunset italic">linger</span> long after the lights come up.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            We plan, design, and produce a small handful of unrepeatable celebrations each year — every one of them built around the people in the room.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105">
              Start planning <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-background">
              Meet the studio
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">What we do</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">A short list, done beautifully.</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            We cap our calendar at 14 events per year so every client gets the full weight of our team.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-glow">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-sunset text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-accent">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 flex justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <blockquote className="font-display text-3xl italic leading-snug md:text-4xl">
            "They didn't just plan our wedding — they translated us into a room. Three years later, friends still bring it up."
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">Priya &amp; Daniel — Ojai, 2023</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-sunset p-10 md:p-16">
          <h2 className="max-w-2xl font-display text-4xl text-primary-foreground md:text-5xl">
            Have a date in mind? Let's see if we're a fit.
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/90">
            We respond to every inquiry within two business days, with a real human and a real plan.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-background/90">
            Send us a note <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
