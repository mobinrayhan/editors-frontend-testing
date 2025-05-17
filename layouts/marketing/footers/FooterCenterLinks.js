// import node module libraries
import Link from "next/link";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { Facebook, Github, Twitter } from "react-bootstrap-icons";

const FooterCenterLinks = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-5 pb-3">
      <Container>
        <Row className="justify-content-center text-center align-items-center">
          <Col xxl={6} md={12} xs={12} className="px-0">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/brand/logo/logo.svg"
                  alt="Geeks"
                  className="mb-4 logo-inverse"
                />
              </Link>
              <p className="lead">
                Geek is feature rich components and beautifully Bootstrap 5
                template for developers, built with bootstrap responsive
                framework.
              </p>
            </div>

            <Nav className="nav-footer justify-content-center">
              <Link href="#" className="nav-link">
                About
              </Link>
              <span className="my-2 vr opacity-50"></span>
              <Link href="#" className="nav-link">
                Careers
              </Link>
              <span className="my-2 vr opacity-50"></span>
              <Link href="#" className="nav-link">
                Contact
              </Link>
              <span className="my-2 vr opacity-50"></span>
              <Link href="#" className="nav-link">
                Pricing
              </Link>
              <span className="my-2 vr opacity-50"></span>
              <Link href="#" className="nav-link">
                Blog
              </Link>
              <span className="my-2 vr opacity-50"></span>
              <Link href="#" className="nav-link">
                Affilliate
              </Link>
              <span className="my-2 vr opacity-50"></span>
              <Link href="#" className="nav-link">
                Help
              </Link>
              <span className="my-2 vr opacity-50"></span>
              <Link href="#" className="nav-link">
                Investors
              </Link>
              <span className="my-2 vr opacity-50"></span>
            </Nav>
          </Col>
        </Row>
        <hr className="mt-6 mb-3" />
        <Row className="align-items-center">
          <Col lg={3} md={6} xs={12}>
            <span>© {currentYear} Geeks-UI, Inc. All Rights Reserved</span>
          </Col>
          <Col
            lg={7}
            md={6}
            xs={12}
            className="d-lg-flex justify-content-center"
          >
            <nav className="nav nav-footer">
              <a className="nav-link ps-0" href="#">
                Privacy Policy
              </a>
              <a className="nav-link px-2 px-md-0" href="#">
                Cookie Notice
              </a>

              <a className="nav-link" href="#">
                Terms of Use
              </a>
            </nav>
          </Col>
          <Col lg={2} md={12} xs={12} className="d-lg-flex justify-content-end">
            <div>
              <Link href="/" className="text-primary me-3  ">
                <Facebook size={16} />
              </Link>
              <Link href="/" className="text-primary me-3  ">
                <Twitter size={16} />
              </Link>
              <Link href="/" className="text-primary">
                <Github size={16} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default FooterCenterLinks;
