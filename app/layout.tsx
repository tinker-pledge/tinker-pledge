import { Analytics } from '@vercel/analytics/next'
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
  title: 'The Tinker Pledge — Give People the Freedom to Tinker',
  description:
    'A practical proposal for employers: fund a personal AI budget through simple reimbursement so people can build fluency through low-stakes use in their own lives.',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Tinker Pledge — Give People the Freedom to Tinker',
    description:
      'Give people a personal AI budget for low-stakes use in their own lives, and give them room to build practical fluency.',
    url: '/',
    siteName: 'The Tinker Pledge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Tinker Pledge',
    description:
      'A people-first proposal for building AI fluency through everyday practice.',
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
        <div className="min-h-screen bg-background">
          <BuildingBanner />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
