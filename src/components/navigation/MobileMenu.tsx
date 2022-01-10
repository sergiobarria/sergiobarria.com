import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import useDelayedRender from 'use-delayed-render'
import cn from 'classnames'

import styles from '@/styles/mobile-menu.module.css'

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    { enterDelay: 20, exitDelay: 300 }
  )

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        {isMenuOpen && <CrossIcon data-hide={!isMenuOpen} />}
        {!isMenuOpen && <MenuIcon data-hide={isMenuOpen} />}
      </button>

      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute top-32 bg-gray-100 dark:bg-gray-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li className="mobile-link" style={{ transitionDelay: '150ms' }}>
            <NextLink href="/">
              <a className="flex w-auto pb-4">Home</a>
            </NextLink>
          </li>
          <li className="mobile-link" style={{ transitionDelay: '200ms' }}>
            <NextLink href="/about">
              <a className="flex w-auto pb-4">About</a>
            </NextLink>
          </li>
          <li className="mobile-link" style={{ transitionDelay: '250ms' }}>
            <NextLink href="/blog">
              <a className="flex w-auto pb-4">Blog</a>
            </NextLink>
          </li>
          <li className="mobile-link" style={{ transitionDelay: '300ms' }}>
            <NextLink href="/portfolio">
              <a className="flex w-auto pb-4">Portfolio</a>
            </NextLink>
          </li>
          <li className="mobile-link" style={{ transitionDelay: '350ms' }}>
            <NextLink href="/contact">
              <a className="flex w-auto pb-4">Contact</a>
            </NextLink>
          </li>
        </ul>
      )}
    </>
  )
}

// function MenuIcon(props: JSX.IntrinsicElements['svg']) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="absolute w-6 h-6 text-gray-700 dark:text-gray-200"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       {...props}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M4 6h16M4 12h16M4 18h16"
//       />
//     </svg>
//   )
// }

// function CrossIcon(props: JSX.IntrinsicElements['svg']) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="absolute w-6 h-6 text-gray-700 dark:text-gray-200"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       {...props}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M6 18L18 6M6 6l12 12"
//       />
//     </svg>
//   )
// }

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-6 h-6 text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-6 h-6 text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}
