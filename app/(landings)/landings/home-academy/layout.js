'use client'

// import node module libraries
import { Fragment } from 'react';

// import layouts files
import NavbarMegaMenu from 'layouts/marketing/navbars/mega-menu/NavbarMegaMenu';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

export default function HomeAcademyLayout({ children }) {
    return (
        <Fragment>
            {/* Default Navbar */}
            <NavbarMegaMenu />
            <main>
                {children}
            </main>
            {/* Footer section */}
            <FooterWithLinks />
        </Fragment>
    )
}

