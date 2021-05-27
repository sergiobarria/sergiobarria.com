import NextImage from 'next/image';
// import NextLink from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
// import Card from '@/components/Card';

export default function Resources() {
  const url = 'https://sergiobarria.com/resources';
  const title = 'Resources | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';

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
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-4">
          <h1>All Resources</h1>
          <p className="mb-8 font-normal prose text-center text-skin-base dark:text-gray-100">
            In this section I'm going to upload different code snippets, tips
            and helpful resources in general related to web development in
            general.
          </p>

          <p className="mb-8 font-normal prose text-center text-gray-600 dark:text-skin-inverted">
            <span className="font-bold text-skin-warn "> 🚧 WARNING 🚧 :</span>
            Section under construction. Content will be available very soon...👷🏼‍♂️
          </p>

          <div className="bg-gray-100 rounded-full shadow-lg">
            <NextImage
              src="/static/images/construction.svg"
              width="400"
              height="400"
            />
          </div>
        </div>

        {/* Resources Content */}
        {/* <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 md:gap-4">
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
        </div> */}
      </Container>
    </>
  );
}
