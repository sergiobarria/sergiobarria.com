import React from 'react';

import MobileMenu from '@/components/mobile-menu/MobileMenu';

import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <main className='mt-16'>{children}</main>
      <Footer />
    </>
  );
}
