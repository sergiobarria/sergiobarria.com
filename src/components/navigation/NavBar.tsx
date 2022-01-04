import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

import NavItem from './NavItem'

export default function NavBar() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, resolvedTheme, setTheme } = useTheme()

  // After mounting on client, we have access to the theme
  useEffect(() => setMounted(true), [])

  const renderThemeToggler = () => {
    if (!mounted) return null

    const currentTheme =
      resolvedTheme === 'system' ? systemTheme : resolvedTheme

    if (currentTheme === 'dark') {
      return (
        <button
          type="button"
          className="themeToggler"
          onClick={() => setTheme('light')}
        >
          <RiSunFill className="w-5 h-5" />
        </button>
      )
    } else {
      return (
        <button
          type="button"
          className="themeToggler"
          onClick={() => setTheme('dark')}
        >
          <RiMoonFill className="w-5 h-5" />
        </button>
      )
    }
  }

  return (
    <div className="flex items-center justify-between py-8">
      <div>Logo</div>
      <nav>
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/writing" text="Writing" />
        <NavItem href="/projects" text="Projects" />
        <NavItem href="/resources" text="Resources" />
      </nav>
      {renderThemeToggler()}
    </div>
  )
}
