import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marigold & Ember" },
      { name: "description", content: "Tell us about your event. We respond within two business days, with a real human and a real plan." },
      { property: "og:title", content: "Contact Marigold & Ember" },
      { property: "og:description", content: "Reach out to start planning your wedding, gala, or brand event." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Say hello</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.05] md:text-6xl">
            Tell us about <span className="text-gradient-sunset italic">the night</span> you're imagining.
          </h1>
          <p className="mt-6 max-w-md text-foreground/80">
            Send a few details and we'll come back with our availability, a starter budget, and the next two questions worth answering.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-sunset text-primary-foreground"><Mail className="h-4 w-4" /></span>
              <a href="mailto:hello@marigoldember.co" className="hover:text-accent">hello@marigoldember.co</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-sunset text-primary-foreground"><Phone className="h-4 w-4" /></span>
              <span>(323) 555-0148 — Tue–Fri, 10–5 PT</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-sunset text-primary-foreground"><MapPin className="h-4 w-4" /></span>
              <span>5612 N Figueroa St, Los Angeles, CA 90042</span>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 text-sm">
            <p className="font-display text-xl">A small note on budgets.</p>
            <p className="mt-2 text-muted-foreground">
              Full-service events typically start at $12,000 in planning fees, with overall production budgets between $50k–$500k. Smaller celebrations are welcome too — just tell us what you have to work with.
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"
        >
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-sunset text-primary-foreground"><Send className="h-5 w-5" /></div>
              <h2 className="font-display text-3xl">Thank you.</h2>
              <p className="mt-2 max-w-sm text-muted-foreground">We've received your note and will reply within two business days from hello@marigoldember.co.</p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-3xl">Inquiry form</h2>
              <p className="mt-1 text-sm text-muted-foreground">All fields are required.</p>
              <div className="mt-6 space-y-4">
                <Field label="Your name"><input required className="input" placeholder="Iris Okonkwo" /></Field>
                <Field label="Email"><input required type="email" className="input" placeholder="you@email.com" /></Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Event type">
                    <select required className="input">
                      <option value="">Choose…</option>
                      <option>Wedding</option>
                      <option>Corporate / Gala</option>
                      <option>Milestone</option>
                      <option>Brand activation</option>
                    </select>
                  </Field>
                  <Field label="Target date"><input required type="month" className="input" /></Field>
                </div>
                <Field label="Tell us more">
                  <textarea required rows={5} className="input resize-none" placeholder="Guest count, location, vibe, anything else we should know…" />
                </Field>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-sunset px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
                  Send inquiry <Send className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
