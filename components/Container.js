import { useRouter } from 'next/router';

import links from '@/data/navLinks';
import ActiveLink from '@/components/ActiveLink';
import MobileNav from '@/components/MobileNav';
import ThemeSwitch from '@/components/ThemeSwitch';
import Footer from '@/components/Footer';

const Container = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between max-w-3xl min-h-screen px-4 mx-auto sm:px-6 xl:max-w-4xl xl:px-0">
      <header className="flex items-center justify-between py-10">
        <ThemeSwitch />

        <div className="flex items-center text-base leading-5">
          <nav className="sticky hidden sm:block">
            {links.map(link => (
              <ActiveLink href={link.url} key={link.id}>
                <a
                  className={`p-1 transition-all duration-300 ease-in-out transform sm:p-4  dark:text-skin-inverted  ${
                    router.pathname === link.url ||
                    router.asPath.match(/^\/?\[{1,2}\.{0,3}[a-z]+\]{1,2}$/)
                      ? 'font-semibold text-skin-accent dark:text-skin-accent'
                      : 'font-light hover:text-skin-accent dark:hover:text-skin-accent'
                  }`}
                >
                  {link.text}
                </a>
              </ActiveLink>
            ))}
          </nav>
        </div>
        <div className="sm:hidden">
          <MobileNav />
        </div>
      </header>
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
