import { RiSunFill, RiMoonFill } from 'react-icons/ri'

import Logo from '@/components/misc/Logo'
import NavItem from './NavItem'
import TogglerBtn from '@/components/misc/TogglerBtn'
import MobileMenu from './MobileMenu'
import routes from '@/data/routes'
import useSetTheme from '@/hooks/useSetTheme'

export default function Header() {
  const { mounted, currentTheme, setTheme } = useSetTheme()

  function RenderThemeToggler() {
    // if the application is not mounted yet return null to avoid hydration mismatch
    // because the theme will be undefined
    if (!mounted) return null

    if (currentTheme === 'dark') {
      return (
        <TogglerBtn
          ariaLabel="Toggle Theme"
          className="toggler"
          onClickCallback={() => setTheme('light')}
        >
          <RiSunFill className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </TogglerBtn>
      )
    } else {
      return (
        <TogglerBtn
          ariaLabel="Toggle Theme"
          className="toggler"
          onClickCallback={() => setTheme('dark')}
        >
          <RiMoonFill className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </TogglerBtn>
      )
    }
  }

  return (
    <header className="flex items-center justify-between py-8">
      <Logo resolvedTheme={currentTheme} />

      <div className="flex items-center space-x-4">
        <nav>
          <ul className="flex items-center">
            {routes.map(route => (
              <NavItem key={route.id} href={route.route} text={route.text} />
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          <RenderThemeToggler />
          <span className="mx-2"></span>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
