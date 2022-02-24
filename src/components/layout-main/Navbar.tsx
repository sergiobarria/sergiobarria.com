import clsx from 'clsx';

import { useAppTheme } from '@/hooks/useAppTheme';

import ThemeToggleBtn from '@/components/buttons/ThemeToggleBtn';
import NavLink from '@/components/links/NavLink';

import { routes } from '@/fixtures/routes';

export default function Navbar() {
  const { mounted } = useAppTheme();

  // if the application is not mounted yet return null to avoid hydration mismatch
  // because the theme will be undefined
  if (!mounted) return null;

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
        <ThemeToggleBtn />
      </nav>
    </header>
  );
}
