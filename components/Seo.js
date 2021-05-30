import { NextSeo } from 'next-seo';

const Seo = ({ title, excerpt, slug, coverImage }) => (
  // const { title, excerpt, slug, coverImage } = postData;

  <NextSeo
    title={title}
    description={excerpt}
    canonical={`https://sergiobarria.com/blog/${slug}`}
    openGraph={{
      type: 'website',
      url: 'https://sergiobarria.com',
      title: `${title} | originally posted on sergiobarria.com`,
      description: excerpt,
      locale: 'en_EN',
      images: [
        {
          url:
            coverImage || 'https://sergiobarria.com/static/images/banner.png',
          width: 800,
          height: 600,
          alt: `hero image for ${title}`,
        },
      ],
      site_name: 'sergiobarria.com',
    }}
    twitter={{
      handle: '@sergioBarria01',
      site: 'https://twitter.com/sergioBarria01',
      cardType: 'summary_large_image',
    }}
  />
);

export default Seo;
