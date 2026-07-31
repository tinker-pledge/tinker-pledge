import type { Metadata } from "next"
import { DEFAULT_OG_IMAGE } from "@/lib/og"

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}` | "/"
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "The Tinker Pledge",
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  }
}
