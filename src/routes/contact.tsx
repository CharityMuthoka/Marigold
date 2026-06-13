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

const [isSubmitting, setIsSubmitting] = useState(false);
const [formError, setFormError] = useState("");

const API_URL = import.meta.env.VITE_API_URL || "";

const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setIsSubmitting(true);
  setFormError("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const inquiryData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    event_type: formData.get("event_type"),
    target_date: formData.get("target_date"),
    event_location: formData.get("event_location"),
    guest_count: formData.get("guest_count"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  };

  

  try {
    const response = await fetch(`${API_URL}/api/send-inquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiryData),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      form.reset();
    } else {
      setFormError(data.message || "Something went wrong. Please try again.");
    }
  } catch (error) {
    setFormError("Unable to send your inquiry. Please check your connection and try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="mt-3 font-display text-5xl leading-[1.05] md:text-6xl">
            Tell us about <span className="text-blue-700 italic">your event.</span> 
          </h1>
          <p className="mt-6 max-w-md text-foreground/80">
            Send a few details and we'll come back with our availability and a starter budget.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-primary-foreground"><Mail className="h-4 w-4" /></span>
              <a href="mailto:hello@marigoldember.co.ke" className="hover:text-accent">hello@marigoldember.co.ke</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-primary-foreground"><Phone className="h-4 w-4" /></span>
              <span> +254 700 000 000, Mon to Sat, 9 AM to 5 PM</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-primary-foreground"><MapPin className="h-4 w-4" /></span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 text-sm">
            <p className="font-display text-xl">A small note on budgets.</p>
            <p className="mt-2 text-muted-foreground">
    Our  planning and design experiences begin from KSh 50,000 for milestone
    celebrations, KSh 100,000 for weddings, and KSh 150,000 for corporate events
    and galas. Larger celebrations, brand activations, and destination-style events
    are quoted custom based on scale, styling, production, venue, guest count, and logistics.
  </p>
          </div>
        </div>

        <form
  onSubmit={handleInquirySubmit}
  className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"
>
  {submitted ? (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-primary-foreground">
        <Send className="h-5 w-5" />
      </div>

      <h2 className="font-display text-3xl">Thank you.</h2>

      <p className="mt-2 max-w-sm text-muted-foreground">
        We've received your inquiry and will reply within two business days.
      </p>
    </div>
  ) : (
    <>
      <h2 className="font-display text-3xl">Inquiry form</h2>

      <p className="mt-1 text-sm text-muted-foreground">
        Tell us about your event. All fields are required.
      </p>

      <div className="mt-6 space-y-4">
        <Field label="Your name">
          <input
            required
            name="name"
            className="input"
            placeholder="Your full name"
          />
        </Field>

        <Field label="Email">
          <input
            required
            name="email"
            type="email"
            className="input"
            placeholder="you@email.com"
          />
        </Field>

        <Field label="Phone number">
          <input
            required
            name="phone"
            type="tel"
            className="input"
            placeholder="+254 700 000 000"
          />
        </Field>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Event type">
            <select required name="event_type" className="input">
              <option value="">Choose...</option>
              <option>Wedding</option>
              <option>Corporate / Gala</option>
              <option>Milestone Celebration</option>
              <option>Brand Activation</option>
              <option>Other</option>
            </select>
          </Field>

          <Field label="Target date">
            <input
              required
              name="target_date"
              type="month"
              className="input"
            />
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Event location">
            <input
              required
              name="event_location"
              className="input"
              placeholder="Nairobi, Kiambu, Mombasa..."
            />
          </Field>

          <Field label="Estimated guests">
            <input
              required
              name="guest_count"
              type="number"
              min="1"
              className="input"
              placeholder="100"
            />
          </Field>
        </div>

        <Field label="Estimated budget">
          <select required name="budget" className="input">
            <option value="">Choose...</option>
            <option>KSh 65,000 - KSh 150,000</option>
            <option>KSh 150,000 - KSh 300,000</option>
            <option>KSh 300,000 - KSh 600,000</option>
            <option>KSh 600,000+</option>
            <option>Not sure yet</option>
          </select>
        </Field>

        <Field label="Tell us more">
          <textarea
            required
            name="message"
            rows={5}
            className="input resize-none"
            placeholder="Guest count, location, preferred style, theme, vendors needed, and anything else we should know..."
          />
        </Field>

        {formError && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {formError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send inquiry"}
          <Send className="h-4 w-4" />
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
