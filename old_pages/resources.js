import { NextSeo } from 'next-seo';

import { getAllResources } from '@/lib/graphcms';
import PageHeader from '@/components/utils/PageHeader';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ResourceCard from '@/components/resources/ResourceCard';
import { resourcesPage } from '@/data/pagesData';

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
    revalidate: 60 * 30,
  };
}

export default function ResourcesPage({ resources, categories }) {
  const { url, title, description, keywords, pageHeaderData } = resourcesPage;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
        ]}
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
