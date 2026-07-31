import { ProposalGenerator } from "@/components/proposal-generator"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Draft a Proposal | The Tinker Pledge",
  description:
    "Create an editable proposal for bringing a personal AI budget to your company.",
  path: "/proposal",
})

export default function ProposalPage() {
  return (
    <main>
      <ProposalGenerator />
    </main>
  )
}
