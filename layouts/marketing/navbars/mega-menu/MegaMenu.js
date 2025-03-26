// import node module libraries
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavDropdown } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';

// import data files
import NavbarMegaMenuRoutes from 'routes/marketing/NavbarMegaMenuRoutes';


// import hooks
import useMounted from 'hooks/useMounted';

const MegaMenu = () => {
    const hasMounted = useMounted();
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const MegaMenuDesktop = () => {
        return (
            <div className="nav-item dropdown dropdown-fullwidth">
                <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Mega Menu
                </Link>
                <div className="dropdown-menu dropdown-menu-md" >
                    <div className="px-4 pt-2 pb-2">
                        <Row className="row">
                            <Col xs={12}>
                                <div className="lh-1 mb-5">
                                    <h3 className="mb-1">Earn a Degree</h3>
                                    <p >Breakthrough pricing on 100% online degrees designed to fit into your life.
                                    </p>
                                </div>
                            </Col>
                            {NavbarMegaMenuRoutes.map((item, index) => {
                                return (
                                    <Col lg={4} xs={12} key={index}>
                                        <div className="border-bottom pb-2 mb-3">
                                            <h5 className="mb-0">{item.menuitem}</h5>
                                        </div>
                                        {item.children.map((subitem, subindex) => {
                                            if (subitem.button) {
                                                return (
                                                    <div className="mt-4" key={subindex}>
                                                        <Link href={subitem.link}
                                                            className="btn btn-outline-primary btn-sm">{subitem.menuitem}
                                                        </Link>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div className="" key={subindex}>
                                                        <Link  href={subitem.link} >
                                                            <div className="d-flex mb-3">
                                                                <Image src={subitem.image} alt="" />
                                                                <div className="ms-2">
                                                                    <small className="text-body">{subitem.subtitle}</small>
                                                                    <h6 className="mb-0">{subitem.menuitem}</h6>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

    const MegaMenuMobile = () => {
        return (
            <NavDropdown title="Mega Menu" className="dropdown-fullwidth" id="basic-nav-dropdown">
                <NavDropdown.Item as="div" className="py-2 px-3">
                    <Row>
                        <Col lg={12} md={12} xs={12} className="lh-1 mb-1">
                            <h3 className="mb-1">Earn a Degree</h3>
                            <p className='text-wrap'>Breakthrough pricing on 100% online
                                degrees designed to fit into your life.</p>
                        </Col>
                        {NavbarMegaMenuRoutes.map((item, index) => {
                            return (
                                <Col lg={4} xs={12} key={index}>
                                    <div className="border-bottom pb-2 mb-3">
                                        <h5 className="mb-0">{item.menuitem}</h5>
                                    </div>
                                    {item.children.map((subitem, subindex) => {
                                        if (subitem.button) {
                                            return (
                                                <div className="mt-4" key={subindex}>
                                                    <Link href={subitem.link}
                                                        className="btn btn-outline-primary btn-sm mb-2">{subitem.menuitem}
                                                    </Link>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="" key={subindex}>
                                                    <Link href={subindex.link}>
                                                        <div className="d-flex mb-3">
                                                            <Image src={subitem.image} alt="" />
                                                            <div className="ms-2">
                                                                <small className="text-body">{subitem.subtitle}</small>
                                                                <h6 className="mb-0">{subitem.menuitem}</h6>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    })}

                                </Col>
                            )
                        })}
                    </Row>
                </NavDropdown.Item>
            </NavDropdown>
        )
    }

    return (
        <Fragment>
            {hasMounted && isDesktop ? <MegaMenuDesktop /> : <MegaMenuMobile />}
        </Fragment>
    )
}

export default MegaMenu;