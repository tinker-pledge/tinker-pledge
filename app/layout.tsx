import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import { BuildingBanner } from '@/components/building-banner'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tinkerpledge.org'),
  title: 'The Tinker Pledge — Give Your Teams the Freedom to Tinker',
  description:
    'Give every person a budget to use AI in their own life. The more they play, the more fluent they become — and that fluency comes to work with them. People who are free to experiment, experiment more.',
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'The Tinker Pledge' }],
    },
  },
  openGraph: {
    title: 'The Tinker Pledge — Give Your Teams the Freedom to Tinker',
    description:
      'Give every person a budget to use AI in their own life. The more they play, the more fluent they become — and that fluency comes to work with them.',
    url: '/',
    siteName: 'The Tinker Pledge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Tinker Pledge',
    description:
      'Give every person a budget to use AI in their own life, and let fluency come back to work.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:outline-2 focus:outline-offset-2 focus:outline-ring"
        >
          Skip to content
        </a>
        <div className="min-h-screen bg-background">
          <BuildingBanner />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
