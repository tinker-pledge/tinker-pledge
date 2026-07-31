import type { Metadata } from "next"
import { ProposalGenerator } from "@/components/proposal-generator"

export const metadata: Metadata = {
  title: "Generate a Proposal | The Tinker Pledge",
  description:
    "Create a ready-to-send proposal for bringing a personal AI budget to your company.",
  alternates: { canonical: "/proposal" },
  openGraph: {
    type: "website",
    siteName: "The Tinker Pledge",
    url: "/proposal",
    title: "Generate a Proposal | The Tinker Pledge",
    description:
      "Create a ready-to-send proposal for bringing a personal AI budget to your company.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate a Proposal | The Tinker Pledge",
    description:
      "Create a ready-to-send proposal for bringing a personal AI budget to your company.",
  },
}

export default function ProposalPage() {
  return (
    <main>
      <ProposalGenerator />
    </main>
  )
}
