const title = 'Sergio Barria - Engineer, developer and writer';
const description =
  'Personal blog portfolio website. Created with Next.js, MDX, TypeScript and Tailwind CSS';

const SEO = {
  title,
  description,
  canonical: 'https://sergiobarria.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://sergiobarria.com',
    title,
    description,
    images: [
      {
        url: 'https://www.sergiobarria.com/static/images/banner.png',
        alt: title,
      },
    ],
  },
  twitter: {
    handle: '@sergioBarria01',
    site: 'https://twitter.com/sergioBarria01',
    cardType: 'summary_large_image',
  },
};

export default SEO;
