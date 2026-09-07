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
        TODO: paste your calendar's embed snippet here.

        In Luma: Calendar settings → Embed → copy the iframe it gives you
        for "upcoming events" and drop it in below, replacing this div.
        No API key needed for this — that's only required if you later
        want fully custom-styled event cards instead of Luma's own widget
        (and that needs a Luma Plus subscription plus something server-side
        to keep the API key off the client).

        Luma's widget brings its own styling, which will most likely land
        light on this dark page — check the embed dialog for a theme option
        before reaching for CSS overrides on someone else's iframe.
      */}
      <div className="mt-8 border border-dashed border-line-strong bg-panel px-6 py-12 text-center">
        <span className="term-meta">Luma calendar embed goes here</span>
      </div>
    </section>
  )
}
