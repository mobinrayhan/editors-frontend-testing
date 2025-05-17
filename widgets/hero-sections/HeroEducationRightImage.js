// import node module libraries
import Link from "next/link";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

// import bootstrap icons
import { CheckCircleFill } from "react-bootstrap-icons";

const HeroEducationRightImage = ({
  headingPart1 = "Learn today’s most in-",
  headingPart2 = "demand-skills",
  description = "Classes & Courses website template to start creating your stunning website. All templates are fully customizable.",
  bulletArray = [
    "No credit card required",
    "Customer service 24/7",
    "No setup fee",
    "Cancel any time",
  ],
  buttonText = "Explore Online Courses",
  buttonLink = "#",
}) => {
  return (
    <section className="py-lg-16 py-6">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xxl={5} xl={6} lg={6} xs={12}>
            <div>
              <h1 className="display-2 fw-bold mb-3">
                {headingPart1}
                <u className="text-warning">
                  <span className="text-primary">{headingPart2}</span>
                </u>
              </h1>
              <p className="lead mb-4">{description}</p>
              <ListGroup as="ul" bsPrefix="list-unstyled" className="mb-5">
                {bulletArray.map((item, index) => {
                  return (
                    <ListGroup.Item key={index} as="li" bsPrefix="mb-2">
                      <CheckCircleFill size={12} fill="var(--geeks-success)" />
                      <span className="ms-2">{item}</span>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
              <Link href={buttonLink} className="btn btn-dark btn-lg">
                {buttonText}
              </Link>
            </div>
          </Col>
          <Col
            xxl={{ offset: 1, span: 5 }}
            xl={6}
            lg={6}
            xs={12}
            className="d-lg-flex justify-content-end"
          >
            <div className="mt-12 mt-lg-0 position-relative">
              <div className="position-absolute top-0 start-0 translate-middle  d-none d-md-block">
                <Image src="/images/svg/graphics-2.svg" alt="graphics-2" />
              </div>
              <Image
                src="/images/education/skils.jpg"
                alt="online course"
                className="img-fluid rounded-4 w-100 z-1 position-relative"
              />
              <div className="position-absolute top-100 start-100 translate-middle  d-none d-md-block">
                <Image src="/images/svg/graphics-1.svg" alt="graphics-1" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroEducationRightImage;
