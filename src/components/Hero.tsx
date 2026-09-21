import { AnsiHero } from './AnsiHero'

export function Hero() {
  return (
    <section id="top" className="poster mx-auto">
      <AnsiHero />

      <p className="poster-copy">
        The community for cracked
        <br />
        AI builders in the
        <br />
        Liverpool City region.
      </p>

      <div className="poster-rule" aria-hidden="true" />

      <p className="poster-invite">
        Bring your ideas.
        <br />
        Build something brilliant.
      </p>

      <div className="poster-footer" aria-hidden="true">
        <span>Coworking</span>
        <span>/</span>
        <span>Demos</span>
        <span>/</span>
        <span>Hackathons</span>
      </div>
    </section>
  )
}
