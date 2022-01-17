import { NextSeo } from 'next-seo';

import ContactForm from '@/components/ContactForm';

export default function contact() {
  const customMetadata = {
    title: 'Contact',
    canonical: 'https://sergiobarria.com/contact',
    openGraph: {
      url: 'https://sergiobarria.com/contact',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <section className='section'>
        <div className='layout'>
          <div className='w-full mx-auto mb-8 md:w-8/12'>
            <h2>Contact Me</h2>
            <p className='my-2 text-long'>
              If you want to hire me, collaborate or give me any feedback or
              suggestions, get in touch.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
