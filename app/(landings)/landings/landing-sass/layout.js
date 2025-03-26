'use client'

// import node module libraries
import { Fragment } from 'react';

// import layouts
import NavbarLanding from 'layouts/marketing/navbars/NavbarLanding';
import FooterCenter from 'layouts/marketing/footers/FooterWithLinks';

export default function LandingSassLayout({ children }) {
    return (
        <Fragment>

            {/* Landing Page Navbar */}
            <NavbarLanding transparent />

            <main>
                {children}
            </main>

            {/* Footer with center alignment */}
            <FooterCenter />

        </Fragment>
    )
}

