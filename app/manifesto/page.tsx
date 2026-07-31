import type { Metadata } from "next"
import { ManifestoSection } from "@/components/manifesto-section"
import { PledgeSection } from "@/components/pledge-section"

export const metadata: Metadata = {
  title: "Manifesto | The Tinker Pledge",
  description:
    "A one-page case for helping people build AI fluency through personal, low-stakes practice.",
}

export default function ManifestoPage() {
  return (
    <main>
      <ManifestoSection />
      <PledgeSection />
    </main>
  )
}
