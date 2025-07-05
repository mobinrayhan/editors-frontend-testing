"use client";

// import node module libraries
import Link from "next/link";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

// import sub components
import QuickMenu from "layouts/QuickMenu";

// import data files
import NavbarDefaultRoutes from "routes/marketing/NavbarDefault";

// import layouts
import NavDropdownMain from "layouts/marketing/navbars/NavDropdownMain";

// import hooks
import useMounted from "hooks/useMounted";

// import app config file
import { settings } from "app.config";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavbarDefault = ({ sessionUser = false }) => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const pathName = usePathname();
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
        className="navbar p-2 navbar-default py-2 bg-light"
      >
        <Container fluid className="px-0 ps-2">
          <div
            className={`d-flex  ${
              ""
              // sessionUser ? "w-lg-100" : "nav-w-80"
            }  align-items-center`}
            style={{
              marginRight: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Link href="/" className="position-relative d-block">
              <Image
                src={settings.theme.logo}
                alt={"Editors Academy Logo"}
                style={{ cursor: "pointer", objectFit: "contain" }}
                height={40}
                width={150}
              />
            </Link>
          </div>
          {hasMounted ? (
            <div
              className={`navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap ${
                sessionUser
                  ? isDesktop || isLaptop
                    ? "d-none"
                    : "d-flex"
                  : "d-none"
              }`}
            >
              <QuickMenu sessionUser={sessionUser} />
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
                    <Link
                      key={index}
                      href={item.link}
                      className={`${
                        item.link === pathName ? "text-blue " : "text-dark"
                      }`}
                      style={{ paddingTop: "5px" }}
                    >
                      {item.menuitem}
                    </Link>
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
                {!sessionUser && (
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
                {!sessionUser && <QuickMenu />}
                <span
                  className={
                    sessionUser
                      ? "ms-auto mt-3 mt-lg-0 d-none"
                      : "ms-auto mt-3 mt-lg-0 d-flex"
                  }
                >
                  <Link
                    href="/authentication/sign-in"
                    className="btn btn-white  shadow-sm me-2"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/authentication/sign-up"
                    className="btn btn-primary  shadow-sm"
                  >
                    Sign Up
                  </Link>
                </span>
                {hasMounted ? (
                  <span
                    className={`${
                      sessionUser
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
                            <Link
                              key={index}
                              href={item.link}
                              style={{
                                paddingTop: "5px",
                                marginRight: "10px",
                              }}
                              className={`${
                                item.link === pathName
                                  ? "text-blue "
                                  : "text-dark"
                              }`}
                            >
                              {item.menuitem}
                            </Link>
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
                    <QuickMenu sessionUser={sessionUser} />
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
  sessionUser: PropTypes.bool,
};

export default NavbarDefault;
