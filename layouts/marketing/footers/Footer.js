// import node module libraries
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Row, Col, Container } from "react-bootstrap";

const Footer = ({ bgColor = "bg-light" }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`footer ${bgColor}`}>
      <Container>
        <Row className="align-items-center g-0 border-top py-2">
          {/* Desc */}
          <Col md={6} sm={12} className="text-center text-md-start">
            <span>© {currentYear} Geeks. All Rights Reserved.</span>
          </Col>
          {/* Links */}
          <Col md={6} sm={12}>
            <nav className="nav nav-footer justify-content-center justify-content-md-end">
              <Link href="/" className="nav-link active ps-0">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="nav-link">
                Terms and conditions
              </Link>
              <Link href="/" className="nav-link">
                Feedback
              </Link>
              <Link href="/" className="nav-link">
                Support
              </Link>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Typechecking With PropTypes
Footer.propTypes = {
  bgColor: PropTypes.string,
};

export default Footer;
