import { NextSeo } from 'next-seo';

import { getAllResources } from '@/lib/graphcms';
import PageHeader from '@/components/utils/PageHeader';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ResourceCard from '@/components/resources/ResourceCard';

export async function getStaticProps() {
  const resources = await getAllResources();

  const categories = [
    ...new Set(resources.map(resource => resource.category.replace('_', ' '))),
  ];

  return {
    props: {
      resources,
      categories,
    },
    revalidate: 60 * 60,
  };
}

export default function ResourcesPage({ resources, categories }) {
  const url = 'https://sergiobarria.com/resources';
  const title = 'Resources | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';
  const pageHeaderData = {
    title: 'Useful Resources for Web Design and Development',
    subtitle: 'All Resources',
    text: `In this section I'm going to upload different code snippets, tips
    and helpful resources related to web development in
    general.`,
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <PageHeader {...pageHeaderData} />

        <hr />
        <section className="mx-4 mt-6 xl:mx-0">
          <div>
            {categories.map((cat, index) => (
              <div key={index}>
                <SectionTitle title={cat} />
                <div className="grid grid-cols-12 gap-4 my-6 mb-6 md:mb-12 sm:gap-4">
                  {resources
                    .filter(
                      resource => resource.category.replace('_', ' ') === cat
                    )
                    .sort((a, b) => (a.title < b.title ? -1 : 1))
                    .map(resource => (
                      <ResourceCard key={resource.id} {...resource} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
