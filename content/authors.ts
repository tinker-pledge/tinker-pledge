export type AuthorLinks = {
  x?: string
  github?: string
  linkedin?: string
  website?: string
}

export type Author = {
  /** URL segment: /authors/<id> */
  id: string
  name: string
  role: string
  /** One paragraph. Rendered on the author page and used as the Person JSON-LD description. */
  bio: string
  links: AuthorLinks
}

// Bios were drafted from each author's own site and still need their sign-off — they
// render as visible copy and as the Person JSON-LD description. `role` is the role on
// this site rather than the day job, which is in the bio; that way it doesn't go stale.
export const authors = {
  eva: {
    id: 'eva',
    name: 'Eva',
    role: 'Co-creator, The Tinker Pledge',
    bio: 'Community Lead at Vapi, working on AI voice infrastructure, and a board director at Hacker Fund. Early employee at Notion, co-founder of Cal Hacks at UC Berkeley. The through-line: when AI reshapes the economy over the next decade, which systems are actually built so that ordinary people benefit?',
    links: { website: 'https://evadora.xyz', x: 'https://x.com/evadoraz' },
  },
  abhi: {
    id: 'abhi',
    name: 'Abhi',
    role: 'Co-creator, The Tinker Pledge',
    bio: 'Product Architect at Auth0, working on what identity looks like for AI-era applications — treating agents as first-class principals alongside users and applications, with their own credentials, lifecycle, and policy. Nearly a decade across OAuth, OIDC, and developer-facing security primitives, plus independent engineering research on the side.',
    links: { website: 'https://shrekoverflow.dev', x: 'https://x.com/ShrekOverflow' },
  },
} as const satisfies Record<string, Author>

export type AuthorId = keyof typeof authors

export const authorIds = Object.keys(authors) as AuthorId[]

export function isAuthorId(value: string): value is AuthorId {
  return Object.hasOwn(authors, value)
}

export function getAuthor(id: AuthorId): Author {
  return authors[id]
}
