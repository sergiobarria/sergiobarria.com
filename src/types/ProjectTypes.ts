export interface IProject {
  id: string
  name: string
  number: number
  description: string
  coverImage: {
    url: string
    size: number
    width: number
    height: number
  }
  liveUrl: string
  repo: string
  techStack: string[]
  framework: string
  isFeatured: boolean
  jamstack: string
  headlessCms: string
}
