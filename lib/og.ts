/**
 * Satori needs raw font bytes and cannot use next/font. Satori also cannot parse
 * WOFF2 ("Unsupported OpenType signature wOF2"), which is what Google's CSS API
 * serves to a modern browser-like UA. Sending no User-Agent (Node's default fetch
 * UA) gets a single, un-split `.ttf` `@font-face`, which is exactly what Satori
 * wants. Fetched at build time only — every consumer of this module is a
 * statically generated image route.
 */
export async function loadGeist(weight: 300 | 400 = 300): Promise<ArrayBuffer> {
  const api = `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}`
  const css = await fetch(api).then((r) => r.text())

  const match = css.match(/src:\s*url\((https:\/\/[^)]+)\)/)
  if (!match) throw new Error('Could not resolve a Geist font URL from the Google Fonts CSS API')

  const res = await fetch(match[1])
  if (!res.ok) throw new Error(`Failed to download Geist: ${res.status}`)
  return res.arrayBuffer()
}

/**
 * Light-mode token values from app/globals.css, resolved from oklch to hex for Satori
 * (Satori does not evaluate oklch()). Computed directly from the :root values —
 * --palette-sun-paper, --palette-lake-shadow, --palette-weathered-ink, and
 * --palette-fired-clay — via the standard OKLab -> linear sRGB matrix.
 */
export const OG_COLORS = {
  background: '#fff3ec',
  foreground: '#331f1d',
  muted: '#675050',
  primary: '#ab4c38',
} as const

export const OG_SIZE = { width: 1200, height: 630 }

/**
 * The file-convention `app/opengraph-image.tsx` only attaches itself to `openGraph`
 * automatically when a route inherits the root's metadata object wholesale. Any
 * route below the root that declares its own `openGraph` (required because
 * metadata merging is shallow — see app/pledge/page.tsx et al.) replaces that
 * association and ends up with no og:image at all. Those routes must list this
 * explicitly under `openGraph.images`.
 */
export const DEFAULT_OG_IMAGE = {
  url: '/opengraph-image',
  width: OG_SIZE.width,
  height: OG_SIZE.height,
  alt: 'The Tinker Pledge — learn AI by doing',
}
