import { ImageResponse } from 'next/og'
import { OG_COLORS, OG_SIZE, loadFraunces } from '@/lib/og'

export const alt = 'The Tinker Pledge — give your teams the freedom to tinker'
export const size = OG_SIZE
export const contentType = 'image/png'

export default async function Image() {
  const fraunces = await loadFraunces(300)

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: OG_COLORS.background,
          padding: 80,
          fontFamily: 'Fraunces',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 6, color: OG_COLORS.primary }}>
          THE TINKER PLEDGE
        </div>
        <div style={{ display: 'flex', fontSize: 68, lineHeight: 1.15, color: OG_COLORS.foreground }}>
          Give your teams the freedom to tinker.
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: OG_COLORS.muted }}>tinkerpledge.org</div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Fraunces', data: fraunces, style: 'normal', weight: 300 }] },
  )
}
