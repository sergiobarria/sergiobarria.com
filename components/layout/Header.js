import NextImage from 'next/image';

import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => (
  <header className="absolute top-0 left-0 right-0 z-10 w-full p-8 bg-transparent bg-gray-900 md:p-0 h-28">
    <div className="flex items-center justify-between max-w-screen-xl mx-auto">
      <NextImage
        src="/static/layout-assets/logo-web-orange.svg"
        alt="Sergio's Website Logo"
        width={150}
        height={60}
      />
      <Navbar />
      <MobileNav />
    </div>
  </header>
);

export default Header;
