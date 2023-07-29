import clsx from 'clsx';

import ThemeToggleBtn from '@/components/buttons/ThemeToggleBtn';
import NavLink from '@/components/links/NavLink';

import { routes } from '@/fixtures/routes';

import QuickSearchBtn from '../QuickSearchBtn';

export default function Navbar() {
  return (
    <header className='flex flex-col justify-center px-6'>
      {/* Skip Navigation */}
      <a
        href='#skip'
        className={clsx(
          'absolute -left-1/4 -top-8 -translate-y-12 transform px-4 py-3',
          'transition-transform duration-200 focus:top-4 focus:translate-y-3'
        )}
      >
        Skip to content
      </a>

      {/* Navbar */}
      <nav
        className={clsx(
          'mx-auto flex w-full max-w-3xl items-center justify-end py-8',
          'sm:space-x-8 sm:pb-16 md:justify-between'
        )}
      >
        <div className='hidden items-center space-x-6 sm:flex'>
          {routes.map((route) => (
            <NavLink key={route.id} route={route.route} text={route.text} />
          ))}
        </div>
        <div className='flex items-center space-x-3'>
          <QuickSearchBtn />
          <ThemeToggleBtn />
        </div>
      </nav>
    </header>
  );
}
