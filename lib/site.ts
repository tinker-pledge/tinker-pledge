export const SITE_URL = 'https://tinkerpledge.org'
export const SITE_NAME = 'The Tinker Pledge'

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_URL).toString()
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
