export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-xl  text-blue-700">
            Marigold &amp; Ember
          </p>
          <p>Crafted celebrations, designed to be remembered.</p>
          <p>© {new Date().getFullYear()} Marigold &amp; Ember Events</p>
        </div>
      </div>
    </footer>
  );
}
