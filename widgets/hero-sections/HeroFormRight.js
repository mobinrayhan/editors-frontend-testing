// import node module libraries
import Link from "next/link";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Clock, Users, Video } from "react-feather";

// import MDI icons
import { mdiFacebook, mdiGoogle, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";

// import utility file
import { numberWithCommas } from "helper/utils";

const HeroFormRight = ({
  title = "Become a Vanilla JavaScript Developer",
  description = "In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.",
  hours = 0,
  videos = 0,
  enrolled = 0,
  buttonText = "Watch Preview",
  buttonLink = "#",
}) => {
  return (
    <section className="py-md-20 py-12 bg-white ">
      <Container>
        <Row>
          <Col xl={6} lg={6} md={12}>
            <div className="mb-4 mb-xl-0 text-center text-md-start">
              {/*  Caption  */}
              <h1 className="display-2 fw-bold mb-3 ls-sm ">{title}</h1>
              <p className="mb-4 lead">{description}</p>
              {/*  List  */}
              <div className="mb-6 mb-0">
                <ListGroup bsPrefix="list-unstyled fs-4 ">
                  <ListGroup.Item bsPrefix="mb-2">
                    <span className="me-2 ">
                      <Clock size="18" className="me-1 text-warning" />
                    </span>
                    <span className="align-top">{hours} Hours</span>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix="mb-2">
                    <span className="me-2 ">
                      <Video size="18" className="me-1 text-warning" />
                    </span>
                    <span className="align-top">{videos} Videos</span>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix="mb-2">
                    <span className="me-2 ">
                      <Users size="18" className="me-1 text-warning" />
                    </span>
                    <span className="align-top">
                      {numberWithCommas(enrolled)}+ Enrolled
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <Link
                href={buttonLink}
                scroll={false}
                className="popup-youtube btn btn-success btn-lg fs-4"
              >
                {buttonText}
              </Link>
            </div>
          </Col>
          <Col xl={{ span: 5, offset: 1 }} lg={6} md={12}>
            {/*  Card  */}
            <Card style={{ zIndex: 1 }} className="smooth-shadow-md">
              {/*  Card body  */}
              <Card.Body className="p-6">
                <div className="mb-4">
                  <h1 className="mb-4 lh-1 fw-bold h2">Create Free Account</h1>
                  <Row className="mt-3 mb-5 g-2">
                    <Col
                      lg={4}
                      className="btn-group mb-2 mb-md-0"
                      role="group"
                      aria-label="socialButton"
                    >
                      <Button variant="light" className="shadow-sm">
                        <Icon
                          path={mdiGoogle}
                          size={0.6}
                          className="text-danger"
                        />{" "}
                        Google
                      </Button>
                    </Col>
                    <Col
                      lg={4}
                      className="btn-group mb-2 mb-md-0"
                      role="group"
                      aria-label="socialButton"
                    >
                      <Button variant="light" className="shadow-sm">
                        <Icon
                          path={mdiTwitter}
                          size={0.6}
                          className="text-info"
                        />{" "}
                        Twitter
                      </Button>
                    </Col>
                    <Col
                      lg={4}
                      className="btn-group"
                      role="group"
                      aria-label="socialButton"
                    >
                      <Button variant="light" className="shadow-sm">
                        <Icon
                          path={mdiFacebook}
                          size={0.6}
                          className="text-primary"
                        />{" "}
                        Facebook
                      </Button>
                    </Col>
                  </Row>
                </div>
                <div className="mb-4">
                  <div className="border-bottom"></div>
                  <div className="text-center mt-n2  lh-1">
                    <span className="bg-white px-2 fs-6">OR</span>
                  </div>
                </div>
                {/*  Form  */}
                <Form>
                  {/*  Username  */}
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Email"
                      required=""
                    />
                  </Form.Group>
                  {/*  Password  */}
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="Password"
                      required=""
                    />
                  </Form.Group>
                  {/*  Button  */}
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Start Courses for Free
                    </Button>
                  </div>
                </Form>
              </Card.Body>
              {/*  Card Footer  */}
              <Card.Footer className="px-6 py-4">
                <p className="mb-0">
                  By continuing you accept the{" "}
                  <Link href="#" className="text-inherit fw-semi-bold">
                    Terms of Use
                  </Link>
                  ,
                  <Link href="#" className="text-inherit fw-semi-bold">
                    {" "}
                    Privacy Policy
                  </Link>
                  , and{" "}
                  <Link href="#" className="text-inherit fw-semi-bold">
                    Data Policy
                  </Link>
                </p>
              </Card.Footer>
            </Card>
            {/*  Pattern  */}
            <div className="position-relative">
              <div className="position-absolute bottom-0 end-0 me-md-n3 mb-md-n6 me-lg-n4 mb-lg-n4 me-xl-n6 mb-xl-n8 d-none d-md-block ">
                <Image
                  src="/images/pattern/dots-pattern.svg"
                  alt=""
                  className="opacity-25"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HeroFormRight;
