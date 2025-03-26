'use client'

// import node module libraries
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';

// import layouts
import NavbarBrandOnly from 'layouts/marketing/navbars/NavbarBrandOnly';
import FooterWithSocialIcons from 'layouts/marketing/footers/FooterWithSocialIcons';

export default function SpecialtyLayout({ children }) {
	useEffect(() => {
		document.body.className = 'bg-white';
	});
	return (
		<main>
			<section id="db-wrapper" className="bg-white">
				<Container className="d-flex flex-column">
					<NavbarBrandOnly />
					{children}
					<FooterWithSocialIcons />
				</Container>
			</section>
		</main>

	)
}