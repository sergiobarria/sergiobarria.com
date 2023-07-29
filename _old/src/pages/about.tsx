import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { Section } from '@/components/base';
import { Main } from '@/components/base';
import TechIcons from '@/components/TechIcons';
import { TechListType } from '@/components/TechIcons';
import TechStack from '@/components/TechStack';
import TopSpotifyTracks from '@/components/TopSpotifyTracks';
import { H1, H3, Paragraph } from '@/components/Typography';

export default function AboutPage() {
  const customMetadata = {
    title: 'About',
    canonical: 'https://sergiobarria.com/about',
    openGraph: {
      url: 'https://sergiobarria.com/about',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <Main>
        <Section>
          <H1>About me</H1>
          <article className='prose mt-6 max-w-none'>
            <Paragraph>
              Hello! I'm Sergio. I'm a Civil Engineer - Web & Mobile Developer
              from Panama.
            </Paragraph>
            <Paragraph>
              I first had my first try at software development a few years back
              in college. Although I liked it, I kept focus on my career so I
              couldn't keep practicing.
            </Paragraph>
            <Paragraph>
              Because of the pandemic, there was not much to do during
              quarantine, so I started looking for some new hobbies. By the end
              of 2020 after a few months of digging around I decided to focus on
              web development. There is so much technologies to learn for both
              front and back end development, that I quickly fell in love with
              programming in general.
            </Paragraph>
            <Paragraph>
              I created this website for two main reasons. The first one is to
              showcase and share all the things I've learned during my journey,
              and who knows?, maybe help others, that like me are learning. The
              second reason is, I always like to learn new things. So, I wanted
              this website to be the place where I can put in practice all the
              new things I learn.
            </Paragraph>
            <Paragraph>
              If you want to{' '}
              <Link href='/contact'>
                <a className='text-primary hover:text-primary/70'>contact me</a>
              </Link>
              , go ahead and send me a message through the contact form on the
              contact page. I'll be happy to receive your feedback.
            </Paragraph>
          </article>
        </Section>

        <Section>
          <div className='my-8 space-y-3'>
            <div className='mb-16 space-y-3'>
              <H3>Current Favorite Tech Stack</H3>
              <p className='text-gray-600 dark:text-gray-200'>
                This is my current favorite stack to work with
              </p>
              <TechStack />
            </div>

            <div className='space-y-3'>
              <H3>Other Tech</H3>
              <p className='text-gray-600 dark:text-gray-200'>
                This is some of the other technologies that I know and have work
                with
              </p>
              <TechIcons
                className='text-gray-500'
                techs={
                  'vue,django,mongodb,mysql,postgresql,firebase,sass,gatsby'.split(
                    ','
                  ) as Array<TechListType>
                }
              />
            </div>
          </div>
        </Section>

        <Section>
          <H3>Top Spotify Tracks</H3>
          <Paragraph>
            Want to know what I'm currently listening the most? Here's my top
            tracks from Spotify
          </Paragraph>
          <TopSpotifyTracks />
        </Section>
      </Main>
    </>
  );
}
