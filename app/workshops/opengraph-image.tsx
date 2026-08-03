import { ImageResponse } from "next/og"
import { OG_SIZE, loadGeist } from "@/lib/og"

export const alt = "Bring one real task. Hands-on AI workshops from the Tinker Pledge."
export const size = OG_SIZE
export const contentType = "image/png"

const colors = {
  background: "#17110f",
  surface: "#211917",
  foreground: "#f7eee6",
  muted: "#d6c6bb",
  gold: "#e8a93c",
} as const

export default async function Image() {
  const geist = await loadGeist(300)

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          background: colors.background,
          color: colors.foreground,
          padding: 80,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0 0 auto 0",
            height: 8,
            display: "flex",
            background:
              "linear-gradient(90deg, #3a2c28 0%, #b4451f 28%, #e39ea2 50%, #ee7a3c 74%, #ebc45f 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 76,
            right: 86,
            width: 164,
            height: 164,
            display: "flex",
            borderRadius: 999,
            background:
              "radial-gradient(circle at 34% 30%, #f6d98a 0%, #ebc45f 17%, #ee7a3c 45%, #b4451f 68%, #211917 100%)",
          }}
        />
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: colors.gold }}>
          THE TINKER PLEDGE · WORKSHOP
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 850,
            fontSize: 72,
            lineHeight: 1.05,
            letterSpacing: -3,
            color: colors.foreground,
          }}
        >
          Bring one real task.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: `1px solid ${colors.surface}`,
            fontSize: 26,
            color: colors.muted,
          }}
        >
          <span>Hands-on AI workshops</span>
          <span style={{ color: colors.gold }}>tinkerpledge.org/workshops</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Geist", data: geist, style: "normal", weight: 300 }] },
  )
}
