import SpotifyCard from '@/components/cards/SpotifyCard';
import ExternalLink from '@/components/links/ExternalLink';
import SocialIcons from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className='mx-auto mt-auto w-full max-w-3xl px-4 sm:px-0'>
      <div className=' border-gray-light border-t-[1px] py-8 dark:border-gray-500'>
        <div className='mb-6 self-start'>
          <SpotifyCard />
        </div>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <SocialIcons />
          <div className='flex items-center justify-center'>
            <p className='text-sm text-gray-500'>
              <span>&copy; Copyright {new Date().getFullYear()}</span>
              <span> by Sergio Barria</span>
            </p>
          </div>
          <p className='text-sm text-gray-500'>
            Built with{' '}
            <ExternalLink href='https://nextjs.org/'>Next.js</ExternalLink>,{' '}
            <ExternalLink href='https://tailwindcss.com/'>
              Tailwind CSS
            </ExternalLink>
            . Content with{' '}
            <ExternalLink href='https://mdxjs.com/'>MDX</ExternalLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
