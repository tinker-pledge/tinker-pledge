import { ProposalGenerator } from "@/components/proposal-generator"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Generate a Proposal | The Tinker Pledge",
  description:
    "Create a ready-to-send proposal for bringing a personal AI budget to your company.",
  path: "/proposal",
})

export default function ProposalPage() {
  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="tinker-container tinker-route-intro">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4">
                <p className="tinker-eyebrow text-[var(--route-pledge-accessory-ink)]">Make it real</p>
                <span aria-hidden="true" className="h-px w-10 bg-[var(--route-pledge-accessory)]" />
              </div>
              <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3.5rem,7.5vw,7rem)] font-light leading-[0.9] tracking-[-0.055em] text-foreground">
                Turn the idea into a proposal you can send today.
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Add a few details and we&apos;ll draft a warm, ready-to-send note for your People team. Nothing leaves your
                browser.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProposalGenerator />
    </main>
  )
}
