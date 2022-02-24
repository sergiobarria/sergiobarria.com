import React from 'react';

import { DefaultSeo } from 'next-seo';

import clsx from 'clsx';

import { useAppTheme } from '@/hooks/useAppTheme';

import MobileMenu from '@/components/mobile-menu/MobileMenu';

import Footer from './Footer';
import Navbar from './Navbar';
import SEO from '../../../next-seo.config';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { mounted } = useAppTheme();

  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <DefaultSeo {...SEO} />
      <Navbar />
      <MobileMenu />
      {mounted && (
        <main
          id='skip'
          className={clsx(
            'flex flex-col justify-center bg-gray-50',
            'px-6 dark:bg-gray-900'
          )}
        >
          {children}
        </main>
      )}
      <Footer />
    </div>
  );
}
