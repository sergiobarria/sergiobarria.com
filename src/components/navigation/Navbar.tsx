import NextLink from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { routes } from '@/data/routes'

interface IRoute {
  id: number
  text: string
  route: string
}

export default function Navbar() {
  const router = useRouter()
  const activeRoute = router.pathname
  const currentRoute = router.asPath.split(/[/]/)

  function NavLink(routeData: IRoute) {
    const { text, route } = routeData

    const isActiveRoute =
      route === activeRoute || currentRoute.includes(text.toLowerCase())

    return (
      <NextLink href={route}>
        <a
          className={cn(
            isActiveRoute ? 'text-gray-600' : 'text-gray-400',
            ' transition-all duration-200 cursor-pointer group-hover:text-gray-600 dark:group-hover:text-gray-200'
          )}
        >
          {text}
          <div
            className={cn(
              'bg-gray-600 dark:bg-gray-200 h-[3px] transition-transform origin-left duration-200 ease-in',
              isActiveRoute
                ? 'group:scale-100 '
                : 'scale-x-0 group-hover:scale-100 '
            )}
          />
        </a>
      </NextLink>
    )
  }

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center">
        {routes.map(route => (
          <li key={route.id} className="mr-6 group">
            <NavLink {...route} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
