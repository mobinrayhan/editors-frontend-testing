"use client";

// import node module libraries
import Link from "next/link";
import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

// import sub components
import DarkLightMode from "layouts/DarkLightMode";
import QuickMenu from "layouts/QuickMenu";

// import data files
import NavbarDefaultRoutes from "routes/marketing/NavbarDefault";

// import layouts
import DocumentMenu from "layouts/marketing/navbars/DocumentMenu";
import NavDropdownMain from "layouts/marketing/navbars/NavDropdownMain";

// import hooks
import useMounted from "hooks/useMounted";

// import app config file
import { settings } from "app.config";
import Image from "next/image";

const NavbarDefault = ({ headerstyle = "navbar-default", login = false }) => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const hasMounted = useMounted();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <Fragment>
      <Navbar
        onToggle={(collapsed) => setExpandedMenu(collapsed)}
        expanded={expandedMenu}
        expand="lg"
        className="navbar p-2 navbar-default py-2"
      >
        <Container fluid className="px-0 ps-2">
          <Navbar.Brand
            className={`d-flex  ${
              ""
              // login ? "w-lg-100" : "nav-w-80"
            }  align-items-center`}
          >
            <Link href="/" passHref legacyBehavior>
              <Image
                style={{ cursor: "pointer" }}
                src={settings.theme.logo}
                alt={settings.app.name}
                width={90}
                height={45}
              />
            </Link>
            {/* Search Form */}
            {/* <Form className="mt-3 flex-grow-1 mt-lg-0 ms-lg-3 d-none d-lg-flex align-items-center">
              <span className="position-absolute ps-3 search-icon">
                <i className="fe fe-search"></i>
              </span>
              <Form.Control
                type="Search"
                id="formSearch"
                className="ps-6"
                placeholder="Search Courses"
              />
            </Form> */}
          </Navbar.Brand>
          {hasMounted ? (
            <div
              className={`navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap ${
                login ? (isDesktop || isLaptop ? "d-none" : "d-flex") : "d-none"
              }`}
            >
              {/* small device */}
              <QuickMenu />
            </div>
          ) : null}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-lg-none">
              {NavbarDefaultRoutes.map((item, index) => {
                if (item?.children?.length === 0) {
                  return (
                    <Nav.Link
                      key={index}
                      as={Link}
                      href={item.link}
                      style={{ paddingTop: "5px" }}
                    >
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
            </Nav>
            {/* Search Form */}
            <Form className="mt-3 d-lg-none mt-lg-0 ms-lg-3 d-flex align-items-center">
              <span className="position-absolute ps-3 search-icon">
                <i className="fe fe-search"></i>
              </span>
              <Form.Control
                type="Search"
                id="formSearch"
                className="ps-6"
                placeholder="Search Courses"
              />
            </Form>
            {/* Right side quick / shortcut menu  */}

            <div className="ms-auto d-flex w-100">
              <Nav className="flex-shrink-0 w-100 navbar-nav navbar-right-wrap ms-auto d-flex align-items-center nav-top-wrap">
                {!login && (
                  <Form
                    style={{ paddingRight: "20px" }}
                    className="mt-3 flex-grow-1 mt-lg-0 d-none d-lg-flex align-items-center"
                  >
                    <span className="position-absolute ps-3 search-icon">
                      <i className="fe fe-search"></i>
                    </span>
                    <Form.Control
                      type="Search"
                      id="formSearch"
                      className="ps-6"
                      placeholder="Search Courses"
                    />
                  </Form>
                )}
                {login ? null : <DarkLightMode className="me-2" />}
                <span
                  className={
                    login
                      ? "ms-auto mt-3 mt-lg-0 d-none"
                      : "ms-auto mt-3 mt-lg-0 d-flex"
                  }
                >
                  <Nav.Link
                    href="/authentication/sign-in"
                    bsPrefix="btn"
                    className="btn btn-white  shadow-sm me-2"
                  >
                    Sign In
                  </Nav.Link>
                  <Nav.Link
                    href="/authentication/sign-up"
                    bsPrefix="btn"
                    className="btn btn-primary  shadow-sm"
                  >
                    Sign Up
                  </Nav.Link>
                </span>
                {hasMounted ? (
                  <span
                    className={`${
                      login
                        ? isDesktop || isLaptop
                          ? "d-flex flex-grow-1"
                          : "d-none"
                        : "d-none"
                    }`}
                  >
                    {/* Search Form */}
                    <Form
                      style={{ paddingRight: "20px" }}
                      className="mt-3 flex-grow-1 mt-lg-0  d-flex align-items-center"
                    >
                      <span className="position-absolute ps-3 search-icon">
                        <i className="fe fe-search"></i>
                      </span>
                      <Form.Control
                        type="Search"
                        id="formSearch"
                        className="ps-6"
                        placeholder="Search Courses"
                      />
                    </Form>
                    <Nav className="align-items-center d-flex">
                      {NavbarDefaultRoutes.map((item, index) => {
                        if (item?.children?.length === 0) {
                          return (
                            <Nav.Link
                              key={index}
                              as={Link}
                              href={item.link}
                              style={{ paddingTop: "5px" }}
                            >
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
                    </Nav>
                    <QuickMenu />
                  </span>
                ) : null}
              </Nav>
            </div>
            {/* end of right side quick / shortcut menu  */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

// Typechecking With PropTypes
NavbarDefault.propTypes = {
  headerstyle: PropTypes.string,
  login: PropTypes.bool,
};

export default NavbarDefault;
