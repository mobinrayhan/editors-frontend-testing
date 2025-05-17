// import node module libraries
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const CTAFreeTrial = ({ title, subtitle, description, btntext, btnlink }) => {
  return (
    <section className="py-14 bg-gray-200">
      <Container>
        <Row>
          <Col
            lg={{ span: 8, offset: 2 }}
            md={12}
            xs={12}
            className="text-center"
          >
            <span className="fs-4 text-warning ls-md text-uppercase fw-semi-bold">
              {subtitle}
            </span>
            {/* heading  */}
            <h2 className="display-3 mt-4 mb-3 fw-bold">{title}</h2>
            {/* para  */}
            <p className="lead px-lg- 8 mb-6">{description}.</p>
            <Link href={btnlink} className="btn btn-primary">
              {btntext}
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default CTAFreeTrial;
