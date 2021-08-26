const title = 'Sergio Barria - Engineer, developer and writer';
const description =
  'Personal blog portfolio website. Created with Next.js, GraphCMS, and Tailwind CSS';

export default {
  title,
  description,
  canonical: 'https://sergiobarria.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://sergiobarria.com',
    images: [
      {
        url: 'https://www.sergiobarria.com/static/images/banner.png',
        alt: title,
        width: 800,
        height: 600,
      },
    ],
    site_name: 'sergiobarria.com',
  },
  twitter: {
    handle: '@sergioBarria01',
    site: 'https://twitter.com/sergioBarria01',
    cardType: 'summary_large_image',
  },
};

// additionalMetaTags={[
//   {
//     name: 'keywords',
//     content: `Sergio Barria's blog, HTML, CSS, JavaScript, Next js, Gatsby, React, Node js, Vue js, Tailwind CSS, Web Development, Web Developer, ${
//       !keywords ? '' : keywords
//     }`,
//   },
// ]}
