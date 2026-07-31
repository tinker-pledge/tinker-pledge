import type { CSSProperties } from "react"
import type { Metadata } from "next"
import { Contrast, Layers, Moon, Palette, Sprout, Type } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Palette Test | The Tinker Pledge",
  description: "A working page for testing the Tinker Pledge color palette, semantic tokens, and UI pairings.",
  alternates: { canonical: "/palette" },
  robots: { index: false, follow: false },
}

type Token = {
  name: string
  token: string
  role: string
  meaning: string
}

type TokenPair = {
  name: string
  foreground: string
  background: string
  ratio: string
  use: string
}

const sourceTokens: Token[] = [
  {
    name: "Sun paper",
    token: "--palette-sun-paper",
    role: "Page ground",
    meaning: "The peach light in the reference images. Warm, quiet, and personal.",
  },
  {
    name: "Warm paper",
    token: "--palette-warm-paper",
    role: "Cards",
    meaning: "A softer page sheet for content that should feel held, not boxed in.",
  },
  {
    name: "Lake shadow",
    token: "--palette-lake-shadow",
    role: "Text",
    meaning: "Dark shoreline ink for calm contrast without harsh black.",
  },
  {
    name: "Fired clay",
    token: "--palette-fired-clay",
    role: "Action",
    meaning: "The handmade, earthy action color. It should feel crafted, not corporate.",
  },
  {
    name: "Dusk mist",
    token: "--palette-dusk-mist",
    role: "Section wash",
    meaning: "A lavender-pink evening layer for separating large sections gently.",
  },
  {
    name: "Oat rest",
    token: "--palette-oat-rest",
    role: "Muted surface",
    meaning: "A resting neutral for quiet panels, disabled states, and secondary emphasis.",
  },
  {
    name: "Sage straw",
    token: "--palette-sage-straw",
    role: "Human signal",
    meaning: "A grounded note for badges and icon wells so the system is not only peach and clay.",
  },
  {
    name: "Water blue",
    token: "--palette-water-blue",
    role: "Chart contrast",
    meaning: "The cool waterline in the sunset reference, reserved for comparison data.",
  },
]

const semanticTokens: Token[] = [
  {
    name: "Background",
    token: "--background",
    role: "Global canvas",
    meaning: "The ambient page color. It should make the whole site feel warm before any component appears.",
  },
  {
    name: "Foreground",
    token: "--foreground",
    role: "Primary text",
    meaning: "The main reading color. It carries credibility and should stay calm at long lengths.",
  },
  {
    name: "Primary",
    token: "--primary",
    role: "Commitment",
    meaning: "Calls to action, brand mark, selected controls, and numbers that need intent.",
  },
  {
    name: "Secondary",
    token: "--secondary",
    role: "Dusk section",
    meaning: "Large page bands and proposal surfaces that need softness and separation.",
  },
  {
    name: "Muted",
    token: "--muted",
    role: "Rest state",
    meaning: "Lower-priority surfaces that should recede while still feeling warm.",
  },
  {
    name: "Accent",
    token: "--accent",
    role: "Earth note",
    meaning: "Small highlights, icon wells, and chips that should feel humane and grounded.",
  },
  {
    name: "Border",
    token: "--border",
    role: "Structure",
    meaning: "Clay-tinted lines that organize content without introducing cold gray.",
  },
  {
    name: "Ring",
    token: "--ring",
    role: "Focus",
    meaning: "Keyboard and field focus should inherit the same clay action signal as primary controls.",
  },
]

const darkTokens: Token[] = [
  {
    name: "Night water",
    token: "--palette-night-water",
    role: "Dark canvas",
    meaning: "The deep lake tone from the sunset image, used instead of neutral black.",
  },
  {
    name: "Night card",
    token: "--palette-night-card",
    role: "Dark cards",
    meaning: "A warmer panel shade that keeps dark mode from feeling mechanical.",
  },
  {
    name: "Night paper",
    token: "--palette-night-paper",
    role: "Dark text",
    meaning: "Soft paper text for long reading on dark surfaces.",
  },
  {
    name: "Ember clay",
    token: "--palette-ember-clay",
    role: "Dark action",
    meaning: "A brighter clay ember so primary controls still feel alive in dark mode.",
  },
  {
    name: "Sage shadow",
    token: "--palette-sage-shadow",
    role: "Dark accent",
    meaning: "An olive earth note for badges and icon wells in dark mode.",
  },
]

