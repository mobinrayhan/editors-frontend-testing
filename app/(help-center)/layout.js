'use client'

// import node module libraries
import { Fragment } from 'react';

// import layouts
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';
import NavbarHelpCenter from 'layouts/marketing/navbars/help-center/NavbarHelpCenter';

export default function HelpCenterLayout({ children }) {
    return (
        <Fragment>
			<NavbarHelpCenter bg="white" />
			<main className='bg-white'>
				{children}
			</main>
			<FooterWithLinks />
		</Fragment>
    )
}
