import React, { ReactNode } from 'react'

export interface IPropsWithChildren {
  children?: ReactNode
}

export interface IPostCardPreview {
  postTitle: String
  postSummary: String
  postSlug: String
  publishedDate: String
}
