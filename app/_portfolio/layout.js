'use client'

// import node module libraries
import { Fragment, useEffect } from 'react';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

export default function PortfolioPagesLayout({ children }) {

    useEffect(() => {
        document.body.className = 'bg-white';
    });

    return (
        <Fragment>

            {/* Default Navbar */}
            <NavbarDefault login />

            <main>
                {children}
            </main>

            {/* Footer with links */}
            <FooterWithLinks />

        </Fragment>
    )
}

