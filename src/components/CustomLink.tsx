import Link from 'next/link';

import clsx from 'clsx';

export default function CustomLink(props: any) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a
          {...props}
          className={clsx(
            'text-purple-500 dark:hover:text-white',
            'bg-gradient-to-r from-purple-300 to-purple-300 bg-no-repeat',
            '[background-position:0_88%] [background-size:100%_0.2em]',
            'hover:[background-size:100%_100%] focus:[background-size:100%_100%]',
            'motion-safe:transition-all motion-safe:duration-200',
            'dark:hover:from-purple-500 dark:hover:to-purple-500'
          )}
        >
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      {...props}
      className={clsx(
        'text-green-500 dark:hover:text-white',
        'bg-gradient-to-r from-green-300 to-green-300 bg-no-repeat',
        '[background-position:0_88%] [background-size:100%_0.2em]',
        'hover:[background-size:100%_100%] focus:[background-size:100%_100%]',
        'motion-safe:transition-all motion-safe:duration-200',
        'dark:hover:from-green-500 dark:hover:to-green-500'
      )}
    ></a>
  );
}
