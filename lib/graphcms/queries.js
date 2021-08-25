import { gql } from 'graphql-request';
import { client } from './client';

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
      }
    }
  `;

  const data = await client.request(query);

  return data.projects;
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
  `;

  const data = await client.request(query);

  return data.projects;
}

export async function getFeaturedPosts() {
  const query = gql`
    query getFeaturedPosts {
      posts(orderBy: createdAt_DESC, first: 3) {
        id
        title
        slug
        excerpt
        originallyPublishedOn
        publishedAt
        coverImage {
          url(
            transformation: { image: { resize: { height: 240, width: 427 } } }
          )
        }
        body {
          markdown
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.posts;
}

export async function getAllPosts() {
  const query = gql`
    query getAllPosts {
      posts(orderBy: createdAt_DESC) {
        id
        title
        slug
        excerpt
        originallyPublishedOn
        createdAt
        publishedAt
        coverImage {
          url(
            transformation: { image: { resize: { height: 240, width: 427 } } }
          )
        }
        body {
          markdown
        }
      }
    }
  `;

  const data = await client.request(query);

  return data.posts;
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
  `;

  const data = await client.request(query);

  return data.about;
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
  `;

  const data = await client.request(query);

  return data.resources;
}

export async function getAllSlug() {
  const query = gql`
    query getAllSlug {
      posts {
        slug
      }
    }
  `;

  const data = await client.request(query);

  return data.posts;
}

export async function getPostBySlug(slug) {
  const query = gql`
    query getPostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        author
        originallyPublishedOn
        coverImage {
          url
        }
        body {
          markdown
        }
        otherContent
      }
      posts(orderBy: originallyPublishedOn_DESC) {
        id
        title
        slug
      }
    }
  `;

  const data = await client.request(query, { slug });

  return data;
}
