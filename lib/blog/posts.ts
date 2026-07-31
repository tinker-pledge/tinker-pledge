import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { isAuthorId, getAuthor, type Author, type AuthorId } from '@/content/authors'
import { renderMarkdown } from '@/lib/blog/render'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export type PostMeta = {
  slug: string
  title: string
  description: string
  /** ISO date, YYYY-MM-DD */
  publishedAt: string
  updatedAt?: string
  authors: Author[]
  tags: string[]
  draft: boolean
}

export type Post = PostMeta & { html: string }

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

/**
 * YAML 1.1 auto-converts unquoted `2026-07-20` into a JS Date. Normalize both
 * shapes to a YYYY-MM-DD string so authors don't have to remember to quote dates.
 */
function normalizeDate(value: unknown): string | null {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  if (typeof value === 'string' && DATE_RE.test(value.trim())) return value.trim()
  return null
}

function fail(file: string, message: string): never {
  throw new Error(`content/blog/${file}: ${message}`)
}

function validate(file: string, slug: string, data: Record<string, unknown>): PostMeta {
  const title = data.title
  if (typeof title !== 'string' || title.trim() === '') {
    fail(file, 'frontmatter `title` is required and must be a non-empty string')
  }

  const description = data.description
  if (typeof description !== 'string' || description.trim() === '') {
    fail(file, 'frontmatter `description` is required and must be a non-empty string')
  }

  const publishedAt = normalizeDate(data.publishedAt)
  if (!publishedAt) {
    fail(file, 'frontmatter `publishedAt` is required and must be YYYY-MM-DD')
  }

  let updatedAt: string | undefined
  if (data.updatedAt !== undefined) {
    const normalized = normalizeDate(data.updatedAt)
    if (!normalized) fail(file, 'frontmatter `updatedAt` must be YYYY-MM-DD when present')
    if (normalized < publishedAt) fail(file, '`updatedAt` is earlier than `publishedAt`')
    updatedAt = normalized
  }

  const rawAuthors = data.authors
  if (!Array.isArray(rawAuthors) || rawAuthors.length === 0) {
    fail(file, 'frontmatter `authors` is required and must be a non-empty array of author ids')
  }
  const authors = rawAuthors.map((id) => {
    if (typeof id !== 'string' || !isAuthorId(id)) {
      fail(file, `unknown author id ${JSON.stringify(id)} — add them to content/authors.ts first`)
    }
    return getAuthor(id as AuthorId)
  })

  const rawTags = data.tags ?? []
  if (!Array.isArray(rawTags) || rawTags.some((t) => typeof t !== 'string')) {
    fail(file, 'frontmatter `tags` must be an array of strings when present')
  }

  if (data.draft !== undefined && typeof data.draft !== 'boolean') {
    fail(file, 'frontmatter `draft` must be a boolean when present')
  }

  return {
    slug,
    title: title.trim(),
    description: description.trim(),
    publishedAt,
    updatedAt,
    authors,
    tags: rawTags as string[],
    draft: data.draft === true,
  }
}

type RawPost = { meta: PostMeta; body: string }

let cache: Map<string, RawPost> | null = null

function loadAll(): Map<string, RawPost> {
  if (cache) return cache

  if (!fs.existsSync(CONTENT_DIR)) {
    throw new Error(`Missing content directory at ${CONTENT_DIR}`)
  }

  const entries = new Map<string, RawPost>()
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md')).sort()

  for (const file of files) {
    const slug = file.replace(/\.md$/, '')
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      fail(file, 'filename must be a lowercase kebab-case slug, e.g. why-we-tinker.md')
    }
    const source = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
    const { data, content } = matter(source)
    if (content.trim() === '') fail(file, 'post body is empty')
    entries.set(slug, { meta: validate(file, slug, data as Record<string, unknown>), body: content })
  }

  cache = entries
  return entries
}

/** Published posts, newest first. Drafts are excluded from every listing surface. */
export function getAllPosts(): PostMeta[] {
  return [...loadAll().values()]
    .map((e) => e.meta)
    .filter((m) => !m.draft)
    .sort((a, b) => (a.publishedAt === b.publishedAt
      ? a.slug.localeCompare(b.slug)
      : b.publishedAt.localeCompare(a.publishedAt)))
}

export function getPostsByAuthor(id: AuthorId): PostMeta[] {
  return getAllPosts().filter((p) => p.authors.some((a) => a.id === id))
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

/** Returns null for unknown slugs. Drafts are previewable by direct URL in development only. */
export async function getPost(slug: string): Promise<Post | null> {
  const entry = loadAll().get(slug)
  if (!entry || (entry.meta.draft && process.env.NODE_ENV === 'production')) return null
  return { ...entry.meta, html: await renderMarkdown(entry.body) }
}
