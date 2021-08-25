import { gql } from 'graphql-request';
import { client } from './client';
import {
  getFeaturedProjects,
  getFeaturedPosts,
  getAboutContent,
  getAllPosts,
  getAllProjects,
  getAllResources,
  getAllSlug,
  getPostBySlug,
} from './queries';

export {
  client,
  gql,
  getFeaturedProjects,
  getFeaturedPosts,
  getAboutContent,
  getAllPosts,
  getAllProjects,
  getAllResources,
  getAllSlug,
  getPostBySlug,
};
