import { NavLinks } from './NavLinks';
import { cn } from '@/lib/utils';

export function Header() {
    return (
        <header className="sticky inset-x-0 top-0 z-50 pb-3 backdrop-blur-md">
            <div
                className={cn(
                    'container flex flex-col space-y-3 items-center justify-center mx-auto max-w-screen-lg mt-6 md:mt-0',
                    'md:flex-row md:justify-between md:space-y-0 md:space-x-6 md:h-20 px-4'
                )}
            >
                <a
                    href="/"
                    className="block transition-colors duration-200 hover:cursor-pointer hover:text-accent-500"
                >
                    <p className="text-2xl duration-75 transform hover:-skew-y-3">
                        <span className="font-bold">sergio</span> barria
                        <span className="text-3xl text-accent-500">.</span>
                    </p>
                </a>
                <NavLinks />
            </div>
        </header>
    );
}
