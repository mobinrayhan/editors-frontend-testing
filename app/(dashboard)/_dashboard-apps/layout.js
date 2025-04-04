'use client'

// import node module libraries
import React, { useState } from 'react';

// import sub components
import NavbarVertical from 'layouts/dashboard/navbars/NavbarVertical';
import NavbarTop from 'layouts/dashboard/navbars/NavbarTop';

export default function ChatLayout({ children }) {
	const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};
	return (
		<section id="db-wrapper" className={`chat-layout px-0 ${showMenu ? '' : 'toggled'}`}>
			<div className="navbar-vertical navbar">
				<NavbarVertical
					showMenu={showMenu}
					onClick={(value) => setShowMenu(value)}
				/>
			</div>
			<div id="page-content">
				<div className="header">
					<NavbarTop
						data={{
							showMenu: showMenu,
							SidebarToggleMenu: ToggleMenu
						}}
					/>
				</div>
				<div className="container-fluid p-0">{children}</div>
			</div>
		</section>
	);
};

