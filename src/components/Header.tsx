/*
  The site bar from the ANSI hero mock, merged with the existing nav so the
  page has one header rather than two.
*/
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm tracking-tight text-bright"
        >
          <span
            className="brand-triangle transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
          <span className="text-dim" aria-hidden="true">
            /
          </span>
          <span className="font-medium">AI Builders LCR</span>
        </a>

        <div className="flex items-center gap-5">
          <nav className="term-meta flex gap-5">
            <a href="#events" className="transition-colors hover:text-bright">
              Events
            </a>
            <a
              href="https://github.com/aibuilderslcr"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-bright"
            >
              GitHub
            </a>
          </nav>

          <span
            className="term-meta hidden items-center gap-2 text-accent sm:flex"
            aria-label="System online"
          >
            <span
              className="status-dot size-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            Online
          </span>
        </div>
      </div>
    </header>
  )
}
