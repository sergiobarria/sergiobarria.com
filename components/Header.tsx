import { NavLinks } from './NavLinks';

import site from '@/site/site.json';

export function Header() {
    const { navLinks } = site;
    const links = navLinks.filter(link => link.isHeader);

    return (
        <header className="flex justify-center mt-6 mb-16 md:justify-start">
            <NavLinks links={links} underline />
            {/* TODO: Add theme switcher here */}
        </header>
    );
}
