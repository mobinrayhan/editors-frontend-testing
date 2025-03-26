// import node module libraries
import { Fragment } from 'react';
import { Badge, Dropdown} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

// import data files
import NavbarDefaultRoutes from 'routes/marketing/NavbarDefault';

// import hooks
import useMounted from 'hooks/useMounted';

const CategoriesDropDown = () => {
    const hasMounted = useMounted();
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const getTitle = (item) => {
        return item.badge ? (
            <Link href={item.link} className="dropdown-item">
                {item.menuitem}
                <Badge
                    className="ms-1"
                    bg={item.badgecolor ? item.badgecolor : 'primary'}
                >
                    {item.badge}
                </Badge>
            </Link>
        ) : (
            <Link href={item.link} className="dropdown-item">{item.menuitem}</Link>
        );
    };


    const NavbarDesktop = () => {
        return (
            <Fragment>
                {NavbarDefaultRoutes.slice(0, 1).map((item, index) => {
                    return (
                        <Dropdown key={index} >
                            <Dropdown.Toggle variant="light-primary"
                                className="text-primary" id="category-dropdown-menu-button-mobile">
                                <i className="fe fe-list me-1 align-middle "></i> Category
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul" show>
                                {item.children.map((submenu, submenuindex) => {
                                    if (submenu.children === undefined) {
                                        return (
                                            <Dropdown.Item as="li" key={submenuindex} bsPrefix=" ">
                                                {/* <Link href={submenu.link} className="dropdown-item">  */}
                                                {getTitle(submenu)}
                                                {/* </Link> */}
                                            </Dropdown.Item>
                                        );
                                    }

                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    );
                })}
            </Fragment>
        )
    }
    const NavbarMobile = () => {
        return (
            <Fragment>
                {NavbarDefaultRoutes.slice(0, 1).map((item, index) => {
                    return (
                        <Dropdown key={index} >
                            <Dropdown.Toggle variant="light-primary"
                                className="text-primary" id="category-dropdown-menu-button-mobile">
                                <i className="fe fe-list me-1 align-middle "></i> Category
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul">
                                {item.children.map((submenu, submenuindex) => {
                                    if (submenu.children === undefined) {
                                        return (
                                            <Dropdown.Item as="li" key={submenuindex} bsPrefix=" ">
                                                {getTitle(submenu)}
                                            </Dropdown.Item>
                                        )
                                    }
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    );
                })}
            </Fragment>
        )
    }
    return (
        <Fragment>
            {/* There is only one setting between NavbarDesktop and NavbarMobile component i.e. show property used with <Dropdown.Menu show> tag */}
            {hasMounted && isDesktop ? <NavbarDesktop /> : <NavbarMobile />}
        </Fragment>
    )
}

export default CategoriesDropDown