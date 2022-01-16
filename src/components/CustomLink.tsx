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
            'hover:text-primary/50',
            'transition-colors duration-200'
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
        'text-primary hover:text-white dark:text-accent dark:hover:text-white',
        'bg-gradient-to-r from-primary/30 to-primary/30 bg-no-repeat',
        '[background-position:0_88%] [background-size:100%_0.2em]',
        'hover:[background-size:100%_100%] focus:[background-size:100%_100%]',
        'motion-safe:transition-all motion-safe:duration-200',
        'dark:hover:from-primary/70 dark:hover:to-primary/70'
      )}
    ></a>
  );
}
