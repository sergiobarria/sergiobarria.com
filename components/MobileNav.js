import { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

import navLinks from '@/data/navLinks';
import CustomLink from './CustomLink';

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
    <div>
      <button
        type="button"
        className="flex items-center justify-center w-10 h-10 text-2xl text-green-600 bg-gray-200 rounded dark:bg-gray-800 focus:outline-none"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        {showNav ? <CgClose /> : <FaAlignRight />}
      </button>

      <div
        className={`fixed w-full h-full top-24 right-0 bg-gray-100 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-500 ${
          showNav ? 'translate-x-0' : 'translate-y-full'
        }`}
      >
        <nav className="fixed z-20 h-full mt-8">
          {navLinks.map(link => (
            <div key={link.id} className="px-12 py-4">
              <CustomLink
                href={link.url}
                className="text-2xl font-semibold tracking-widest text-gray-900 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.text}
              </CustomLink>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
