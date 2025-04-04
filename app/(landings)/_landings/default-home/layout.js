'use client'

// import node module libraries
import { Fragment, useEffect } from 'react';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

export default function DefaultHomeLayout({ children }) {
    useEffect(() => {
        document.body.className = 'bg-light';
    });
    return (
        <Fragment>

            {/* Default Navbar */}
            <NavbarDefault login />

            <main>
                {children}
            </main>

            {/* Footer section */}
            <Footer bgColor="bg-light" />

        </Fragment>
    )
}

