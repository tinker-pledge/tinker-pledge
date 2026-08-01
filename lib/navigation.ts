export const primaryNavigation = [
  { label: "Workshop", href: "/workshops" },
  { label: "Pledge", href: "/pledge" },
  { label: "Podcast", href: "/podcast" },
  { label: "Blog", href: "/blog" },
] as const

export function isCurrentNavigationPath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`)
}
