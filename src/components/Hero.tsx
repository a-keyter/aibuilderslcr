import { AnsiHero } from './AnsiHero'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pt-12 pb-20 sm:pt-16">
      <AnsiHero />

      {/*
        TODO: copy here is a placeholder. Final wording, audience framing and
        whether "we" is appropriate yet all depend on open questions still
        being worked through — see the project's CLAUDE.md sections 2 and 10.

        The <h1> now sits on the ANSI wordmark (sr-only, in AnsiHero), so this
        is a <p> rather than a heading — one h1 per page.
      */}
      <p className="mt-14 text-xl leading-snug tracking-tight text-balance text-bright sm:mt-16 sm:text-2xl">
        A community for people building with AI in Liverpool.
      </p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-dim sm:text-base">
        Events, meetups and shared tools for builders, engineers and creatives
        already shipping things with AI in the Liverpool City Region.
      </p>
    </section>
  )
}
