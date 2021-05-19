import NextLink from 'next/link';
import { Link, Stack, Flex, Text, Heading } from '@chakra-ui/react';

import { getAllFilesFrontMatter } from '@/lib/mdx';

import MainContainer from '@/components/MainContainer';

export default function Home({ posts }) {
  const latestPosts = posts.allPosts.slice(0, 4);

  return (
    <MainContainer>
      <Stack
        as="main"
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="1200px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          px={10}
        >
          <Heading as="h1" my={4}>
            Hi, I'm Sergio!
          </Heading>
          <Text>
            I'm a Web Developer. Ever since I discover programming I've become
            addicted to learning. I'd like to share with you all the knowledge
            I've been adquiring and work together i norder to keep improving and
            becoming a better developer every day.
          </Text>
        </Flex>
      </Stack>
      {latestPosts.map(post => (
        <NextLink key={post.id} href={`blog/${post.slug}`}>
          <Link>{post.title}</Link>
        </NextLink>
      ))}
    </MainContainer>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();

  return {
    props: {
      posts,
    },
  };
}
