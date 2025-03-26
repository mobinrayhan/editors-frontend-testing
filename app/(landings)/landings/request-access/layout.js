'use client'

// import node module libraries
import { Fragment } from 'react';

// import layouts
import NavbarLanding from 'layouts/marketing/navbars/NavbarLanding';
import FooterCenter from 'layouts/marketing/footers/FooterCenter';

export default function ReactequestAccessLayout({ children }) {
    return (
        <Fragment>

            {/* Landing Page Navbar */}
            <NavbarLanding />

            <main>
                {children}
            </main>

            {/* Footer with center alignment */}
            <FooterCenter />

        </Fragment>
    )
}

