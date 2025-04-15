"use client";
// import node module libraries
import Link from "next/link";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";

// import required routes
import MentorFooterRoutes from "routes/marketing/MentorFooterRoutes";

// import app config file
import { settings } from "app.config";

import Image from "next/image";
import useMounted from "hooks/useMounted";
import { useEffect, useState } from "react";

const FooterDark = () => {
  // const currentYear = new Date().getFullYear();
  return (
    <footer className="py-lg-8 py-5 footer">
      <Container className="container">
        <Row className="gy-4 justify-content-between">
          <Col lg={4} sm={12}>
            {/* about company */}
            <div className="d-flex flex-column gap-4">
              <div>
                <Image
                  width={50}
                  height={50}
                  src={settings.theme.footer}
                  alt={settings.app.name}
                />
              </div>
              <div>
                <p className="mb-0 text-coustom">
                  Editors Academyis a community of like-minded Connecting
                  founders and marketers with battle-hardened mentors that
                  genuinely enjoy helping people.
                </p>
              </div>
              <div className="d-flex flex-column gap-2">
                <div className="fs-3 d-flex flex-row ">CONTACT INFO</div>
                <div className="text-coustom">
                  {/* <div>+88015****** , +8802251252</div> */}
                  <Link
                    href={
                      "https://wa.me/8801324531144?text=Welcome to editors academy"
                    }
                    target="_blank"
                    style={{ color: "black" }}
                  >
                    +8801324-531144
                  </Link>
                  <div>contact@editors.academy</div>
                </div>
              </div>

              {/* social media links */}
              {/* <div className="fs-4 d-flex flex-row gap-3">
             
                <Link href="#!" className="text-reset">
                  <Instagram size={16} />{" "}
                </Link>
              
                <Link href="#!" className="text-reset">
                  <Facebook size={16} />{" "}
                </Link>
             
                <Link href="#!" className="text-reset">
                  <svg
                    className="bi bi-twitter-x"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </Link>
              
                <Link href="#!" className="text-reset">
                  <Youtube size={16} />{" "}
                </Link>
              </div> */}
            </div>
          </Col>
          {MentorFooterRoutes.map((item, index) => {
            return (
              <Col key={index} lg={2} md={3} sm={6}>
                <div className="d-flex flex-column gap-2">
                  <h5 className="fw-bold  text-uppercase mb-0">
                    {item.menuitem}
                  </h5>
                  <ListGroup
                    as="ul"
                    bsPrefix="list-unstyled"
                    className="nav nav-footer flex-column nav-x-0"
                  >
                    {item.children.map((subItem, subIndex) => {
                      return (
                        <ListGroup.Item key={subIndex} as="li" bsPrefix=" ">
                          <Link href={subItem.link} className="nav-link">
                            {subItem.menuitem}
                          </Link>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </div>
              </Col>
            );
          })}
        </Row>
        {/* <Row className="mt-lg-7 mt-5">
          <Col lg={{ span: 6, offset: 3 }} sm={12}>
            <span className="d-flex justify-content-center">
              © {currentYear} Geeks-UI Mentor. All Rights Reserved.
            </span>
          </Col>
        </Row> */}
      </Container>
    </footer>
  );
};

export default FooterDark;
