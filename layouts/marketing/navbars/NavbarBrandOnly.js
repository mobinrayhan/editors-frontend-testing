// import node module libraries
import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";

// import app config file
import { settings } from "app.config";

const NavbarBrandOnly = () => {
  return (
    <Row>
      <Col xl={{ offset: 1, span: 2 }} lg={12} md={12}>
        <div className="mt-4">
          <Link href="/" passHref>
            <Image
              src={settings.theme.logo}
              alt={settings.app.name}
              className="logo-inverse"
            />
          </Link>
        </div>
      </Col>
    </Row>
  );
};
export default NavbarBrandOnly;
