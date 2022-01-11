import { RiSunFill, RiMoonFill } from 'react-icons/ri'

import Logo from '@/components/misc/Logo'
import Navbar from './Navbar'
// import TogglerBtn from '@/components/misc/TogglerBtn'
import MobileMenu from './MobileMenu'

import useSetTheme from '@/hooks/useSetTheme'

export default function Header() {
  const { mounted, currentTheme, setTheme } = useSetTheme()

  // if the application is not mounted yet return null to avoid hydration mismatch
  // because the theme will be undefined
  if (!mounted) return null

  return (
    <header className="flex items-center justify-between w-full py-8">
      {/* <Logo resolvedTheme={currentTheme} /> */}

      <div className="flex items-center justify-end w-full">
        <Navbar />

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="flex items-center justify-center transition-all bg-gray-200 rounded-lg w-9 h-9 dark:bg-gray-600 hover:ring-2 ring-gray-300"
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200"
            >
              {currentTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>

        {/* <RenderThemeToggler /> */}
        <MobileMenu />
      </div>
    </header>
  )
}
