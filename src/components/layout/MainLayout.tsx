import { ReactNode } from 'react'
// import Header from '@/components/header/Header';
// import CTA from '@/components/ui/CTA';

import Header from '@/components/navigation/Header'
import Footer from '@/components/layout/Footer'
import { IPropsWithChildren } from '@/types/interfaces'

// TODO: Add metadata to the layout

export default function MainLayout({ children }: IPropsWithChildren) {
  return (
    <div className="flex flex-col h-screen max-w-screen-md mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
