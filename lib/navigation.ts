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

const navigationRouteFamilies: Partial<Record<(typeof primaryNavigation)[number]["href"], readonly string[]>> = {
  "/workshops": ["/workplace"],
  "/pledge": ["/how-it-works", "/proposal"],
}

export function isCurrentNavigationPath(pathname: string, href: string): boolean {
  if (pathname === href || pathname.startsWith(`${href}/`)) return true

  return navigationRouteFamilies[href as keyof typeof navigationRouteFamilies]?.some(
    (relatedPath) => pathname === relatedPath || pathname.startsWith(`${relatedPath}/`),
  ) ?? false
}
