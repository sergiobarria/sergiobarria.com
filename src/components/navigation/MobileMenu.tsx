import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { FaAlignRight } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

import TogglerBtn from '../misc/TogglerBtn'
import routes from '@/data/routes'

interface IMobileNav {
  showMobileNav: boolean
  toggleBtn: React.MouseEventHandler<HTMLButtonElement>
}

export default function MobileMenu({ showMobileNav, toggleBtn }: IMobileNav) {
  const router = useRouter()

  return (
    <div className=" md:hidden">
      <TogglerBtn
        ariaLabel="Toggle Mobile Navbar"
        onClickCallback={toggleBtn}
        className="toggler"
      >
        {showMobileNav ? (
          <CgClose className="w-5 h-5" />
        ) : (
          <FaAlignRight className="w-5 h-5" />
        )}
      </TogglerBtn>

      <div
        className={`fixed left-0 top-28 right-0 bottom-0 bg-white dark:bg-gray-800 overflow-x-auto opacity-[0.99] z-10 transform ease-in-out duration-500 ${
          showMobileNav ? 'translate-x-0' : 'translate-y-full'
        }`}
      >
        <aside className="z-20 px-6 mt-6">
          <ul className="flex flex-col">
            {routes.map(route => {
              const isActive = router.asPath === route.route

              return (
                <li
                  key={route.id}
                  className={`mobile-nav-link delay-${route.delay} ${
                    showMobileNav
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-full opacity-0'
                  } ${
                    isActive ? 'bg-gray-200 rounded-lg dark:bg-gray-700' : ''
                  }`}
                >
                  <NextLink href={route.route}>
                    <a className="flex w-auto px-2 py-4">{route.text}</a>
                  </NextLink>
                </li>
              )
            })}
          </ul>
        </aside>
      </div>
    </div>
  )
}
