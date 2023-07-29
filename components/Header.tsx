import { NavLinks } from './NavLinks';

import site from '@/site/site.json';

export function Header() {
    const { navLinks } = site;
    const links = navLinks.filter(link => link.isHeader);

    return (
        <header className="mt-6">
            <NavLinks links={links} underline />
        </header>
    );
}
