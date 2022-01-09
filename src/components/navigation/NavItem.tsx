import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import cn from 'classnames'

import styles from '@/styles/nav-links.module.css'

interface IProps {
  href: string
  text: string
}

export default function NavItem({ href, text }: IProps) {
  const router = useRouter()
  const activeRoute = router.pathname
  const currentRoute = router.asPath.split(/[/]/)
  const { systemTheme, resolvedTheme } = useTheme()
  const currentTheme = resolvedTheme === 'system' ? systemTheme : resolvedTheme

  return (
    <NextLink href={href}>
      <a
        className={cn(
          href === activeRoute ||
            currentRoute.includes(text.toLocaleLowerCase())
            ? currentTheme === 'light'
              ? styles.activeLight
              : styles.activeDark
            : '',
          styles.navLink,
          styles.stroke
        )}
      >
        {text}
      </a>
    </NextLink>
  )
}
