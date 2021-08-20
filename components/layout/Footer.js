import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import navLinks from '@/data/navLinks';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-gray-900 min-h-60">
      <div className="grid items-center justify-center h-full max-w-screen-xl grid-cols-12 py-12 mx-auto gap-y-8 lg:justify-between md:px-4 xl:px-0">
        <div className="col-span-12 text-center lg:text-left lg:col-span-3">
          <NextImage
            src="/static/layout-assets/logo-web-orange.svg"
            width={150}
            height={60}
          />
          <SocialIcons height="6" width="6" isFooter />
        </div>
        <div className="col-span-12 text-gray-300 lg:col-span-6">
          <nav className="grid grid-cols-12 text-center">
            <ul className="col-span-12 space-y-4 transition-all duration-300 ease-in-out transform lg:col-span-2">
              {navLinks.slice(0, 3).map(link => (
                <li key={link.id} className="hover:scale-110 hover:skew-y-2">
                  <NextLink href={link.url}>
                    <a
                      className={`transition-all duration-300 ease-in-out transform hover:text-main ${
                        router.pathname === link.url ||
                        router.asPath.match(/^\/?\[{1,2}\.{0,3}[a-z]+\]{1,2}$/)
                          ? 'text-main'
                          : 'hover:text-main'
                      } `}
                    >
                      {link.text}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
            <ul className="col-span-12 space-y-4 transition-all duration-300 ease-in-out transform lg:col-span-2">
              {navLinks.slice(3, 6).map(link => (
                <li
                  key={link.id}
                  className="first:mt-4 lg:first:mt-0 hover:scale-110 hover:skew-y-2"
                >
                  <NextLink href={link.url}>
                    <a className="transition-all duration-300 ease-in-out transform hover:text-main">
                      {link.text}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="self-end col-span-12 text-sm text-gray-400 lg:col-span-3">
          <p className="mt-auto text-center lg:text-right">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
          <p className="mt-auto text-center lg:text-right">
            Built with{' '}
            <a
              href="https://nextjs.org/"
              className="font-medium underline text-main"
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com/"
              className="font-medium underline text-main"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
