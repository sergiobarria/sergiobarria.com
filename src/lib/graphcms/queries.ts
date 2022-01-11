export function getFeaturedProjects() {
  const query = `
    query FeaturedProjects {
      projects(where: { isFeatured: true }) {
        id
        name
        description
        liveUrl
        repo
        techStack
        coverImage {
          url
          size
          width
          height
        }
        framework
        isFeatured
        jamstack
        headlessCms
      }
    }
  `

  return query
}

export function getAllProjects() {
  const query = `
    query getAllProjects {
      projects {
        id
        name
        description
        liveUrl
        repo
        techStack
        coverImage {
          url
          size
          width
          height
        }
        framework
        isFeatured
        jamstack
        headlessCms
      }
    }
  `

  return query
  // const { data } = await client.query({ query })

  // return data.projects
}

export function getFeaturedPosts() {
  const query = `
    query FeaturedPosts {
      posts(where: { isFeatured: true }) {
        id
        title
        slug
        summary
        originallyPublishedOn
        publishedAt
        content {
          markdown
        }
      }
    }
  `

  return query
}

export function getAllPosts() {
  const query = `
    query getAllPosts {
      posts(orderBy: createdAt_DESC) {
        id
        title
        slug
        summary
        originallyPublishedOn
        createdAt
        publishedAt
        content {
          json
          markdown
        }
      }
    }
  `
  return query
  // const { data } = await client.query({ query })

  // return data.posts
}

export function getAboutContent() {
  const query = `
    query AboutContent {
      about(where: { id: "cksp9obk88fga0c786ndmrd3r" }) {
        id
        title
        content {
          markdown
          json
        }
      }
    }
  `
  return query
  // const { data } = await client.query({ query })

  // return data.about
}

export function getAllResources() {
  const query = `
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

  return query
}

export function getAllSlug() {
  const query = `
    query getAllSlug {
      posts {
        slug
      }
    }
  `

  return query
}

export function getPostBySlug() {
  const query = `
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

  return query
}
