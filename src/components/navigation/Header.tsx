import { RiSunFill, RiMoonFill } from 'react-icons/ri'

import Logo from '@/components/misc/Logo'
import Navbar from './Navbar'
import TogglerBtn from '@/components/misc/TogglerBtn'
import MobileMenu from './MobileMenu'

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
        <Navbar />

        <div className="flex items-center">
          <RenderThemeToggler />
          <span className="mx-2"></span>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
