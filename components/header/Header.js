import Logo from './Logo';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => (
  <header className="w-full p-4 bg-gray-900 lg:p-8 md:p-0 h-28">
    <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto">
      <Logo />
      <Navbar />
      <MobileNav />
    </div>
  </header>
);

export default Header;
