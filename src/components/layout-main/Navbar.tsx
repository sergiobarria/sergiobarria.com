import { useSetTheme } from '@/hooks/useSetTheme';

import Header from '@/components/layout-main/Header';
import NavLink from '@/components/NavLink';
import ThemeToggleBtn from '@/components/ThemeToggleBtn';

import { routes } from '@/fixtures/routes';

export default function Navbar() {
  const { mounted } = useSetTheme();

  // if the application is not mounted yet return null to avoid hydration mismatch
  // because the theme will be undefined
  if (!mounted) return null;

  return (
    <Header>
      {/* Skip Navigation */}
      <a href='#skip' className='skip-nav'>
        Skip to content
      </a>

      {/* Navbar */}
      <div className='content flex w-full items-center justify-end md:justify-between'>
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
