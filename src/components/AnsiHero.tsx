/*
  ANSI Shadow block lettering. Every row in a block is padded to the same
  column count (75 for the wordmark, 24 for LCR) — the CSS derives the font
  size from those counts so the art scales to the container instead of
  wrapping, so don't reflow these strings without updating .ansi-art-* too.

  Plain template literals, not String.raw: Bun's transpiler emits non-ASCII
  as \uXXXX escapes, which String.raw would render as visible escape text
  rather than glyphs. There are no backslashes in the art, so raw buys nothing.
  The leading newline keeps the art left-aligned in source; .slice(1) drops it.
*/
const WORDMARK = `
 █████╗ ██╗    ██████╗ ██╗   ██╗██╗██╗     ██████╗ ███████╗██████╗ ███████╗
██╔══██╗██║    ██╔══██╗██║   ██║██║██║     ██╔══██╗██╔════╝██╔══██╗██╔════╝
███████║██║    ██████╔╝██║   ██║██║██║     ██║  ██║█████╗  ██████╔╝███████╗
██╔══██║██║    ██╔══██╗██║   ██║██║██║     ██║  ██║██╔══╝  ██╔══██╗╚════██║
██║  ██║██║    ██████╔╝╚██████╔╝██║███████╗██████╔╝███████╗██║  ██║███████║
╚═╝  ╚═╝╚═╝    ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝`.slice(1)

const LCR = `
██╗      ██████╗██████╗ 
██║     ██╔════╝██╔══██╗
██║     ██║     ██████╔╝
██║     ██║     ██╔══██╗
███████╗╚██████╗██║  ██║
╚══════╝ ╚═════╝╚═╝  ╚═╝`.slice(1)

/*
  The identity block: section label, the ANSI lockup, and the strapline rule.
  Rendered inside <Hero>, which supplies the section element and the copy.
*/
export function AnsiHero() {
  return (
    <div>
      <h1 className="sr-only">AI Builders LCR</h1>

      <div className="ansi-icon-wrap" aria-hidden="true">
        <img
          src="/liver_bird_sq_icon_transparent.png"
          alt=""
          className="ansi-icon"
        />
      </div>

      <div className="ansi-lockup mt-8 sm:mt-10" aria-hidden="true">
        <pre className="ansi-art ansi-art-wide" data-text={WORDMARK}>
          {WORDMARK}
        </pre>
        <pre className="ansi-art ansi-art-lcr" data-text={LCR}>
          {LCR}
        </pre>
      </div>

      <div className="ansi-divider" aria-hidden="true" />

      <div
        className="term-meta term-split mt-8 border-t border-line pt-3 sm:mt-10"
        aria-hidden="true"
      >
        <span>Coworking / Demos / Hackathons</span>
        <span>Est. 2026</span>
      </div>
    </div>
  )
}
