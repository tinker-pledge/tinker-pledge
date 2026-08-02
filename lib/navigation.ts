export const primaryNavigation = [
  { label: "Workshop", href: "/workshops" },
  { label: "Pledge", href: "/pledge" },
  { label: "Podcast", href: "/podcast" },
  { label: "Blog", href: "/blog" },
] as const

export const footerProjectNavigation = [
  ...primaryNavigation,
  { label: "About", href: "/about" },
] as const

export function isCurrentNavigationPath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`)
}
