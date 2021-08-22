import NextLink from 'next/link';
import { useRouter } from 'next/router';

import navLinks from '@/data/navLinks';

const Navbar = () => {
  const router = useRouter();
  const activeRoute = router.pathname;
  const { asPath } = router;
  const currentRoute = asPath.split(/[/]/);

  return (
    <nav className="items-center hidden max-w-5xl text-white md:flex h-28">
      <ul className="flex items-center ">
        {navLinks.map(link => (
          <li
            className={`md:mr-4 lg:mr-8 last:mr-0 hover:-skew-y-2 ${
              link.url === activeRoute ||
              currentRoute.includes(link.text.toLocaleLowerCase())
                ? '-skew-y-6'
                : ''
            }`}
            key={link.id}
          >
            <NextLink href={link.url}>
              <a
                className={`transition-all px-4 py-2 text-sm lg:text-base duration-300 ease-in-out transform pb-2  ${
                  link.url === activeRoute ||
                  currentRoute.includes(link.text.toLocaleLowerCase())
                    ? 'bg-main'
                    : 'hover:text-main '
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
