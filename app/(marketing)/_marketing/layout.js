'use client'

// import custom provider for redux state management.
import { Fragment } from 'react';

// import theme style scss file
import 'styles/theme.scss';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

export default function RootLayout({ children }) {
    return (
        <Fragment>
            <NavbarDefault login />
            <main>
                {children}
            </main>
            <Footer bgColor="bg-light" />
        </Fragment>

    )
}