'use client'

// import node module libraries
import { Fragment } from 'react';

// import layouts
import NavbarJobPages from 'layouts/marketing/navbars/NavbarJobPages';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

export default function JobListingLayout({ children }) {
    return (
        <Fragment>
            <NavbarJobPages />
            {children}
            <FooterWithLinks />
        </Fragment>

    )
}

