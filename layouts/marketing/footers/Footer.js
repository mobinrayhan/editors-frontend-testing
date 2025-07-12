// import node module libraries
import Link from "next/link";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import MentorFooterRoutes from "routes/marketing/MentorFooterRoutes";

const Footer = ({ bgColor = "bg-light" }) => {
  const currentYear = new Date().getFullYear();
  const company = MentorFooterRoutes.find(
    (item) => item?.menuitem === "COMPANY"
  );
  return (
    <footer className={`${bgColor}`}>
      <Container>
        <Row className="align-items-center g-0  py-2">
          {/* Desc */}
          <Col
            md={6}
            sm={12}
            className="text-center text-md-start pb-4 pb-md-0"
          >
            <span>© {currentYear} Editors Academy. All Rights Reserved.</span>
          </Col>
          {/* Links */}
          <Col md={6} sm={12}>
            <nav className="nav nav-footer justify-content-center d-flex gap-md-4 gap-2  flex-wrap justify-content-md-end">
              {company?.children.map(({ id, link, menuitem }) => (
                <Link href={link} key={id} className="nav-link">
                  {menuitem}
                </Link>
              ))}
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
