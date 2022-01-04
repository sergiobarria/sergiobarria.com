import NextLink from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

type Props = {
  href: string
  text: string
}

export default function NavItem({ href, text }: Props) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all hover:scale-105'
        )}
      >
        {text}
      </a>
    </NextLink>
  )
}
