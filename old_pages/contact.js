import { NextSeo } from 'next-seo';

// import Contact from '@/components/contact/Contact';
import { contactPage } from '@/data/pagesData';

export default function ContactPage() {
  const { url, title, keywords, description } = contactPage;

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
            content: `${keywords}, contact form`,
          },
        ]}
      />
      {/* <Contact /> */}
    </>
  );
}
