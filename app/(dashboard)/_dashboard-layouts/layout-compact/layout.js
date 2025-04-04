'use client'

// import node module libraries
import { useState } from 'react';

// import sub components
import NavbarCompact from 'layouts/dashboard/navbars/NavbarCompact';
import HeaderDefault from 'layouts/dashboard/HeaderDefault';
import useMounted from 'hooks/useMounted';

export default function CompactLayout({ children }) {
	const hasMounted = useMounted();
	const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};

	return (
		<section id="db-wrapper" className={`${showMenu ? '' : 'toggled'}`}>
			<div className="navbar-vertical-compact navbar">
				{hasMounted && <NavbarCompact
					showMenu={showMenu}
					onClick={(value) => setShowMenu(value)}
				/>}
			</div>
			<div id="page-content-for-mini">
				<div className="header">
					<HeaderDefault
						data={{
							showMenu: showMenu,
							SidebarToggleMenu: ToggleMenu
						}}
					/>
				</div>
				<div className="container-fluid p-4">{children}</div>
			</div>
		</section>
	);
};
