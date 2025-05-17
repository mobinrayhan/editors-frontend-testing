// import node module libraries
import Link from "next/link";
import React from "react";
import {
  Col,
  Container,
  Dropdown,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

// import app config file
import { settings } from "app.config";

const FooterWithLanguageSelection = () => {
  const currentYear = new Date().getFullYear();
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="dropdown-toggle text-body"
    >
      {children}
    </Link>
  ));
  CustomToggle.displayName = "CustomToggle";
  return (
    <footer className="pt-lg-10 pt-5 footer bg-white">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            {/* about company  */}
            <div className="mb-4">
              <Image
                src={settings.theme.logo}
                alt={settings.app.name}
                className="logo-inverse"
              />
              <div className="mt-4">
                <p>
                  Geek is feature-rich components and beautifully Bootstrap
                  UIKit for developers, built with bootstrap responsive
                  framework.
                </p>
                {/* social media */}
                <div className="fs-4 mt-4">
                  <Link href="#" className="text-primary me-2">
                    <Facebook size={15} />
                  </Link>
                  <Link href="#" className="text-primary me-2">
                    <Twitter size={15} />
                  </Link>
                  <Link href="#" className="text-primary ">
                    <Instagram size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 1 }} md={3} sm={6}>
            <div className="mb-4">
              {/* list */}
              <h3 className="fw-bold mb-3">Company</h3>
              <ListGroup
                as="ul"
                bsPrefix="list-unstyled"
                className="nav nav-footer flex-column nav-x-0"
              >
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    About
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    Pricing
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    Blog
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    Careers
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    Contact
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg={2} md={3} sm={6}>
            <div className="mb-4">
              {/* list  */}
              <h3 className="fw-bold mb-3">Support</h3>
              <ListGroup
                as="ul"
                bsPrefix="list-unstyled"
                className="nav nav-footer flex-column nav-x-0"
              >
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    Help and Support
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    Become Instructor
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    Get the app
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    FAQ’s
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link href="#" className="nav-link">
                    Tutorial
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            {/* contact info */}
            <div className="mb-4">
              <h3 className="fw-bold mb-3">Get in touch</h3>
              <p>339 McDermott Points Hettingerhaven, NV 15283</p>
              <p className="mb-1">
                Email: <Link href="#">support@geeksui.com</Link>
              </p>
              <p>
                Phone:{" "}
                <span className="text-dark fw-semi-bold">
                  (000) 123 456 789
                </span>
              </p>
              <div className="d-flex">
                <Link href="#">
                  <Image
                    src="/images/svg/appstore.svg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
                <Link href="#" className="ms-2">
                  <Image
                    src="/images/svg/playstore.svg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center g-0 border-top py-2 mt-6">
          {/* Desc  */}
          <Col md={10} sm={12}>
            <div className="d-lg-flex align-items-center">
              <div className="me-4">
                <span>© {currentYear} Geeks-UI, Inc. All Rights Reserved</span>
              </div>
              <div>
                <nav className="nav nav-footer">
                  <Link href="#" className="nav-link ps-0">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="nav-link px-2 px-md-3">
                    Cookie Notice
                  </Link>
                  <Link href="#" className="nav-link d-none d-lg-block">
                    Do Not Sell My Personal Information
                  </Link>
                  <Link href="#" className="nav-link">
                    Terms of Use
                  </Link>
                </nav>
              </div>
            </div>
          </Col>
          <Col md={2} sm={12} className="d-md-flex justify-content-end">
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              >
                <i className="fe fe-globe me-2 align-middle"></i>
                Language
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">
                  <span className="me-2">
                    <svg
                      fill="none"
                      height="13"
                      viewBox="0 0 16 13"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_5543_19736)">
                        <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169"></path>
                        <path
                          d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z"
                          fill="white"
                        ></path>
                        <path
                          d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
                          fill="#C8102E"
                        ></path>
                        <path
                          d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z"
                          fill="white"
                        ></path>
                        <path
                          d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z"
                          fill="#C8102E"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_5543_19736">
                          <rect
                            fill="white"
                            height="12"
                            transform="translate(0 0.5)"
                            width="16"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  English
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <span className="me-2">
                    <svg
                      fill="none"
                      height="13"
                      viewBox="0 0 16 13"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_5543_19744)">
                        <path
                          clip-rule="evenodd"
                          d="M0 0.5H16V12.5H0V0.5Z"
                          fill="white"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          clip-rule="evenodd"
                          d="M0 0.5H5.3325V12.5H0V0.5Z"
                          fill="#002654"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          clip-rule="evenodd"
                          d="M10.668 0.5H16.0005V12.5H10.668V0.5Z"
                          fill="#CE1126"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_5543_19744">
                          <rect
                            fill="white"
                            height="12"
                            transform="translate(0 0.5)"
                            width="16"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Français
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  <span className="me-2">
                    <svg
                      fill="none"
                      height="13"
                      viewBox="0 0 16 13"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_5543_19751)">
                        <path d="M0 8.5H16V12.5H0V8.5Z" fill="#FFCE00"></path>
                        <path d="M0 0.5H16V4.5H0V0.5Z" fill="black"></path>
                        <path d="M0 4.5H16V8.5H0V4.5Z" fill="#DD0000"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_5543_19751">
                          <rect
                            fill="white"
                            height="12"
                            transform="translate(0 0.5)"
                            width="16"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Deutsch
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterWithLanguageSelection;
