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

// TODO(human-input): replace name, role, bio, and links with real copy before these
// pages are made public. An author page that is a name and one link is thin content.
export const authors = {
  eva: {
    id: 'eva',
    name: 'Eva',
    role: 'Co-creator, The Tinker Pledge',
    bio: 'PLACEHOLDER — one paragraph about Eva.',
    links: { x: 'https://x.com/evadoraz' },
  },
  abhi: {
    id: 'abhi',
    name: 'Abhi',
    role: 'Co-creator, The Tinker Pledge',
    bio: 'PLACEHOLDER — one paragraph about Abhi.',
    links: { x: 'https://x.com/ShrekOverflow' },
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
