import NextImage from 'next/image';
import NextLink from 'next/link';

import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => (
  <header className="w-full p-8 bg-transparent bg-gray-900 md:p-0 h-28">
    <div className="flex items-center justify-between max-w-screen-xl mx-auto">
      <NextLink href="/">
        <a>
          <NextImage
            src="/static/layout-assets/logo-web-orange.svg"
            alt="Sergio's Website Logo"
            width={175}
            height={70}
            className="cursor-pointer"
          />
        </a>
      </NextLink>
      <Navbar />
      <MobileNav />
    </div>
  </header>
);

export default Header;
