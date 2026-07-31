import type { Metadata } from "next"

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
    },
    twitter: {
      card: "summary",
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
