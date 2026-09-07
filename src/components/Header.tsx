export function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <span className="font-medium tracking-tight text-neutral-900">
          AI Builders LCR
        </span>
        <nav className="flex gap-6 text-sm text-neutral-600">
          <a href="#events" className="hover:text-neutral-900">
            Events
          </a>
          <a
            href="https://github.com/aibuilderslcr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
