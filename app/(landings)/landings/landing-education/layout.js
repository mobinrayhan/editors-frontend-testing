'use client'

// import node module libraries
import { Fragment } from 'react';

// import layouts
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';
import NavbarBoxCenterMenu from 'layouts/marketing/navbars/NavbarBoxCenterMenu';

export default function LandingEducationLayout({ children }) {
    return (
        <Fragment>

            {/* Landing Page Navbar */}
            <NavbarBoxCenterMenu />

            <main>
                {children}
            </main>

            {/* Footer with links */}
            <FooterWithLinks />

        </Fragment>
    )
}

