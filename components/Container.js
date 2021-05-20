import NextLink from 'next/link';

// import ActiveLink from '@/components/ActiveLink';
import siteMetadata from '@/data/siteMetadata';
import Logo from '@/data/logo.svg';
import links from '@/data/navLinks';
import ThemeSwitch from '@/components/ThemeSwitch';
import Footer from '@/components/Footer';

const Container = ({ children }) => (
  <div className="max-w-3xl min-h-screen px-4 mx-auto sm:px-6 xl:max-w-4xl xl:px-0">
    <header className="flex items-center justify-between py-10">
      <div>
        <NextLink href="/" aria-label="Sergio's Blog">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden text-2xl font-semibold h6 sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </NextLink>
      </div>
      <div className="flex items-center text-base leading-5">
        <nav className="hidden sm:block">
          {links.map(link => (
            <NextLink href={link.url} key={link.id}>
              <a className="p-1 font-light text-gray-900 transition-all duration-300 ease-in-out transform sm:p-4 hover:text-green-500 dark:text-gray-100 dark:hover:text-green-500">
                {link.text}
              </a>
            </NextLink>
          ))}
        </nav>
      </div>
      <ThemeSwitch />
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Container;
