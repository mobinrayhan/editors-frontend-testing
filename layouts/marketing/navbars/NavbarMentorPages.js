// import node module libraries
import { Fragment, useState, } from 'react';
import Link from 'next/link';
import { Image, Navbar, Nav, Container } from 'react-bootstrap';

// import layouts
import DarkLightMode from 'layouts/DarkLightMode';
import DocumentMenu from 'layouts/marketing/navbars/DocumentMenu';
import NavDropdownMain from 'layouts/marketing/navbars/NavDropdownMain';

// import data files
import NavbarDefaultRoutes from 'routes/marketing/NavbarDefault';

// import hooks
import useMounted from 'hooks/useMounted';

// import app config file
import { settings } from 'app.config';

const NavbarMentorPages = ({ transparent = false }) => {

	const [expandedMenu, setExpandedMenu] = useState(false);
	const hasMounted = useMounted();

	return (
		<Fragment>
			<Navbar
				onToggle={(collapsed) => setExpandedMenu(collapsed)}
				expanded={expandedMenu}
				expand="lg"
				className={`navbar-default ${transparent ? 'navbar-transparent' : ''
					}`}
			>
				<Container className="px-0">
					<Navbar.Brand as={Link} href="/" className="navbar-brand">
						<Image src={settings.theme.mentorLogo} alt={settings.app.name} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="icon-bar top-bar mt-0"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</Navbar.Toggle>

					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className='ms-auto'>
							{NavbarDefaultRoutes.slice(1, 4).map((item, index) => {
								if (item.children === undefined) {
									return (
										<Nav.Link key={index} as={Link} href={item.link}>
											{item.menuitem}
										</Nav.Link>
									);
								} else if (hasMounted) {
									return (
										<NavDropdownMain
											item={item}
											key={index}
											onClick={(value) => setExpandedMenu(value)}
										/>
									);
								} else {
									return null;
								}
							})}
							{hasMounted ? <DocumentMenu /> : null}
						</Nav>
						<Nav className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
							<div className="mt-3 mt-lg-0 d-flex align-items-center">
								<DarkLightMode className="me-2" />
								<Nav.Link
									href="/authentication/sign-in/"
									bsPrefix="btn"
									className="btn btn-outline-primary me-2"
									as={Link}
								>
									Login
								</Nav.Link>
								<Nav.Link
									href="/marketing/mentor/list/"
									bsPrefix="btn"
									className="btn btn-primary"
									as={Link}
								>
									Browse all mentor
								</Nav.Link>
							</div>
						</Nav>
					</Navbar.Collapse>

				</Container>
			</Navbar>
		</Fragment>
	);
};

export default NavbarMentorPages;
