'use client'

// import node module libraries
import { Fragment } from 'react';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

export default function HomeAcademyLayout({ children }) {
    return (
        <Fragment>

            {/* Default Navbar */}
            <NavbarDefault headerstyle="dark" />

            <main>
                {children}
            </main>

            {/* Footer section */}
            <FooterWithLinks />

        </Fragment>
    )
}

