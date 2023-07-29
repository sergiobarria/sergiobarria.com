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
          'transition-colors duration-200',
          isActive
            ? 'font-semibold text-gray-900 dark:text-primary'
            : 'text-gray-300 hover:text-gray-700 dark:hover:text-primary'
        )}
      >
        {text}
      </a>
    </Link>
  );
}
