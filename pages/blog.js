import Container from '@/components/Container';
import PostListPreview from '@/components/PostListPreview';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export async function getStaticProps() {
  const posts = getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <Container>
      <PostListPreview postsArr={posts.allFiles} sectTitle="All Posts" />
    </Container>
  );
}
