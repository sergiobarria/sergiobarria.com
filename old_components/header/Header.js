import { useState } from 'react';

import Logo from './Logo';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleMobilNav = () => {
    setShowNav(prevStatus => {
      if (prevStatus) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling when mobile nav is open
        document.body.style.overflow = 'hidden';
      }
      return !prevStatus;
    });
  };

  return (
    <header className="w-full p-4 bg-gray-900 lg:p-8 md:p-0 h-28">
      <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto">
        <Logo />
        <Navbar />
        <MobileNav showNav={showNav} toggler={toggleMobilNav} />
      </div>
    </header>
  );
};

export default Header;
