import React, { ReactNode } from 'react'

export interface IPropsWithChildren {
  children?: ReactNode
}

export interface IPostCardPreview {
  postTitle: string
  postSummary: string
  postSlug: string
  publishedDate: string
}

export interface ICustomMetadata {
  title?: string
  description?: string
  image?: string
  date?: string
  type?: string
}
