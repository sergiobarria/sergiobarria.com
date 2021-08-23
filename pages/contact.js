import { NextSeo } from 'next-seo';

import Contact from '@/components/contact/Contact';

export default function ContactPage() {
  const url = 'https://sergiobarria.com/contact';
  const title = 'Contact | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Contact />
    </>
  );
}
