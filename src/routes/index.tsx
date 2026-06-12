import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/event-plan.jpg";
import brandImg from "@/assets/celebrations.png";
import Conferences from "@/assets/conferences.png";
import Milestonecelebrations from "@/assets/milestone celebrations.png";
import brands from "@/assets/brands.png";
import {  ArrowRight, Star } from "lucide-react";

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
  { icon: brandImg, title: "Weddings", desc: "Ceremonies, receptions, and welcome dinners styled down to the last petal.", price: "from KSH 100,000" },
  { icon: Conferences, title: "Corporate & Galas", desc: "Conferences, awards nights, and donor experiences that feel anything but corporate.", price: "from KSH 150,000" },
  { icon: Milestonecelebrations, title: "Milestone Celebrations", desc: "Birthdays, anniversaries, and engagements with a signature point of view.", price: "from KSH 50,000" },
  { icon: brands, title: "Brand Activations", desc: "Pop-ups, launches, and dinners that turn guests into storytellers.", price: "custom" },
];

const testimonials = [
  {
    quote:
      "Marigold & Ember understood exactly what we wanted. The setup was elegant, warm, and perfectly coordinated. Our guests still talk about it.",
    name: "Amina W.",
    event: "Wedding, Nairobi",
  },
  {
    quote:
      "They handled everything with so much calmness and professionalism. I did not have to worry about vendors, timing, or the setup.",
    name: "Grace M.",
    event: "Birthday Dinner, Karen",
  },
  {
    quote:
      "Our corporate gala looked polished and premium. The team brought our brand to life in a way that felt modern and memorable.",
    name: "Brian K.",
    event: "Corporate Gala, Westlands",
  },
  {
    quote:
      "The decor, coordination, and attention to detail were beautiful. It felt personal, not copied from another event.",
    name: "Leah N.",
    event: "Baby Shower, Kiambu",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1600} height={1100} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-28 md:pt-40">
         
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
          Marigold Event Planning Services in Kenya
          </h1>
          <p className="mt-6 max-w-xl text-xl text-foreground/80">
          Elegant weddings, private celebrations, corporate events, and brand activations, beautifully planned and smoothly managed from concept to execution.</p>
                    <div className="mt-8 flex flex-wrap gap-3">

            <a
  href="http://localhost:5000/api/book-call"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105">
              Book A Call <ArrowRight className="h-4 w-4" />
</a>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 hover:bg-blue-700 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-background">
              About us
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex justify-center  gap-6">
          <div>
            <p className="text-md uppercase tracking-[0.25em] text-muted-foreground items-center">What we do</p>
          </div>
          
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-glow">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-primary-foreground">
                <img 
                src={s.icon} alt={s.title}className="h-5 w-5" />
              </div>
              <h3 className="font-display text-3xl">{s.title}</h3>
              <p className="mt-2 text-md text-muted-foreground">{s.desc}</p>
              <p className="mt-4 text-sm uppercase tracking-widest text-blue-400">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="overflow-hidden bg-muted/40 py-14">
  <div className="mx-auto max-w-6xl px-6">
    <div className="mx-auto mb-14 max-w-3xl text-center">
     

      <h2 className="font-display text-4xl leading-tight md:text-5xl">
        Testimonials
      </h2>

      <p className="mt-5 text-muted-foreground">
        From intimate celebrations to polished brand experiences, our clients trust us to create events that feel beautiful, smooth, and deeply personal.
      </p>
    </div>

    <div className="relative">
      <div className="testimonial-track flex gap-6">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="w-[280px] shrink-0 md:w-[340px] rounded-[1.5rem] border border-border bg-background p-8 shadow-sm md:min-w-[420px]"
          >
            <div className="mb-6 flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>

            <blockquote className="font-display text-2xl italic leading-snug">
              "{item.quote}"
            </blockquote>

            <div className="mt-8">
              <p className="font-medium">{item.name}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                {item.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-blue-700 p-10 md:p-16">
          <h2 className="max-w-2xl font-display text-4xl text-primary-foreground md:text-5xl">
            Have a date in mind? Let's see if we're a fit.
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/90">
            We respond to every inquiry within two business days.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-background/90">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
