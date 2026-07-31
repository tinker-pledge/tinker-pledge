import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { HypothesisSection } from "@/components/hypothesis-section"
import { HowSection } from "@/components/how-section"
import { BusinessCaseSection } from "@/components/business-case-section"
import { SharePledgeSection } from "@/components/share-pledge-section"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  // alternates is a shallow-merged key: declaring `canonical` here replaces the root
  // layout's whole `alternates` object, so the RSS discovery link from app/layout.tsx
  // has to be repeated here or the homepage silently loses it.
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "The Tinker Pledge" }],
    },
  },
}

export default function Page() {
  return (
    <main>
      <Hero />
      <HypothesisSection />
      <HowSection />
      <BusinessCaseSection />
      <SharePledgeSection />
      <CtaSection />
    </main>
  )
}
