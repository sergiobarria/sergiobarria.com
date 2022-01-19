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
            'text-primary dark:hover:text-white dark:text-accent',
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
        'text-primary dark:text-accent',
        'hover:text-primary/70 transition-colors',
        'border-b-[1px] border-primary border-dotted',
        'dark:hover:text-accent/70 dark:border-accent'
      )}
    ></a>
  );
}
