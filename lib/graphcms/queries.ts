import { gql } from '@apollo/client'
import { getPlaiceholder } from 'plaiceholder'
import { client } from './apolloClient'

export async function getFeaturedProjects() {
  const query = gql`
    query getFeaturedProjects {
      projects(where: { isFeatured: true }) {
        id
        projectName
        description
        liveUrl
        repositoryUrl
        techStack
        coverImage {
          url
        }
        mainTechnology
      }
    }
  `

  const { data } = await client.query({ query })

  return data.projects
}

export async function getAllProjects() {
  const query = gql`
    query getAllProjects {
      projects {
        id
        projectName
        projectNumber
        summary
        category
        description
        liveUrl
        repositoryUrl
        techStack
        coverImage {
          url
        }
      }
    }
  `

  const { data } = await client.query({ query })

  return data.projects
}

export async function getFeaturedPosts() {
  const query = gql`
    query MyQuery {
      posts(where: { isFeatured: true }) {
        id
        title
        slug
        summary
        originallyPublishedOn
        publishedAt
        coverImage {
          url(
            transformation: { image: { resize: { height: 240, width: 427 } } }
          )
        }
        content {
          json
          markdown
        }
      }
    }
  `

  const { data } = await client.query({ query })

  return data.posts
}

export async function getAllPosts() {
  const query = gql`
    query getAllPosts {
      posts(orderBy: createdAt_DESC) {
        id
        title
        slug
        summary
        originallyPublishedOn
        createdAt
        publishedAt
        coverImage {
          url(
            transformation: { image: { resize: { height: 240, width: 427 } } }
          )
        }
        content {
          json
          markdown
        }
      }
    }
  `

  const { data } = await client.query({ query })

  return data.posts
}

export async function getAboutContent() {
  const query = gql`
    query MyQuery {
      about(where: { id: "cksp9obk88fga0c786ndmrd3r" }) {
        id
        title
        content {
          markdown
        }
      }
    }
  `

  const { data } = await client.query({ query })

  return data.about
}

export async function getAllResources() {
  const query = gql`
    query getAllResources {
      resources {
        id
        title
        link
        description
        category
      }
    }
  `

  const { data } = await client.query({ query })

  return data.resources
}

export async function getAllSlug() {
  const query = gql`
    query getAllSlug {
      posts {
        slug
      }
    }
  `

  const { data } = await client.query({ query })

  return data.posts
}

export async function getPostBySlug(slug: string) {
  const query = gql`
    query getPostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        author
        summary
        originallyPublishedOn
        coverImage {
          url
          width
          height
          alt
        }
        content {
          markdown
          json
          references {
            ... on Asset {
              id
              handle
              height
              mimeType
              size
              url
              width
            }
          }
        }
        otherContent
      }
    }
  `

  const { data } = await client.query({
    query,
    variables: {
      slug,
    },
  })

  return data
}
