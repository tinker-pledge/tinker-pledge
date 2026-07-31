import { ManifestoSection } from "@/components/manifesto-section"
import { PledgeSection } from "@/components/pledge-section"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "The Pledge | The Tinker Pledge",
  description:
    "A one-page argument for giving people the freedom to build AI fluency in their own lives.",
  path: "/manifesto",
})

export default function ManifestoPage() {
  return (
    <main>
      <ManifestoSection />
      <PledgeSection />
    </main>
  )
}
