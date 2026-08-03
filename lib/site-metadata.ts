import type { Metadata } from "next"
import { DEFAULT_OG_IMAGE } from "@/lib/og"

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}` | "/"
  noIndex?: boolean
  image?: {
    url: string
    width: number
    height: number
    alt: string
  }
}

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
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
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
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
