import { ReactNode } from 'react'
// import Header from '@/components/header/Header';
// import CTA from '@/components/ui/CTA';

import NavBar from '@/components/navigation/NavBar'
import Footer from '@/components/layout/Footer'

type Props = {
  children?: ReactNode
}

// TODO: Add metadata to the layout

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen max-w-screen-md mx-auto">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
