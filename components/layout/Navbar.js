import NextLink from 'next/link';
import { useRouter } from 'next/router';

import navLinks from '@/data/navLinks';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="items-center hidden max-w-5xl text-white md:flex bg-main h-28">
      <ul className="flex items-center mx-10 md:mx-12 lg:mx-16">
        {navLinks.map(link => (
          <li className="mr-8 uppercase last:mr-0" key={link.id}>
            <NextLink href={link.url}>
              <a
                className={`transition-all text-sm lg:text-base duration-300 ease-in-out transform pb-2  ${
                  router.pathname === link.url ||
                  router.asPath.match(/^\/?\[{1,2}\.{0,3}[a-z]+\]{1,2}$/)
                    ? 'border-b-2 border-white'
                    : 'hover:border-b'
                }`}
              >
                {link.text}
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
