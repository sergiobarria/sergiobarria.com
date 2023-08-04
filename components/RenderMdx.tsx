import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { cn } from '@/lib/utils';

function AppLink(props: any) {
    const href = props.href;

    if (href.startsWith('/')) return <Link href={href}>{props.children}</Link>;

    if (href.startsWith('#')) return <a {...props} />;

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const calloutTypeMappings = {
    tip: {
        border: 'border-green-400',
        background: 'bg-green-400/40',
        text: 'text-green-200',
        icon: <FireIcon className="text-green-400" />,
    },
    warn: {
        border: 'border-yellow-400',
        background: 'bg-yellow-400/40',
        text: 'text-yellow-200',
        icon: <WarnIcon className="text-yellow-400" />,
    },
    error: {
        border: 'border-red-400',
        background: 'bg-red-400/40',
        text: 'text-red-200',
        icon: <DangerIcon className="text-red-400" />,
    },
    info: {
        border: 'border-blue-400',
        background: 'bg-blue-400/40',
        text: 'text-blue-200',
        icon: <InfoIcon className="text-blue-400" />,
    },
};

interface CalloutProps {
    type: keyof typeof calloutTypeMappings;
    children: React.ReactNode;
}

function Callout({ type, children }: CalloutProps) {
    const typeMapping = calloutTypeMappings[type];

    return (
        <div className={cn('border rounded-md my-8', typeMapping.border)}>
            <span
                className={cn(
                    'flex items-center gap-3 p-3',
                    typeMapping.background,
                    typeMapping.text
                )}
            >
                {typeMapping.icon}
                <span className="text-xs capitalize font-semibold">{type}</span>
            </span>
            <span className="text-xs block px-3">{children}</span>
        </div>
    );
}

// NOTE: add more custom components here 👇🏼
const components = {
    a: AppLink,
    Image: RoundedImage,
    Callout,
};

interface RenderMdxProps {
    code: string;
}

export function RenderMdx({ code }: RenderMdxProps) {
    const Component = useMDXComponent(code);

    return (
        <article className="prose prose-neutral dark:prose-invert">
            <Component components={{ ...components }} />
        </article>
    );
}

function FireIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('icon icon-tabler icon-tabler-flame w-4 h-4', className)}
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
            <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
        </svg>
    );
}

function WarnIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('icon icon-tabler icon-tabler-alert-triangle w-4 h-4', className)}
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
            <path d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    );
}

function DangerIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('icon icon-tabler icon-tabler-skull w-4 h-4', className)}
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
            <path d="M12 4c4.418 0 8 3.358 8 7.5c0 1.901 -.755 3.637 -2 4.96l0 2.54a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2.54c-1.245 -1.322 -2 -3.058 -2 -4.96c0 -4.142 3.582 -7.5 8 -7.5z" />
            <path d="M10 17v3" />
            <path d="M14 17v3" />
            <path d="M9 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M15 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </svg>
    );
}

function InfoIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('icon icon-tabler icon-tabler-info-circle w-4 h-4', className)}
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
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 9h.01" />
            <path d="M11 12h1v4h1" />
        </svg>
    );
}
