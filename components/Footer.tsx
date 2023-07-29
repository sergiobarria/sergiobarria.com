import { cn } from '@/lib/utils';
import { NavLinks } from './NavLinks';

import site from '@/site/site.json';

export function Footer() {
    const links = site.navLinks;

    return (
        <footer className="border-t-[0.5px] border-neutral-500/50 py-6">
            <div
                className={cn(
                    'flex flex-col px-4 text-xs text-neutral-500 text-center space-y-4',
                    'md:flex-row md:justify-between md:items-center'
                )}
            >
                <div className="flex flex-col items-center order-2 mt-4 space-y-1 md:order-1 md:mt-0 md:items-start md:space-y-2">
                    <NavLinks small links={links} />
                    <div className="md:text-start">
                        <p>&copy; Copyright {new Date().getFullYear()} - Sergio Barria</p>
                        <p className="">
                            Powered by{' '}
                            <a
                                href="https://nextjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold custom-transition hover:text-neutral-200"
                            >
                                Next.js,{' '}
                            </a>
                            <a
                                href="https://tailwindcss.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold custom-transition hover:text-neutral-200"
                            >
                                Tailwind,{' '}
                            </a>
                            and{' '}
                            <a
                                href="https://xata.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold custom-transition hover:text-neutral-200"
                            >
                                Xata
                            </a>
                        </p>
                    </div>
                </div>

                <div className="order-1 max-w-[20rem] mx-auto md:mx-0">Spotify Card</div>
            </div>
        </footer>
    );
}
