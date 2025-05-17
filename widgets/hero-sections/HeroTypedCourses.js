// import node module libraries
import Link from "next/link";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";

// import MDI icons
import { mdiCheck } from "@mdi/js";
import Icon from "@mdi/react";

const HeroTypedCourses = ({
  typedBefore = "Build Better",
  typedArray = ["Skills", "Products", "Teams", "Future"],
  description = "Build skills with courses Join Geeks to watch, play, learn, make, and discover, uscipit esi viimentum laoreet non et odio.",
  bulletArray = [
    "30,000 online courses",
    "Expert instruction",
    "Lifetime access",
  ],
  buttonText1 = "View Plans",
  buttonLink1 = "/marketing/pages/pricing",
  buttonText2 = "Try for Free",
  buttonLink2 = "/authentication/sign-up",
}) => {
  return (
    <section className="py-lg-18 py-10 bg-auto bg-light hero-graphics">
      <Container>
        <Row className="justify-content-center">
          <Col xl={7} lg={7} md={12}>
            <div className="py-8 py-lg-0 text-center">
              <h1 className="display-2 fw-bold mb-3 text-primary">
                <span className="text-dark px-3 px-md-0">{typedBefore}</span>
                <span className="text-primary ms-2">
                  <Typewriter
                    words={typedArray}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="mb-6 h2 text-dark">{description}</p>
              <Link
                href={buttonLink1}
                scroll={false}
                className="btn btn-primary me-2"
              >
                {buttonText1}
              </Link>{" "}
              <Link
                href={buttonLink2}
                scroll={false}
                className="btn btn-outline-primary"
              >
                {buttonText2}
              </Link>
              <div className="mt-8 mb-0">
                <ListGroup as="ul" bsPrefix="list-inline">
                  {bulletArray.map((item, index) => {
                    return (
                      <ListGroup.Item
                        key={index}
                        as="li"
                        bsPrefix="list-inline-item text-dark fw-semi-bold lh-1 fs-4 me-3 mb-2 mb-md-0"
                      >
                        <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                          <Icon
                            path={mdiCheck}
                            size={0.7}
                            className="text-success"
                          />
                        </span>
                        <span className="align-middle">{item}</span>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HeroTypedCourses;
