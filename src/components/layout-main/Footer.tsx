import clsx from 'clsx';

import SocialIcons from '../SocialIcons';
import SpotifyCard from '../SpotifyCard';

export default function Footer() {
  return (
    <footer className='mt-auto'>
      <div className='py-8 layout border-t-[1px] border-gray-light dark:border-gray-500'>
        <div className='self-start mb-6'>
          <SpotifyCard />
        </div>
        <div className='flex flex-col items-center text-center'>
          <SocialIcons />
          <p className='flex items-center justify-center mt-4 text-sm text-gray-500 dark:text-gray-300'>
            <span>&copy; {new Date().getFullYear()}</span>
            <span className='mx-1 text-3xl'>&middot;</span>
            <span>Sergio Barria</span>
          </p>
          <p className='text-sm text-gray-500 dark:text-gray-300'>
            Built with{' '}
            <a
              href='https://nextjs.org/'
              className={clsx(
                'font-semibold transition duration-300 ease-in-out text-primary',
                'hover:text-primary/70 dark:text-gradient'
              )}
              target='_blank'
              rel='noopener noreferrer'
            >
              Next.js
            </a>
            ,{' '}
            <a
              href='https://tailwindcss.com/'
              className={clsx(
                'font-semibold transition duration-300 ease-in-out text-primary',
                'hover:text-primary/70 dark:text-gradient'
              )}
              target='_blank'
              rel='noopener noreferrer'
            >
              Tailwind CSS
            </a>
            . Content with{' '}
            <a
              href='https://mdxjs.com/'
              className={clsx(
                'font-semibold transition duration-300 ease-in-out text-primary',
                'hover:text-primary/70 dark:text-gradient'
              )}
              target='_blank'
              rel='noopener noreferrer'
            >
              MDX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
