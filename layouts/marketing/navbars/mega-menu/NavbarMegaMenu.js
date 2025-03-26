'use client'

// import node module libraries
import { Fragment, useState } from 'react';
import {
	Image,
	Navbar,
	Nav,
	Container
} from 'react-bootstrap';
import Link from 'next/link';

// import sub components
import MegaMenu from './MegaMenu';
import NavMegaDropdown from './NavMegaDropdown';
import CategoriesDropDown from './CategoriesDropDown';
import DocumentMenu from '../DocumentMenu';
import DarkLightMode from '../../../DarkLightMode';

// import data files
import NavbarDefaultRoutes from 'routes/marketing/NavbarDefault';

// import app config file
import { settings } from 'app.config';

const NavbarMegaMenu = () => {
	const [expandedMenu, setExpandedMenu] = useState(false);

	return (
		<Fragment>
			<Navbar
				onToggle={(collapsed) => setExpandedMenu(collapsed)}
				expanded={expandedMenu}
				expand="lg"
				className='navbar-default'
			>
				<Container fluid className="px-0 ps-2">

					<div className="d-flex">
						<Navbar.Brand as={Link} href="/">
							<Image src={settings.theme.logo} alt={settings.app.name} />
						</Navbar.Brand>
						<CategoriesDropDown />
					</div>

					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="icon-bar top-bar mt-0"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							{NavbarDefaultRoutes.slice(1, 100).map((item, index) => {
								if (item.children === undefined) {
									return (
										<Nav.Link key={index} as={Link} href={item.link}>
											{item.menuitem}
										</Nav.Link>
									);
								} else {
									return (
										<NavMegaDropdown
											item={item}
											key={index}
											onClick={(value) => setExpandedMenu(value)}
										/>
									);
								}
							})}
							<MegaMenu />
							<DocumentMenu />
						</Nav>

						{/* Right side quick / shortcut menu  */}
						<div className="ms-auto mt-3 mt-lg-0">
							<div className="d-flex align-items-center">
								<DarkLightMode />
								<Link href="#" className="btn btn-outline-primary ms-3">Sign in</Link>
								<Link href="#" className="btn btn-primary ms-1">Sign up</Link>
							</div>
						</div>
						{/* end of right side quick / shortcut menu  */}

					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

export default NavbarMegaMenu;
