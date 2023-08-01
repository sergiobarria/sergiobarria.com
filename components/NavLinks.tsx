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
        <nav className={cn('flex items-center gap-5', !small && 'md:gap-6')}>
            {links.map(link => (
                <Link
                    key={link.id}
                    href={link.href}
                    className={cn(
                        'transition-all hover:text-neutral-200 flex align-middle',
                        pathname.split('/')[1] === link.href.slice(1)
                            ? 'text-neutral-200'
                            : 'text-neutral-500'
                    )}
                >
                    <span className="relative">
                        {link.label}
                        {pathname === link.href && underline && (
                            <div className="absolute h-[1px] top-7 mx-[3px] inset-0 bg-neutral-600 z-[-1] bg-gradient-to-r from-transparent to-neutral-900" />
                        )}
                    </span>
                </Link>
            ))}
        </nav>
    );
}
