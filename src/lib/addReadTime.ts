import readingTime from 'reading-time'

import { IPost } from '@/types/PostTypes'

export const addReadTime = (posts: IPost[]) => {
  let newPosts: IPost[] = []

  const postsReadTime = posts.map(post => {
    if (post.content?.markdown) {
      return readingTime(post.content.markdown)
    }
    return
  })

  newPosts = posts.map((post, i) => ({
    ...post,
    readTime: postsReadTime[i]?.text || undefined,
  }))

  return newPosts
}
