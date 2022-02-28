import React from 'react';

import { DefaultSeo } from 'next-seo';

import clsx from 'clsx';
import { pick } from 'contentlayer/client';
import { allPosts } from 'contentlayer/generated';
import { ToastContainer } from 'react-toastify';

import { useAppTheme } from '@/hooks/useAppTheme';

import CommandPalette from '@/components/CommandPalette';
import MobileMenu from '@/components/mobile-menu/MobileMenu';

import Footer from './Footer';
import Navbar from './Navbar';
import SEO from '../../../next-seo.config';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const posts = allPosts.map((post) =>
    pick(post, ['_id', 'title', 'slug', 'publishedAt'])
  );
  // .sort(
  //   (a, b) =>
  //     Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  // );
  const { mounted } = useAppTheme();

  if (!mounted) return null;

  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <MobileMenu />
      <CommandPalette data={posts} />
      <main
        id='skip'
        className={clsx(
          'flex flex-col justify-center bg-gray-50',
          'px-6 dark:bg-gray-900'
        )}
      >
        {children}
      </main>
      <Footer />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        draggable={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
}
