'use client'

// import node module libraries
import { Fragment } from 'react';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

export default function LandingCoursesLayout({ children }) {
    return (
        <Fragment>

            {/* Default Navbar */}
            <NavbarDefault />

            <main>
                {children}
            </main>

            {/* Footer section */}
            <FooterWithLinks />

        </Fragment>
    )
}

