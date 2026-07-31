import type { Author } from '@/content/authors'
import { formatPostDate } from '@/lib/site'
import { cn } from '@/lib/utils'

type AuthorBylineProps = {
  authors: Author[]
  publishedAt: string
  updatedAt?: string
  className?: string
}

export function AuthorByline({ authors, publishedAt, updatedAt, className }: AuthorBylineProps) {
  return (
    <p className={cn('flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground', className)}>
      <span>
        {'By '}
        {authors.map((author, i) => (
          <span key={author.id}>
            {i > 0 && (i === authors.length - 1 ? ' and ' : ', ')}
            <a
              href={`/authors/${author.id}`}
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {author.name}
            </a>
          </span>
        ))}
      </span>
      <span aria-hidden="true">·</span>
      <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time>
      {updatedAt && (
        <>
          <span aria-hidden="true">·</span>
          <span>
            {'Updated '}
            <time dateTime={updatedAt}>{formatPostDate(updatedAt)}</time>
          </span>
        </>
      )}
    </p>
  )
}
