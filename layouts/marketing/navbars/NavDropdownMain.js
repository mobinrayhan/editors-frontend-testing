// import node module libraries
import Link from 'next/link';
import { Fragment } from 'react';
import { NavDropdown, Badge } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

// import hooks
import useMounted from 'hooks/useMounted';

const NavDropdownMain = (props) => {
	const hasMounted = useMounted();
	const { item, onClick, className } = props;

	const isDesktop = useMediaQuery({
		query: '(min-width: 1224px)'
	});

	const getTitle = (item) => {
		return item.badge ? (
			<Fragment>
				{item.menuitem}
				<Badge
					className="ms-1"
					bg={item.badgecolor ? item.badgecolor : 'primary'}
				>
					{item.badge}
				</Badge>
			</Fragment>
		) : (
			item.menuitem
		);
	};

	const NavbarDesktop = () => {
		return (
			<NavDropdown title={item.menuitem} show className={className}>
				{item.children.map((submenu, submenuindex) => {
					if (submenu.divider || submenu.header) {
						return submenu.divider ? (
							<NavDropdown.Divider bsPrefix="mx-3" key={submenuindex} />
						) : (
							<h4 className="dropdown-header" key={submenuindex}>
								{submenu.header_text}
							</h4>
						);
					} else {
						if (submenu.children === undefined) {
							return (
								<NavDropdown.Item
									as={Link}
									key={submenuindex}
									href={submenu.link}
									className="dropdown-item"
									onClick={(expandedMenu) => onClick(!expandedMenu)}
								>
									{getTitle(submenu)}
								</NavDropdown.Item>
							);
						} else {
							return (
								<NavDropdown
									title={getTitle(submenu)}
									key={submenuindex}
									bsPrefix="dropdown-item d-block"
									className={`dropdown-submenu dropend py-0`}
									show
								>
									{submenu.children.map((submenuitem, submenuitemindex) => {
										if (submenuitem.divider || submenuitem.header) {
											return submenuitem.divider ? (
												<NavDropdown.Divider
													bsPrefix="mx-3"
													key={submenuitemindex}
												/>
											) : (
												<Fragment key={submenuitemindex}>
													<h5 className="dropdown-header text-dark">
														{submenuitem.header_text}
													</h5>
													<p className="dropdown-text mb-0 text-wrap">
														{submenuitem.description}
													</p>
												</Fragment>
											);
										} else {
											if (submenuitem.children === undefined) {
												return (
													<Fragment key={submenuitemindex}>
														{submenuitem.type === 'button' ? (
															<div className="px-3 d-grid">
																<Link href={submenuitem.link} className="btn btn-sm btn-primary text-center">
																	{submenuitem.menuitem}
																</Link>
															</div>
														) : (
															(<Link
																href={submenuitem.link}
																className="dropdown-item"
																onClick={(expandedMenu) => onClick(!expandedMenu)}>
																{getTitle(submenuitem)}
															</Link>)
														)}
													</Fragment>
												);
											} else {
												return (
													<NavDropdown
														title={getTitle(submenuitem)}
														key={submenuitemindex}
														bsPrefix="dropdown-item d-block"
														className={`dropdown-submenu dropend py-0 `}
														show
													>
														{submenuitem.children.map((submenuitem4, submenuitem4index) => {
															return (
																<NavDropdown.Item
																	as={Link}
																	href={submenuitem4.link}
																	onClick={(expandedMenu) => onClick(!expandedMenu)}
																	key={submenuitem4index}
																>
																	{/* Fourth Level menu item */}
																	{submenuitem4.menuitem}
																</NavDropdown.Item>
															)
														})
														}

													</NavDropdown>
												);
											}
										}
									})}
								</NavDropdown>
							);
						}
					}
				})}
			</NavDropdown>
		);
	}

	const NavbarMobile = () => {
		return (
			<NavDropdown title={item.menuitem}>
				{item.children.map((submenu, submenuindex) => {
					if (submenu.divider || submenu.header) {
						return submenu.divider ? (
							<NavDropdown.Divider bsPrefix="mx-3" key={submenuindex} />
						) : (
							<h4 className="dropdown-header" key={submenuindex}>
								{submenu.header_text}
							</h4>
						);
					} else {
						if (submenu.children === undefined) {
							return (
								<NavDropdown.Item
									as={Link}
									key={submenuindex}
									href={submenu.link}
									className="dropdown-item"
									onClick={(expandedMenu) => onClick(!expandedMenu)}>
									{submenu.menuitem}
								</NavDropdown.Item>
							);
						} else {
							return (
								<NavDropdown
									title={submenu.menuitem}
									key={submenuindex}
									bsPrefix="dropdown-item d-block"
									className={`dropdown-submenu dropend py-0 `}
								>
									{submenu.children.map((submenuitem, submenuitemindex) => {
										if (submenuitem.divider || submenuitem.header) {
											return submenuitem.divider ? (
												<NavDropdown.Divider
													bsPrefix="mx-3"
													key={submenuitemindex}
												/>
											) : (
												<Fragment key={submenuitemindex}>
													<h5 className="dropdown-header text-dark">
														{submenuitem.header_text}
													</h5>
													<p className="dropdown-text mb-0 text-wrap">
														{submenuitem.description}
													</p>
												</Fragment>
											);
										} else {
											return (
												<Fragment key={submenuitemindex}>
													{submenuitem.type === 'button' ? (
														<div className="px-3 d-grid">
															<Link href={submenuitem.link} className="btn btn-sm btn-primary text-center">
																{submenuitem.menuitem}
															</Link>
														</div>
													) : (
														<Link
															href={submenuitem.link}
															className='dropdown-item'
															onClick={(expandedMenu) => onClick(!expandedMenu)}>
															{submenuitem.menuitem}
														</Link>
													)}
												</Fragment>
											);
										}
									})}
								</NavDropdown>
							);
						}
					}
				})}
			</NavDropdown>
		);
	}
	return (		
		 <Fragment>
			{/* There is only one setting between NavbarDesktop and NavbarMobile component i.e. show property used with <NavDropdown show> tag */}
		 { hasMounted && isDesktop ? <NavbarDesktop /> : <NavbarMobile />}
	 </Fragment>


	);
};
export default NavDropdownMain;
