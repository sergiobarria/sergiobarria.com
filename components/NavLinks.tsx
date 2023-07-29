'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface NavLinkProps {
    links: {
        id: number;
        label: string;
        href: string;
        isHeader: boolean;
    }[];
    small?: boolean;
    underline?: boolean;
}

export function NavLinks({ small = false, underline = false, links }: NavLinkProps) {
    const pathname = usePathname();

    return (
        <nav>
            <ul className={cn('flex items-center gap-5', !small && 'md:gap-6')}>
                {links.map(link => {
                    const isActive = pathname === link.href;

                    return (
                        <li key={link.id}>
                            <Link
                                href={link.href}
                                className={cn(
                                    'transition-all text-neutral-200 hover:text-neutral-200 flex align-middle',
                                    !isActive && 'text-neutral-500'
                                )}
                            >
                                <span className="relative">
                                    {link.label}
                                    {isActive && underline && (
                                        // TODO: animate this underline transition 👇🏼 (using framer one or motion)
                                        <div className="absolute h-[1px] top-7 mx-[3px] inset-0 bg-neutral-600 z-[-1] bg-gradient-to-r from-transparent to-neutral-900" />
                                    )}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
