export function Events() {
  return (
    <section id="events" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
        Upcoming events
      </h2>
      <p className="mt-2 text-neutral-600">
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
      */}
      <div className="mt-6 rounded-lg border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-500">
        Luma calendar embed goes here
      </div>
    </section>
  )
}
