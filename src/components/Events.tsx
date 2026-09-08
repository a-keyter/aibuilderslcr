export function Events() {
  return (
    <section id="events" className="mx-auto max-w-3xl px-6 pb-20">
      <div className="term-meta term-label" aria-hidden="true">
        <span>02</span>
        <span>Events_feed</span>
      </div>

      <h2 className="mt-8 text-lg tracking-tight text-bright sm:text-xl">
        Upcoming events
      </h2>
      <p className="mt-2 text-sm text-dim">
        Registration is handled through Luma.
      </p>

      {/*
        Luma's own widget, themed dark via ?lt=dark on the src — the page
        ground is near-black, and the default light widget fights it.
        Fully custom event cards would need the Luma API (Plus subscription,
        plus something server-side to keep the key off the client).

        Width is fluid rather than Luma's fixed 600px: the column runs to
        768px, so a fixed width leaves a gap on desktop and overflows a phone.
      */}
      <iframe
        src="https://luma.com/embed/calendar/cal-kIxpqTyBAdcMmh1/events?lt=dark"
        title="AI Builders LCR events calendar"
        width="600"
        height="450"
        className="mt-8 w-full border border-line-strong bg-panel"
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </section>
  )
}
