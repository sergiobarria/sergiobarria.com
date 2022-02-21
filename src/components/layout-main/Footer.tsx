import SpotifyCard from '@/components/cards/SpotifyCard';
import InlineLink from '@/components/links/InlineLink';
import SocialIcons from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className='mt-auto'>
      <div className='layout border-gray-light border-t-[1px] py-8 dark:border-gray-500'>
        <div className='mb-6 self-start'>
          <SpotifyCard />
        </div>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <SocialIcons />
          <div className='flex items-center justify-center'>
            <p className='text-sm text-gray-500'>
              <span className='text-inherit'>
                &copy; Copyright {new Date().getFullYear()}
              </span>
              <span className='text-inherit'> by Sergio Barria</span>
            </p>
          </div>
          <p className='text-sm text-gray-500'>
            Built with{' '}
            <InlineLink href='https://nextjs.org/'>Next.js</InlineLink>,{' '}
            <InlineLink href='https://tailwindcss.com/'>
              Tailwind CSS
            </InlineLink>
            . Content with{' '}
            <InlineLink href='https://mdxjs.com/'>MDX</InlineLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