const lightPairs: TokenPair[] = [
  {
    name: "Body copy",
    foreground: "--foreground",
    background: "--background",
    ratio: "14.20",
    use: "Long reading on the page canvas.",
  },
  {
    name: "Primary action",
    foreground: "--primary-foreground",
    background: "--primary",
    ratio: "5.27",
    use: "Default buttons, selected chips, and banner copy.",
  },
  {
    name: "Dusk section",
    foreground: "--foreground",
    background: "--secondary",
    ratio: "11.75",
    use: "Large section bands and proposal panels.",
  },
  {
    name: "Quiet copy",
    foreground: "--muted-foreground",
    background: "--muted",
    ratio: "5.90",
    use: "Supporting paragraphs and lower-priority UI.",
  },
  {
    name: "Sage badge",
    foreground: "--accent-foreground",
    background: "--accent",
    ratio: "10.64",
    use: "Badge text and icon-well labels.",
  },
  {
    name: "Clay on sage",
    foreground: "--primary",
    background: "--accent",
    ratio: "4.55",
    use: "Lucide icons inside accent wells.",
  },
]

const darkPairs: TokenPair[] = [
  {
    name: "Dark body",
    foreground: "--foreground",
    background: "--background",
    ratio: "14.77",
    use: "Long reading in dark mode.",
  },
  {
    name: "Dark primary",
    foreground: "--primary-foreground",
    background: "--primary",
    ratio: "7.40",
    use: "Primary controls on dark surfaces.",
  },
  {
    name: "Dark accent",
    foreground: "--accent-foreground",
    background: "--accent",
    ratio: "9.52",
    use: "Dark-mode badge and icon-well copy.",
  },
]

const chartTokens = [
  { name: "Chart 1", token: "--chart-1", label: "Clay" },
  { name: "Chart 2", token: "--chart-2", label: "Rose ember" },
  { name: "Chart 3", token: "--chart-3", label: "Sage" },
  { name: "Chart 4", token: "--chart-4", label: "Water" },
  { name: "Chart 5", token: "--chart-5", label: "Golden hour" },
]

function tokenStyle(token: string): CSSProperties {
  return { backgroundColor: `var(${token})` }
}

function pairStyle(pair: TokenPair): CSSProperties {
  return {
    backgroundColor: `var(${pair.background})`,
    color: `var(${pair.foreground})`,
  }
}

