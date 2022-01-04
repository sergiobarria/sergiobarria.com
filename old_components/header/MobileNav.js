import NextLink from 'next/link';
import { FaAlignRight } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

import navLinks from '@/data/navLinks';

const MobileNav = ({ showNav, toggler }) => (
  <div className="md:hidden">
    <button
      type="button"
      className="flex items-center justify-center w-10 h-10 text-2xl bg-gray-200 rounded text-main dark:bg-gray-800 focus:outline-none"
      aria-label="Toggle Menu"
      onClick={toggler}
    >
      {showNav ? <CgClose /> : <FaAlignRight />}
    </button>

    <div
      className={`fixed left-0 top-28 right-0 bottom-0 bg-main dark:bg-gray-800 overflow-x-auto opacity-95 z-10 transform ease-in-out duration-500 ${
        showNav ? 'translate-x-0' : 'translate-y-full'
      }`}
    >
      <aside className="z-20 px-6 mt-6 divide-y">
        {navLinks.map(link => (
          <div
            key={link.id}
            className="relative px-12 pt-10 pb-2 first-of-type:pt-4 "
          >
            <span className="mr-4 text-6xl text-white opacity-50 font-londrina">
              {link.id}
            </span>
            <NextLink href={link.url}>
              <button
                type="button"
                onClick={toggler}
                className="text-2xl font-semibold tracking-widest text-white uppercase dark:text-gray-100"
              >
                {link.text}
              </button>
            </NextLink>
          </div>
        ))}
      </aside>
    </div>
  </div>
);

export default MobileNav;
