import NextLink from 'next/link';
import { RiComputerLine } from 'react-icons/ri';
import { FaServer, FaMobileAlt } from 'react-icons/fa';
import { ImStack } from 'react-icons/im';

import { getAllFilesFrontMatter } from '@/lib/mdx';

import Container from '@/components/Container';
import SinglePostCard from '@/components/SinglePostCard';
import Card from '@/components/Card';

export default function Home({ posts }) {
  const latestPosts = posts.allPosts.slice(0, 4);

  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-4">
        <h1 className="mb-4 text-2xl font-bold text-black md:text-4xl tracking-tigh dark:text-gray-100">
          Hey, I'm Sergio
        </h1>
        <p className="mb-8 font-normal prose text-gray-600 dark:text-gray-100">
          I'm an Engineer, developer and writer. For last few years I've worked
          as a Civil Engineer until I decide to take a professional turn and
          becoming a web developer. I created this small space on the internet
          to share my journey and try to help others who are also starting to
          learn how to code.
        </p>
      </div>
      <div>
        <h1 className="mb-4 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-4xl md:leading-14">
          What I do
        </h1>
        <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 md:gap-4">
          <Card
            title="Frontend Development"
            icon={
              <RiComputerLine className="w-10 h-10 text-green-500 md:w-12 md:h-12" />
            }
            description="I build UI and scalable SPA with HTML, CSS and JavaScript"
            techStack="JavaScript - Vue - React"
          />
          <Card
            title="Backend Development"
            icon={
              <FaServer className="w-10 h-10 text-green-500 md:w-12 md:h-12" />
            }
            description="Connection with the frontend, databases and security"
            techStack="Node js - Django - MongoDB - SQL - Firebase"
          />
          <Card
            title="JAM Stack Development"
            icon={
              <ImStack className="w-10 h-10 text-green-500 md:w-12 md:h-12" />
            }
            description="SSR and SSG development for better performance & SEO"
            techStack="Next js - Gatsby"
          />
          <Card
            title="Mobile Development"
            icon={
              <FaMobileAlt className="w-10 h-10 text-green-500 md:w-12 md:h-12" />
            }
            description="Cross platform mobile development for iOS and Android phones"
            techStack="Flutter"
          />
        </div>
      </div>
      <div className="mx-auto mt-6 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-4xl md:leading-14">
            My latest toughts
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!latestPosts.length && 'No posts found.'}
          {latestPosts.map(post => (
            <li key={post.id} className="py-4">
              <article>
                <SinglePostCard {...post} />
              </article>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-6">
        <NextLink href="/blog">
          <a className="p-1 text-green-600 uppercase border-b border-green-500">
            All Posts &rarr;
          </a>
        </NextLink>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllFilesFrontMatter();

  return {
    props: {
      posts,
    },
  };
}
