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
            'text-primary dark:text-primary dark:hover:text-white',
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
        'text-primary dark:text-primary',
        'transition-colors hover:text-primary/70',
        'border-b-[1px] border-dotted border-primary',
        'dark:border-primary dark:hover:text-primary/70'
      )}
    ></a>
  );
}
