import React from 'react';

import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  const [onTop, setOnTop] = React.useState<boolean>(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 bg-gray-50 pt-8 pb-16 transition-shadow dark:bg-gray-900',
        !onTop &&
          'shadow-lg shadow-gray-200 dark:shadow-md dark:shadow-white/20',
        !onTop && 'bg-gray-50 bg-opacity-30 backdrop-blur-lg backdrop-filter'
      )}
    >
      {children}
    </header>
  );
}
