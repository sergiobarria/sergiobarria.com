import React from 'react';

import { DefaultSeo } from 'next-seo';

import { ToastContainer } from 'react-toastify';

import { useAppTheme } from '@/hooks/useAppTheme';

import CommandPalette from '@/components/CommandPalette';
import MobileMenu from '@/components/mobile-menu/MobileMenu';

import Footer from '../components/layout-main/Footer';
import Navbar from '../components/layout-main/Navbar';
import SEO from '../../next-seo.config';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { mounted } = useAppTheme();

  if (!mounted) return null;

  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <MobileMenu />
      <CommandPalette />
      {children}
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
