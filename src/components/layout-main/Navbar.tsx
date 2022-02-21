import clsx from 'clsx';

import { useSetTheme } from '@/hooks/useSetTheme';

import ThemeToggleBtn from '@/components/buttons/ThemeToggleBtn';
import Header from '@/components/layout-main/Header';
import NavLink from '@/components/links/NavLink';

import { routes } from '@/fixtures/routes';

export default function Navbar() {
  const { mounted } = useSetTheme();

  // if the application is not mounted yet return null to avoid hydration mismatch
  // because the theme will be undefined
  if (!mounted) return null;

  return (
    <Header>
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
      <div className='layout flex w-full items-center justify-end md:justify-between'>
        <nav className='hidden h-full items-center space-x-6 sm:flex'>
          {routes.map((route) => (
            <NavLink key={route.id} route={route.route} text={route.text} />
          ))}
        </nav>
        <ThemeToggleBtn />
      </div>
    </Header>
  );
}
