import NextLink from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

import useSetTheme from '@/hooks/useSetTheme'
import styles from '@/styles/nav-links.module.css'

interface IProps {
  href: string
  text: string
}

export default function NavItem({ href, text }: IProps) {
  const { mounted, currentTheme, setTheme } = useSetTheme()
  const router = useRouter()
  const activeRoute = router.pathname
  const currentRoute = router.asPath.split(/[/]/)

  // This is to avoid hydration mismatch because of the theme been undefined before mount
  if (!mounted) return null

  const activeStyles =
    currentTheme === 'light' ? styles.activeLight : styles.activeDark

  return (
    <NextLink href={href}>
      <a
        className={cn(
          styles.navLink,
          href === activeRoute ||
            currentRoute.includes(text.toLocaleLowerCase())
            ? activeStyles
            : null
        )}
      >
        {text}
      </a>
    </NextLink>
  )
}
