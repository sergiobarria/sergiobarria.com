import NextImage from 'next/image';

import Navbar from './Navbar';

const Header = () => (
  <header className="absolute top-0 left-0 right-0 z-10 w-full bg-gray-900 h-28">
    <div className="flex items-center justify-between max-w-screen-xl mx-auto">
      <NextImage
        src="/static/layout-assets/logo-white.svg"
        width={150}
        height={75}
      />
      <Navbar />
    </div>
  </header>
);

export default Header;
