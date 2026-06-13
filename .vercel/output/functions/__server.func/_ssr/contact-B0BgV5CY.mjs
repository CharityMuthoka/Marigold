import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { j as Mail, P as Phone, k as MapPin, b as Send } from "../_libs/lucide-react.mjs";
function Contact() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [formError, setFormError] = reactExports.useState("");
  const API_URL = "";
  const handleInquirySubmit = async (e) => {
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
      message: formData.get("message")
    };
    try {
      const response = await fetch(`${API_URL}/api/send-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inquiryData)
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 md:grid-cols-[1.1fr_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-5xl leading-[1.05] md:text-6xl", children: [
        "Tell us about ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700 italic", children: "your event." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-foreground/80", children: "Send a few details and we'll come back with our availability and a starter budget." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-5 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@marigoldember.co.ke", className: "hover:text-accent", children: "hello@marigoldember.co.ke" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " +254 700 000 000, Mon to Sat, 9 AM to 5 PM" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Nairobi, Kenya" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-2xl border border-border bg-muted/30 p-6 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: "A small note on budgets." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Our  planning and design experiences begin from KSh 50,000 for milestone celebrations, KSh 100,000 for weddings, and KSh 150,000 for corporate events and galas. Larger celebrations, brand activations, and destination-style events are quoted custom based on scale, styling, production, venue, guest count, and logistics." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleInquirySubmit, className: "rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Thank you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm text-muted-foreground", children: "We've received your inquiry and will reply within two business days." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Inquiry form" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Tell us about your event. All fields are required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "name", className: "input", placeholder: "Your full name" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "email", type: "email", className: "input", placeholder: "you@email.com" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone number", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "phone", type: "tel", className: "input", placeholder: "+254 700 000 000" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Event type", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, name: "event_type", className: "input", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Wedding" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Corporate / Gala" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Milestone Celebration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Brand Activation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Target date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "target_date", type: "month", className: "input" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Event location", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "event_location", className: "input", placeholder: "Nairobi, Kiambu, Mombasa..." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Estimated guests", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "guest_count", type: "number", min: "1", className: "input", placeholder: "100" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Estimated budget", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, name: "budget", className: "input", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "KSh 65,000 - KSh 150,000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "KSh 150,000 - KSh 300,000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "KSh 300,000 - KSh 600,000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "KSh 600,000+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Not sure yet" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tell us more", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, name: "message", rows: 5, className: "input resize-none", placeholder: "Guest count, location, preferred style, theme, vendors needed, and anything else we should know..." }) }),
        formError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600", children: formError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: isSubmitting, className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70", children: [
          isSubmitting ? "Sending..." : "Send inquiry",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) })
  ] }) });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: label }),
    children
  ] });
}
export {
  Contact as component
};
