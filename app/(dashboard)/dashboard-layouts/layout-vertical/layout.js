'use client'

// import node module libraries
import React, { useState } from 'react';

// import sub components
import NavbarVertical from 'layouts/dashboard/navbars/NavbarVertical';
import NavbarTop from 'layouts/dashboard/navbars/NavbarTop';

export default function DashboardLayout({ children }) {
	const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};
	return (
		<div id="db-wrapper" className={`${showMenu ? '' : 'toggled'}`}>
			<div className="navbar-vertical navbar">
				<NavbarVertical
					showMenu={showMenu}
					onClick={(value) => setShowMenu(value)}
				/>
			</div>
			<main id="page-content">
				<header className="header">
					<NavbarTop
						data={{
							showMenu: showMenu,
							SidebarToggleMenu: ToggleMenu
						}}
					/>
				</header>
				<section className="container-fluid p-4">{children}</section>
			</main>
		</div>
	);
};

