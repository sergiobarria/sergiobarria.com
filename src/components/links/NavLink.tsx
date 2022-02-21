import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';

interface INavLinkProps {
  text: string;
  route: string;
}

export default function NavLink({ route, text }: INavLinkProps) {
  const router = useRouter();
  const activeRoute = router.pathname;
  const currentRoute = router.asPath.split(/[/]/);

  const isActive =
    route === activeRoute || currentRoute.includes(text.toLowerCase());

  return (
    <Link href={route}>
      <a
        className={clsx(
          isActive
            ? 'font-semibold text-primary'
            : 'text-gray-300 hover:skew-x-6 hover:text-primary'
        )}
      >
        {text}
      </a>
    </Link>
  );
}
