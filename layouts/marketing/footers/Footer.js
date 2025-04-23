// import node module libraries
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Row, Col, Container } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Tiktok,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";

const Footer = ({ bgColor = "bg-light" }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`footer ${bgColor}`}>
      <Container>
        <Row className="align-items-center g-0 border-top py-2">
          {/* Desc */}
          <Col md={6} sm={12} className="text-center text-md-start">
            <span>© {currentYear} Editors Academy. All Rights Reserved.</span>
          </Col>
          {/* Links */}
          <Col md={6} sm={12}>
            <nav className="nav nav-footer justify-content-center justify-content-md-end">
              {/* <Link href="/privacy-policy" className="nav-link active ps-0">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="nav-link">
                Terms and conditions
              </Link> */}
              {/* <Link href="/" className="nav-link">
                Feedback
              </Link> */}
              <div className="fs-4 d-flex flex-row gap-3">
                {/* Instagram */}
                {/* <Link href="#!" className="text-reset">
                  <Instagram size={16} />{" "}
                </Link> */}
                <Link
                  className="text-reset"
                  href={
                    "https://wa.me/8801324531144?text=Welcome to editors academy"
                  }
                  target="_blank"
                >
                  <Whatsapp size={16} />
                </Link>
                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/EditorsAcademy"
                  className="text-reset"
                  target="_blank"
                >
                  <Facebook size={16} />{" "}
                </Link>
                {/* Twitter */}
                {/* <Link href="#!" className="text-reset">
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
                </Link> */}
                {/* youtube */}
                <Link
                  href="https://www.youtube.com/@editorsacademyofficial"
                  className="text-reset"
                  target="_blank"
                >
                  <Youtube size={16} />{" "}
                </Link>
                {/* tiktok */}
                <Link
                  href="https://www.tiktok.com/@EditorsAcademyOfficial"
                  className="text-reset"
                  target="_blank"
                >
                  <Tiktok size={16} />{" "}
                </Link>
              </div>
              {/* <Link href="/help-center/support" className="nav-link">
                Support
              </Link> */}
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
