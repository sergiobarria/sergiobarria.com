import NextLink from 'next/link';

import links from '@/data/navLinks';
import MobileNav from '@/components/MobileNav';
import ThemeSwitch from '@/components/ThemeSwitch';
import Footer from '@/components/Footer';

const Container = ({ children }) => (
  <div className="max-w-3xl min-h-screen px-4 mx-auto sm:px-6 xl:max-w-4xl xl:px-0">
    <header className="flex items-center justify-between py-10">
      <ThemeSwitch />

      <div className="flex items-center text-base leading-5">
        <nav className="sticky hidden sm:block">
          {links.map(link => (
            <NextLink href={link.url} key={link.id}>
              <a className="p-1 font-light text-gray-900 transition-all duration-300 ease-in-out transform sm:p-4 hover:text-green-500 dark:text-gray-100 dark:hover:text-green-500">
                {link.text}
              </a>
            </NextLink>
          ))}
        </nav>
      </div>
      <div className="sm:hidden">
        <MobileNav />
      </div>
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Container;
