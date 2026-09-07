# AI Builders LCR — website

Static site for [aibuilderslcr.co.uk](https://aibuilderslcr.co.uk). Vite + React + TypeScript + Tailwind CSS, no backend.

## Stack notes

- **Vite + React (TypeScript), no Next.js.** Nothing here needs server-side rendering or API routes. If that changes (see "Custom event cards" below), that's the point to reconsider the stack, not before.
- **Events come from Luma's free embed widget**, not the Luma API. In Luma: calendar settings → Embed → copy the "upcoming events" snippet → paste it into `src/components/Events.tsx` in place of the placeholder div. No API key involved.
- **Tailwind CSS v4** via `@tailwindcss/vite` — no separate config file needed, it just scans the source files. Design tokens (the terminal palette, mono stack) live in the `@theme` block in `src/index.css`, which is also where the ANSI lockup and shared terminal chrome are styled.
- **Bun** as the package manager and dev runner (`bun install`, `bun dev`, `bun run build`).

## Custom event cards (not needed yet)

If you later want event cards styled to match the site rather than Luma's own widget look, that needs the Luma API instead of the embed, which means:

1. A **Luma Plus** subscription (the API isn't available on the free plan).
2. Somewhere to keep the API key server-side — a small serverless function (Vercel/Cloudflare) is the natural fit, since a static site can't hide a key in the browser.

Worth doing once the events programme itself has settled down (see the project's open questions), not before.

## Running locally

```
bun install
bun dev
```

## Building

```
bun run build
```

Outputs static files to `dist/`, deployable to Cloudflare Pages, Netlify, Vercel (static mode), or GitHub Pages — no server required.

## Structure

```
src/
  components/
    Header.tsx
    Hero.tsx       ← section wrapper + strapline copy
    AnsiHero.tsx   ← ANSI wordmark lockup (the h1)
    Events.tsx     ← Luma embed goes here
    Footer.tsx
  App.tsx
  main.tsx
  index.css      ← Tailwind import, @theme tokens, terminal chrome
```

The ANSI art is a fixed character grid: each block is padded to a uniform
column count and `src/index.css` derives its font size from that count via
container queries, so it scales to the container rather than wrapping. Editing
the art means updating the matching `.ansi-art-*` rule. Keep the art in plain
template literals — `String.raw` breaks it under Bun's transpiler, which emits
non-ASCII as escape sequences.

Copy throughout is placeholder — final wording depends on decisions still open in the project's `CLAUDE.md` (sections 2 and 10 in particular: audience framing, and whether "we" is appropriate yet).
