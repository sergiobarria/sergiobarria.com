import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { useTheme } from 'next-themes'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

import NavItem from './NavItem'
import TogglerBtn from '@/components/misc/TogglerBtn'
import MobileMenu from './MobileMenu'

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
      {/* <div className="relative w-24 h-24 px-4 py-6 bg-red-500"> */}
      <NextLink href="/">
        <a>
          <NextImage
            src={`/static/images/logo-${
              resolvedTheme === 'light' ? 'black' : 'white'
            }.svg`}
            // src="/static/images/logo-black copy.svg"
            width={60}
            height={60}

            // layout="fill"
            // objectFit="contain"
          />
        </a>
      </NextLink>
      {/* </div> */}

      <div className="flex items-center space-x-4">
        <nav>
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/writing" text="Writing" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/resources" text="Resources" />
        </nav>
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
