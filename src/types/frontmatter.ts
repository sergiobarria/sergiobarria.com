import { ReadTimeResults } from 'reading-time'

export type BlogFrontmatter = {
  wordCount: number
  readingTime: ReadTimeResults
  slug: string
  title: string
  summary: string
  banner: string
  publishedAt: string
  lastUpdated?: string
  tags?: string
}

export type ContentType = 'blog' | 'library' | 'projects'

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : T extends 'library'
  ? LibraryFrontmatter
  : ProjectFrontmatter

// export type InjectedMeta = { views?: number; likes?: number }

export type BlogType = {
  code: string
  frontmatter: BlogFrontmatter
}

export type LibraryFrontmatter = {
  slug: string
  title: string
  readingTime: ReadTimeResults
  description: string
  tags: string
}

export type ProjectFrontmatter = {
  title: string
  slug: string
  publishedAt: string
  lastUpdated?: string
  description: string
  category?: string
  techs: string
  banner: string
  route?: string
  github?: string
}

export type ProjectType = {
  code: string
  frontmatter: ProjectFrontmatter
}

export type FrontmatterWithTags = BlogFrontmatter | LibraryFrontmatter
export type FrontmatterWithDate = BlogFrontmatter | ProjectFrontmatter
export type Frontmatter =
  | ProjectFrontmatter
  | BlogFrontmatter
  | LibraryFrontmatter
