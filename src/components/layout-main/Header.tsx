import { useEffect, useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';
import { FiMoon, FiSun } from 'react-icons/fi';

import useSetTheme from '@/hooks/useSetTheme';

import MobileMenu from '../MobileMenu';

interface IRoute {
  text: string;
  route: string;
}

export default function Header() {
  const [onTop, setOnTop] = useState<boolean>(true);
  const { mounted, currentTheme, setTheme } = useSetTheme();
  const router = useRouter();
  const activeRoute = router.pathname;
  const currentRoute = router.asPath.split(/[/]/);

  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // if the application is not mounted yet return null to avoid hydration mismatch
  // because the theme will be undefined
  if (!mounted) return null;

  function NavLink({ route, text }: IRoute) {
    const isActive =
      route === activeRoute || currentRoute.includes(text.toLowerCase());

    return (
      <NextLink href={route}>
        <a
          className={clsx(
            isActive
              ? 'text-gray-darker dark:text-gray-light font-semibold'
              : 'text-gray-lighter animated-underline',
            'hidden md:block mr-6 transition-all duration-300 ease-in-out'
          )}
        >
          {text}
        </a>
      </NextLink>
    );
  }

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-shadow',
        !onTop && 'shadow-sm bg-gray-50 dark:bg-gray-900'
      )}
    >
      {/* Skip Navigation */}
      <a href='#skip' className='skip-nav'>
        Skip to content
      </a>

      {/* Navbar */}
      <nav className='flex items-center justify-end py-6 md:justify-between layout'>
        <div className='flex items-center'>
          <NavLink route='/' text='Home' />
          <NavLink route='/about' text='About' />
          <NavLink route='/blog' text='Blog' />
          <NavLink route='/portfolio' text='Portfolio' />
          <NavLink route='/library' text='Library' />
          <NavLink route='/contact' text='Contact' />
        </div>
        <button
          className={clsx(
            'p-2 rounded-md focus:outline-none',
            'border dark:border-gray-regular',
            'hover:text-gray-darker, hover:border-gray-darker',
            'dark:hover:border-gray-light',
            'transition-all duration-200 ease-in-out'
          )}
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
          {currentTheme === 'light' ? (
            <FiMoon
              size={20}
              className='text-gray-regular hover:text-gray-darker dark:text-gray-lighter dark:hover:text-gray-light'
            />
          ) : (
            <FiSun
              size={20}
              className='text-gray-regular hover:text-gray-darker dark:text-gray-lighter dark:hover:text-gray-light'
            />
          )}
        </button>
        <MobileMenu />
      </nav>
    </header>
  );
}
