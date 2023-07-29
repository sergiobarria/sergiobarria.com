import { NavLinks } from './NavLinks';

import site from '@/site/site.json';

export function Header() {
    const { navLinks } = site;
    const links = navLinks.filter(link => link.isHeader);

    return (
        <header className="flex justify-center mt-6 md:justify-start">
            <NavLinks links={links} underline />
        </header>
    );
}
