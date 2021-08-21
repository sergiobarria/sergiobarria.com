import { useState } from 'react';
import NextLink from 'next/link';
import { FaAlignRight } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

import navLinks from '@/data/navLinks';

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const onToggleNav = () => {
    setShowNav(status => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="flex items-center justify-center w-10 h-10 text-2xl bg-gray-200 rounded text-main dark:bg-gray-800 focus:outline-none"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        {showNav ? <CgClose /> : <FaAlignRight />}
      </button>

      <div
        className={`fixed w-full h-full top-28 right-0 bg-main dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-500 ${
          showNav ? 'translate-x-0' : 'translate-y-full'
        }`}
      >
        <aside className="fixed z-20 w-full h-full px-6 mt-16 divide-y ">
          {navLinks.map(link => (
            <div key={link.id} className="relative px-12 pt-10 pb-2 ">
              <span className="mr-4 text-6xl text-white opacity-50 font-londrina">
                {link.id}
              </span>
              <NextLink href={link.url} onClick={onToggleNav}>
                <a className="text-2xl font-semibold tracking-widest text-white uppercase dark:text-gray-100">
                  {link.text}
                </a>
              </NextLink>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default MobileNav;
