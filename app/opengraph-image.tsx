import { ImageResponse } from 'next/og'
import { OG_COLORS, OG_SIZE, loadGeist } from '@/lib/og'

export const alt = 'The Tinker Pledge — learn AI by doing'
export const size = OG_SIZE
export const contentType = 'image/png'

export default async function Image() {
  const geist = await loadGeist(300)

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
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 6, color: OG_COLORS.primary }}>
          THE TINKER PLEDGE
        </div>
        <div style={{ display: 'flex', fontSize: 68, lineHeight: 1.15, color: OG_COLORS.foreground }}>
          Learn AI by doing.
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: OG_COLORS.muted }}>
          Workshop / pledge / field notes
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Geist', data: geist, style: 'normal', weight: 300 }] },
  )
}
