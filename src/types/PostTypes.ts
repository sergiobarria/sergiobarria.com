export interface IPost {
  id: string
  title: string
  slug: string
  author?: string
  summary: string
  originallyPublishedOn: string
  coverImage?: {
    url: string
    width: number
    height: number
    blurDataUrl: string
    type: string
    alt?: string
  }
  content: {
    markdown: any
    json?: any
    references?: IAssetImage[]
  }
  otherContent?: any
  readTime?: string
  formattedDate: string
  assetImages?: IAssetImage[]
}

export interface IAssetImage {
  id: string
  handle: string
  mimeType: string
  url: string
  size: number
  height: number
  width: number
  dataBlurUrl?: string
}
