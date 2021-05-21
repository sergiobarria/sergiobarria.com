import Container from '@/components/Container';
import PostListPreview from '@/components/PostListPreview';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <Container>
      <PostListPreview postsArr={posts.allPosts} sectTitle="All Posts" />
    </Container>
  );
}
