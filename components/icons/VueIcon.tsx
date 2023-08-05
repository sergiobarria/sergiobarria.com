import { cn } from '@/lib/utils';

export function VueIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('w-6 h-6 icon icon-tabler icon-tabler-brand-vue', className)}
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16.5 4l-4.5 8l-4.5 -8" />
            <path d="M3 4l9 16l9 -16" />
        </svg>
    );
}
