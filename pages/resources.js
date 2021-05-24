import NextLink from 'next/link';

import Container from '@/components/Container';
import Card from '@/components/Card';
// import { getAllFilesFrontMatter } from '@/lib/mdx';

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter();

//   return { props: { posts } };
// }

export default function Resources() {
  const techList = [
    {
      id: 1,
      title: 'Javascript',
    },
    {
      id: 2,
      title: 'Vue',
    },
    {
      id: 3,
      title: 'React',
    },
    {
      id: 4,
      title: 'Next',
    },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-4">
        <h1 className="mb-4 text-2xl font-bold text-center text-skin-title md:text-4xl tracking-tigh dark:text-skin-inverted">
          All Resources
        </h1>
        <p className="mb-8 font-normal prose text-center text-skin-base dark:text-gray-100">
          In this section I'm going to upload different code snippets, tips and
          helpful resources in general related to web development in general.
        </p>

        <p className="mb-8 font-normal prose text-center text-gray-600 dark:text-skin-inverted">
          <span className="font-bold text-skin-warn "> 🚧 IMPORTANT 🚧 :</span>
          Section under construction. Content will be available very soon👷🏼‍♂️.
        </p>
      </div>

      {/* Resources Content */}
      <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 md:gap-4">
        {techList.map(tech => (
          <NextLink
            key={tech.id}
            href={`/resources/${tech.title.toLowerCase()}`}
          >
            <a className="cursor-pointer">
              <Card
                title={tech.title}
                image={`/static/logos/${tech.title.toLowerCase()}.svg`}
                description={`Code snippets and resources related to ${tech.title.toLowerCase()} development`}
              />
            </a>
          </NextLink>
        ))}
      </div>
    </Container>
  );
}
