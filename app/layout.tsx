import './globals.css';
import type { Metadata } from 'next';
import { Readex_Pro } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { Header, Footer } from '@/components';
import { cn } from '@/lib/utils';

import site from '@/site/site.json';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: site.title,
    description: site.description,
};

// 👇🏼 This is the app's entry point. It is not a page, but a layout that wraps all pages. 👇🏼
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={cn('text-zinc-50 bg-[#111010]', readexPro.className)}>
            <head>
                {/* favicon */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />

                {/* TODO: finish head metadata 👇🏼 */}
            </head>
            <body className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 mt-8 md:mx-auto">
                <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <Header />
                    <main className="mb-10">{children}</main>
                    <Footer />
                    <Analytics />
                </div>
            </body>
        </html>
    );
}
