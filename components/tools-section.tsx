import {
  ArrowUpRight,
  Bot,
  Code2,
  Lightbulb,
  Mic2,
  Palette,
  PenLine,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

const principles = [
  {
    icon: Sparkles,
    title: "Familiar first",
    body: "Start with names people recognize, then let usage show what belongs on the list.",
  },
  {
    icon: Users,
    title: "Employee-led additions",
    body: "Keep room for people to suggest tools that fit their own lives and workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Clear data boundary",
    body: "Personal tools stay for personal use, public information, and low-risk practice.",
  },
]

const toolCategories = [
  {
    icon: Bot,
    label: "Think & ask",
    description: "General assistants for planning, explaining, drafting, and curiosity.",
    tools: [
      {
        name: "ChatGPT",
        href: "https://chatgpt.com/",
        use: "Draft, plan, explain, summarize, and brainstorm.",
      },
      {
        name: "Claude",
        href: "https://claude.ai/",
        use: "Work through writing, analysis, documents, and code.",
      },
      {
        name: "Gemini",
        href: "https://gemini.google.com/",
        use: "Explore ideas, ask questions, and get help across everyday tasks.",
      },
    ],
  },
  {
    icon: Search,
    label: "Research",
    description: "Question-answering and source discovery for personal learning.",
    tools: [
      {
        name: "Perplexity",
        href: "https://www.perplexity.ai/",
        use: "Search, compare sources, and chase down unfamiliar topics.",
      },
    ],
  },
  {
    icon: PenLine,
    label: "Write & organize",
    description: "Assistants inside the places people already write and plan.",
    tools: [
      {
        name: "Grammarly",
        href: "https://www.grammarly.com/",
        use: "Polish messages, drafts, and everyday writing.",
      },
      {
        name: "Notion AI",
        href: "https://www.notion.com/product/ai",
        use: "Turn notes, plans, and docs into clearer next steps.",
      },
    ],
  },
  {
    icon: Code2,
    label: "Code & build",
    description: "Developer tools for people already tinkering with software.",
    tools: [
      {
        name: "GitHub Copilot",
        href: "https://github.com/features/copilot",
        use: "Pair on code, scripts, and personal technical projects.",
      },
      {
        name: "Cursor",
        href: "https://cursor.com/",
        use: "Build and refactor inside an AI-native code editor.",
      },
    ],
  },
  {
    icon: Palette,
    label: "Create",
    description: "Image, design, and video tools for creative exploration.",
    tools: [
      {
        name: "Midjourney",
        href: "https://www.midjourney.com/",
        use: "Explore visual ideas and generate image concepts.",
      },
      {
        name: "Canva Magic Studio",
        href: "https://www.canva.com/magic/",
        use: "Make quick graphics, presentations, and design drafts.",
      },
      {
        name: "Runway",
        href: "https://runwayml.com/",
        use: "Experiment with AI video, images, and motion.",
      },
    ],
  },
  {
    icon: Mic2,
    label: "Voice & media",
    description: "Audio and video tools for editing, narration, and experiments.",
    tools: [
      {
        name: "ElevenLabs",
        href: "https://elevenlabs.io/",
        use: "Create voice experiments, narration, and audio ideas.",
      },
      {
        name: "Descript",
        href: "https://www.descript.com/",
        use: "Edit podcasts, videos, and transcripts with AI help.",
      },
    ],
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Starter tools</p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
              A starter list, not a cage.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Give people recognizable starting points. The list should make launch easy, not freeze the policy in
              place while the tools keep changing.
            </p>

            <div className="mt-8 grid gap-3">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-4 rounded-2xl border border-border/70 bg-background p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <principle.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">{principle.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {toolCategories.map((category) => (
              <div key={category.label} className="rounded-3xl border border-border/70 bg-card p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <category.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-foreground">{category.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="mt-5 divide-y divide-border/70">
                  {category.tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground">
                        {tool.name.slice(0, 1)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-1.5 font-medium text-foreground">
                          {tool.name}
                          <ArrowUpRight
                            className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary"
                            strokeWidth={1.75}
                          />
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{tool.use}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-border/70 bg-background p-6 md:p-7">
          <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <Lightbulb className="size-5" strokeWidth={1.75} />
              </span>
              <p className="font-serif text-xl text-foreground">Review quarterly.</p>
            </div>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Tools change quickly. Treat this as the launch default, invite employee suggestions, and keep the policy
              focused on the budget, reimbursement path, and data boundary.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
