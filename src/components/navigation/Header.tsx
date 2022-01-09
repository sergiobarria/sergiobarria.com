import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

import Logo from '@/components/misc/Logo'
import NavItem from './NavItem'
import TogglerBtn from '@/components/misc/TogglerBtn'
import MobileMenu from './MobileMenu'
import routes from '@/data/routes'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const { systemTheme, resolvedTheme, setTheme } = useTheme()

  // After mounting on client, we have access to the theme
  useEffect(() => setMounted(true), [])

  const toggleMobileNav = () => {
    if (showMobileNav) {
      setShowMobileNav(false)
      document.body.style.overflow = ''
    } else {
      setShowMobileNav(true)
      document.body.style.overflow = 'hidden'
    }
  }

  function RenderThemeToggler() {
    if (!mounted) return null

    const currentTheme =
      resolvedTheme === 'system' ? systemTheme : resolvedTheme

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
    <div className="flex items-center justify-between py-8">
      <Logo resolvedTheme={resolvedTheme} />

      <div className="flex items-center space-x-4">
        {/* <nav className={cn(styles.navbar, styles.stroke)}> */}
        <nav>
          <ul className="flex">
            {routes.map(route => (
              <li key={route.id} className="relative">
                <NavItem href={route.route} text={route.text} />
              </li>
            ))}
          </ul>
        </nav>
        {/* <nav className={cn(styles.navbar, styles.stroke)}>
          <ul>
            <li>
              <a>Test Link</a>
            </li>
          </ul>
        </nav> */}
        <div className="flex items-center space-x-2">
          <RenderThemeToggler />
          <MobileMenu
            showMobileNav={showMobileNav}
            toggleBtn={toggleMobileNav}
          />
        </div>
      </div>
    </div>
  )
}
