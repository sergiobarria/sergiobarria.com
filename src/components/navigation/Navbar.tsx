import NextLink from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

interface IRoute {
  text: string
  route: string
}

export default function Navbar() {
  const router = useRouter()
  const activeRoute = router.pathname
  const currentRoute = router.asPath.split(/[/]/)

  function NavLink({ route, text }: IRoute) {
    const isActiveRoute =
      route === activeRoute || currentRoute.includes(text.toLowerCase())

    return (
      <NextLink href={route}>
        <a
          className={cn(
            isActiveRoute
              ? 'text-gray-600 dark:text-gray-200 font-semibold'
              : 'text-gray-400',
            'px-3 py-2 transition-all duration-200 cursor-pointer hover:text-gray-600 dark:hover:text-gray-200'
          )}
        >
          {text}
        </a>
      </NextLink>
    )
  }

  return (
    <nav className="items-center hidden mr-4 md:flex">
      <NavLink route="/" text="Home" />
      <NavLink route="/about" text="About" />
      <NavLink route="/blog" text="Blog" />
      <NavLink route="/portfolio" text="Portfolio" />
      <NavLink route="/contact" text="Contact" />
    </nav>
  )
}
