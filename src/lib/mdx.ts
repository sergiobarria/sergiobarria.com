import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { ContentType, Frontmatter, PickFrontmatter } from '@/types/frontmatter'

export async function getFiles(type: ContentType) {
  return readdirSync(join(process.cwd(), 'src', 'content', type))
}

export async function getFileBySlug(type: ContentType, slug: string) {
  const source = slug
    ? readFileSync(
        join(process.cwd(), 'src', 'content', type, `${slug}.mdx`),
        'utf8'
      )
    : readFileSync(join(process.cwd(), 'src', 'content', `${type}.mdx`), 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions(options: any) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor'],
            },
          },
        ],
      ]
      return options
    },
  })

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  }
}

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = readdirSync(join(process.cwd(), 'src', 'content', type))

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'src', 'content', type, postSlug),
      'utf8'
    )
    const { data } = matter(source)

    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: postSlug.replace('.mdx', ''),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ]
    return res
  }, [])
}

export function getFeatured<T extends Frontmatter>(
  contents: Array<T>,
  features: string[]
) {
  // override as T because there is no typechecking on the features array
  return features.map(
    feat => contents.find(content => content.slug === feat) as T
  )
}
