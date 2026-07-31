import type { Metadata } from "next"
import { ManifestoSection } from "@/components/manifesto-section"
import { PledgeSection } from "@/components/pledge-section"
import { DEFAULT_OG_IMAGE } from "@/lib/og"

export const metadata: Metadata = {
  title: "Manifesto | The Tinker Pledge",
  description:
    "A one-page argument for giving people the freedom to build AI fluency in their own lives.",
  alternates: { canonical: "/manifesto" },
  openGraph: {
    type: "website",
    siteName: "The Tinker Pledge",
    url: "/manifesto",
    title: "Manifesto | The Tinker Pledge",
    description:
      "A one-page argument for giving people the freedom to build AI fluency in their own lives.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifesto | The Tinker Pledge",
    description:
      "A one-page argument for giving people the freedom to build AI fluency in their own lives.",
  },
}

export default function ManifestoPage() {
  return (
    <main id="main-content">
      <ManifestoSection />
      <PledgeSection />
    </main>
  )
}
