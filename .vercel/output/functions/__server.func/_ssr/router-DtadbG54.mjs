import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu, a as MessageCircle, S as Smile, b as Send } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-BgmA_1TC.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/experiences", label: "Experiences" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-display text-2xl tracking-tight text-blue-700", children: "Marigold & Ember" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden gap-8 md:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
          activeProps: { className: "text-foreground" },
          activeOptions: { exact: true },
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "http://localhost:5000/api/book-call",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hidden rounded-full bg-blue-700 px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-105 md:inline-block",
          children: "Book a call"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen((v) => !v), className: "md:hidden", "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 bg-background md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col px-6 py-4", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        onClick: () => setOpen(false),
        className: "py-3 text-base text-foreground",
        children: n.label
      },
      n.to
    )) }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-10 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl  text-blue-700", children: "Marigold & Ember" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted celebrations, designed to be remembered." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Marigold & Ember Events"
    ] })
  ] }) }) });
}
const API_URL = "http://localhost:5000";
function ChatWidget() {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [showEmojiPicker, setShowEmojiPicker] = reactExports.useState(false);
  const emojis = ["😊", "😍", "🎉", "✨", "💐", "🥂", "❤️", "👍"];
  const sendToWhatsApp = (customMessage) => {
    const message = input.trim() || "Hello Marigold & Ember, I would like to ask about event planning.";
    const url = `${API_URL}/api/book-call?message=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setOpen((value) => !value),
        className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-primary-foreground shadow-glow transition-transform hover:scale-110",
        "aria-label": "Open chat",
        children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, {})
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-24 right-4 z-50 flex w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-glow", children: [
      "          ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between bg-white px-5 py-4 text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold leading-none", children: "Let's Chat!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Online" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen(false),
            className: "rounded-full p-1 transition-colors hover:bg-muted",
            "aria-label": "Close chat",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[17rem] overflow-y-auto bg-blue-700 px-5 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-foreground shadow-sm", children: "M&E" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[80%] rounded-xl bg-black/90 px-3 py-2 text-sm leading-relaxed text-white shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-xs font-semibold text-white/70", children: "Marigold & Ember" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hi there 👋 Welcome to Marigold & Ember. Tell us your event type, date, location, guest count, and budget." })
        ] })
      ] }) }),
      showEmojiPicker && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-white px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: emojis.map((emoji) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setInput((current) => current + emoji);
            setShowEmojiPicker(false);
          },
          className: "flex h-9 w-9 items-center justify-center rounded-full bg-muted text-lg transition-colors hover:bg-background",
          children: emoji
        },
        emoji
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-t border-border bg-white px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: input,
            onChange: (event) => setInput(event.target.value),
            onKeyDown: (event) => {
              if (event.key === "Enter") sendToWhatsApp();
            },
            placeholder: "Write your message...",
            className: "flex-1 bg-transparent text-sm outline-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowEmojiPicker((value) => !value),
            className: "text-muted-foreground transition-colors hover:text-foreground",
            "aria-label": "Emoji",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => sendToWhatsApp(),
            disabled: !input.trim(),
            className: "flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-primary-foreground disabled:opacity-40",
            "aria-label": "Send message",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl text-gradient-sunset", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This page is off the guest list." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex rounded-full bg-gradient-sunset px-5 py-2 text-sm font-medium text-primary-foreground", children: "Back home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try refreshing." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "rounded-full bg-gradient-sunset px-5 py-2 text-sm font-medium text-primary-foreground",
        children: "Try again"
      }
    ) })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Marigold & Ember — Boutique Event Planning" },
      { name: "description", content: "Boutique event planning & design for weddings, galas, and brand experiences." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Karla:wght@300;400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatWidget, {})
  ] }) });
}
const aboutImg = "/assets/exp-garden-C1HhFTCm.jpg";
const $$splitComponentImporter$3 = () => import("./experiences-BMreQubl.mjs");
const Route$3 = createFileRoute("/experiences")({
  head: () => ({
    meta: [{
      title: "Experiences — Marigold & Ember"
    }, {
      name: "description",
      content: "Signature event experiences, an interactive Vibe Finder, a live investment estimator, and the small details that make our nights unforgettable."
    }, {
      property: "og:title",
      content: "Signature Experiences — Marigold & Ember"
    }, {
      property: "og:description",
      content: "Tour our signature event worlds, build your own vibe, and preview a custom investment range — all in one place."
    }, {
      property: "og:image",
      content: aboutImg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-B0BgV5CY.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Marigold & Ember"
    }, {
      name: "description",
      content: "Tell us about your event. We respond within two business days, with a real human and a real plan."
    }, {
      property: "og:title",
      content: "Contact Marigold & Ember"
    }, {
      property: "og:description",
      content: "Reach out to start planning your wedding, gala, or brand event."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CGvv7Kfy.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Marigold & Ember"
    }, {
      name: "description",
      content: "Meet the studio behind Marigold & Ember — a four-person team designing a small calendar of meaningful events each year."
    }, {
      property: "og:title",
      content: "About Marigold & Ember"
    }, {
      property: "og:description",
      content: "A four-person event studio working from Los Angeles, designing weddings, galas, and brand experiences with intention."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BbI13eC_.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Marigold & Ember — Boutique Event Planning & Design"
    }, {
      name: "description",
      content: "From intimate weddings to brand activations, we design events that feel like a slow exhale and a standing ovation at once."
    }, {
      property: "og:title",
      content: "Marigold & Ember — Events that linger"
    }, {
      property: "og:description",
      content: "Boutique event planning, styling, and full production for weddings, galas, and brand experiences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ExperiencesRoute = Route$3.update({
  id: "/experiences",
  path: "/experiences",
  getParentRoute: () => Route$4
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$4
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ExperiencesRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  aboutImg as a,
  router as r
};