function SwatchGrid({ tokens }: { tokens: Token[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tokens.map((token) => (
        <article key={token.token} className="overflow-hidden rounded-2xl border border-border/70 bg-card">
          <div className="h-28 border-b border-border/70" style={tokenStyle(token.token)} />
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-xl text-foreground">{token.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-primary">{token.role}</p>
              </div>
              <code className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">{token.token}</code>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{token.meaning}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

function PairGrid({ pairs }: { pairs: TokenPair[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {pairs.map((pair) => (
        <article key={pair.name} className="overflow-hidden rounded-2xl border border-border/70 bg-card">
          <div className="min-h-36 p-6" style={pairStyle(pair)}>
            <p className="text-xs uppercase tracking-[0.18em] opacity-75">{pair.name}</p>
            <p className="mt-4 font-serif text-3xl font-light leading-tight">People who tinker build fluency.</p>
            <p className="mt-4 text-sm leading-relaxed opacity-80">{pair.use}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 p-4 text-sm">
            <span className="text-muted-foreground">
              {pair.foreground} on {pair.background}
            </span>
            <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground">{pair.ratio}:1</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function ChartPreview() {
  return (
    <div className="rounded-2xl border border-border/70 bg-card p-6">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
          <Layers className="size-5" strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="font-serif text-2xl text-foreground">Chart spread</h3>
          <p className="text-sm text-muted-foreground">Use sparingly, but keep the set tied to the sunset source.</p>
        </div>
      </div>
      <div className="mt-8 flex h-48 items-end gap-3">
        {chartTokens.map((token, index) => (
          <div key={token.token} className="flex flex-1 flex-col items-center gap-3">
            <div
              className="w-full rounded-t-xl border border-border/50"
              style={{ ...tokenStyle(token.token), height: `${44 + index * 24}px` }}
            />
            <div className="text-center">
              <p className="text-xs font-medium text-foreground">{token.name}</p>
              <p className="text-xs text-muted-foreground">{token.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ComponentSamples() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-2xl border border-border/70 bg-card p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
            <Type className="size-5" strokeWidth={1.75} />
          </span>
          <h3 className="font-serif text-2xl text-foreground">Copy rhythm</h3>
        </div>
        <p className="mt-5 text-sm uppercase tracking-[0.18em] text-primary">Make it real</p>
        <p className="mt-3 font-serif text-4xl font-light leading-tight text-foreground">
          A benefit for the humans behind the work.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          The palette should leave the copy feeling generous, grounded, and specific. Muted text should support the
          argument without disappearing.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button nativeButton={false} render={<a href="/proposal" />} className="rounded-full px-5">
            Primary button
          </Button>
          <Button nativeButton={false} render={<a href="/how-it-works" />} variant="outline" className="rounded-full px-5">
            Outline button
          </Button>
        </div>
      </section>

      <section className="rounded-2xl border border-border/70 bg-secondary/45 p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
            <Sprout className="size-5" strokeWidth={1.75} />
          </span>
          <h3 className="font-serif text-2xl text-foreground">Controls and panels</h3>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-foreground">Input surface</span>
            <input
              className="h-11 w-full rounded-xl border border-border bg-card px-4 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary"
              placeholder="e.g. monthly budget"
            />
          </label>
          <div>
            <p className="mb-1.5 text-sm font-medium text-foreground">Segmented state</p>
            <div className="grid grid-cols-2 gap-2">
              <button className="h-11 rounded-xl border border-primary bg-primary text-sm font-medium text-primary-foreground">
                Warm
              </button>
              <button className="h-11 rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground">
                Direct
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-xl bg-card p-5">
          <p className="text-sm font-medium text-foreground">Proposal preview</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Personal AI tools are for personal practice unless company data is explicitly approved for a company tool.
          </p>
        </div>
      </section>
    </div>
  )
}

export default function PalettePage() {
  return (
    <main>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-primary">
                <Palette className="size-5" strokeWidth={1.75} />
              </span>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Palette test</p>
            </div>
            <h1 className="mt-5 text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl md:text-6xl">
              Test the Tinker Pledge colors where the product actually uses them.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              This page keeps the palette honest: source colors, semantic roles, contrast samples, component states,
              chart colors, and a dark-mode preview all in one place.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Source palette</p>
              <h2 className="mt-3 font-serif text-3xl font-light text-foreground sm:text-4xl">Meaningful primitives</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              These are the named source colors. The semantic tokens below should map back to these meanings.
            </p>
          </div>
          <SwatchGrid tokens={sourceTokens} />
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Semantic roles</p>
            <h2 className="mt-3 font-serif text-3xl font-light text-foreground sm:text-4xl">How the app consumes color</h2>
          </div>
          <SwatchGrid tokens={semanticTokens} />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-primary">
              <Contrast className="size-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Contrast checks</p>
              <h2 className="mt-2 font-serif text-3xl font-light text-foreground sm:text-4xl">Common pairings</h2>
            </div>
          </div>
          <PairGrid pairs={lightPairs} />
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:py-20">
          <ComponentSamples />
          <ChartPreview />
        </div>
      </section>

      <section className="dark border-t border-border/60 bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <Moon className="size-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Dark preview</p>
              <h2 className="mt-2 font-serif text-3xl font-light text-foreground sm:text-4xl">
                Same story after sunset
              </h2>
            </div>
          </div>
          <SwatchGrid tokens={darkTokens} />
          <div className="mt-8">
            <PairGrid pairs={darkPairs} />
          </div>
        </div>
      </section>
    </main>
  )
}
