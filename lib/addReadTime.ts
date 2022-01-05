import readingTime from 'reading-time'
import { IPost } from '@/types/interfaces'

export const addReadTime = (posts: IPost[]) => {
  let newPosts: IPost[] = []

  const postsReadTime = posts.map(post => {
    if (post.body?.markdown) {
      return readingTime(post.body.markdown)
    }
    return
  })

  newPosts = posts.map((post, i) => ({
    ...post,
    readTime: postsReadTime[i]?.text || undefined,
  }))

  return newPosts
}
