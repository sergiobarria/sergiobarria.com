'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { navLinks } from '@/site/site.json';

interface NavLinkProps {
    small?: boolean;
}

export function NavLinks({ small = false }: NavLinkProps) {
    const pathname = usePathname();

    return (
        <nav>
            <ul className={cn('flex items-center gap-3', !small && 'md:gap-6')}>
                {navLinks.map(link => {
                    const isActive = pathname.startsWith(link.href);

                    return (
                        <li
                            key={link.id}
                            className={cn(
                                'text-xs transform hover:-skew-y-3',
                                !small && 'md:text-sm'
                            )}
                        >
                            <Link
                                href={link.href}
                                className={cn('block custom-transition', {
                                    'text-accent-600 font-semibold': isActive,
                                    'opacity-70 hover:text-gray-500': !isActive,
                                })}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
