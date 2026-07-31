import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

/**
 * Raw HTML in markdown is dropped: remark-rehype defaults to allowDangerousHtml:false.
 * That is why there is no rehype-sanitize here — there is nothing to sanitize. If raw
 * HTML is ever allowed, rehype-raw + rehype-sanitize become mandatory, in that order,
 * before stringify.
 *
 * Heading anchors are decorative by design: aria-hidden and out of the tab order, so a
 * long article doesn't become a wall of tab stops for keyboard users. They are revealed
 * on hover/focus-within by the .prose-tinker rules in globals.css.
 */
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, {
    behavior: 'prepend',
    properties: { className: ['heading-anchor'], ariaHidden: 'true', tabIndex: -1 },
    content: { type: 'text', value: '#' },
  })
  .use(rehypeStringify)
  .freeze()

export async function renderMarkdown(markdown: string): Promise<string> {
  const file = await processor.process(markdown)
  return String(file)
}
