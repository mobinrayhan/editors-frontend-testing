"use client";
// import node module libraries
import React, { Fragment } from "react";
import {
  Col,
  Row,
  Container,
  Nav,
  Card,
  Tab,
  ListGroup,
} from "react-bootstrap";
import Link from "next/link";

// import popup youtube video
// import ModalVideo from "react-modal-video";

// import widget/custom components
// import {
//   GKAccordionDefault,
//   Ratings,
//   CourseCard,
//   GKTippy,
//   InstructorProfileSummaryCard,
// } from "widgets";

// import sub components
import DescriptionTab from "./components/DescriptionTab";
import ReviewsTab from "./components/ReviewsTab";
import TranscriptTab from "./components/TranscriptTab";
import FAQTab from "./components/FAQTab";

// import data files
import { CourseIndex } from "data/courses/CourseIndexData";
import { AllCoursesData } from "data/slider/AllCoursesData";
import GKAccordionDefault from "widgets/accordions/GKAccordionDefault";
import InstructorProfileSummaryCard from "widgets/cards/InstructorProfileSummaryCard";
import GKTippy from "widgets/tooltips/GKTippy";
import CourseCard from "shared/card/CourseCard";
import Ratings from "widgets/ratings/Ratings";

const CourseSingle = async () => {
  // const [isOpen, setOpen] = useState(false);
  // const [YouTubeURL] = useState("JRzWRZahOVU");
  const profileData = {
    id: 1,
    name: "Jenny Wilson",
    image: "/images/avatar/avatar-1.jpg",
    designation: "Front-end Developer, Designer",
    rating: 4.5,
    reviews: 12230,
    students: 11604,
    courses: 32,
    verified: true,
    link: "/marketing/instructor/profile",
    about:
      "I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.",
  };
  return (
    <Fragment>
      {/* Page header */}
      <section className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary">
        <Container>
          <Row className="align-items-center">
            <Col xl={7} lg={7} md={12} sm={12}>
              <div>
                <h1 className="text-white display-4 fw-semi-bold">
                  Getting Started with JavaScript
                </h1>
                <p className="text-white mb-6 lead">
                  JavaScript is the popular programming language which powers
                  web pages and web applications. This course will get you
                  started coding in JavaScript.
                </p>
                <div className="d-flex align-items-center">
                  <GKTippy content="Add to Bookmarks">
                    <Link
                      href="#"
                      className="bookmark text-white text-decoration-none"
                    >
                      <i className="fe fe-bookmark text-white-50 me-2"></i>{" "}
                      Bookmark
                    </Link>
                  </GKTippy>
                  <span className="text-white ms-3">
                    <i className="fe fe-user text-white-50"></i> 1200 Enrolled{" "}
                  </span>
                  <span className="ms-4">
                    <span className="text-warning">
                      <Ratings rating={4.5} />
                      <span className="text-white ms-1">(140)</span>
                    </span>
                  </span>
                  <span className="text-white ms-4 d-none d-md-block">
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#DBD8E9"
                        height="6"
                        rx="1"
                        width="2"
                        x="3"
                        y="8"
                      ></rect>
                      <rect
                        fill="#DBD8E9"
                        height="9"
                        rx="1"
                        width="2"
                        x="7"
                        y="5"
                      ></rect>
                      <rect
                        fill="#DBD8E9"
                        height="12"
                        rx="1"
                        width="2"
                        x="11"
                        y="2"
                      ></rect>
                    </svg>{" "}
                    <span className="align-middle">Intermediate</span>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Page content */}
      <section className="pb-10">
        <Container>
          <Row>
            <Col lg={8} md={12} sm={12} className="mt-n8 mb-4 mb-lg-0">
              <Tab.Container defaultActiveKey="contents">
                <Card>
                  <Nav className="nav-lb-tab">
                    {[
                      "Contents",
                      "Description",
                      "Reviews",
                      "Transcript",
                      "FAQ",
                    ].map((item, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link
                          href={`#${item.toLowerCase()}`}
                          eventKey={item.toLowerCase()}
                          className="mb-sm-3 mb-md-0"
                        >
                          {item}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Card.Body className="p-0">
                    <Tab.Content>
                      <Tab.Pane eventKey="contents" className="pb-4 pt-3 px-4">
                        {/* Course Index Accordion */}
                        <GKAccordionDefault
                          accordionItems={CourseIndex}
                          itemClass="px-0"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="description" className="pb-4 p-4">
                        {/* Description */}
                        <DescriptionTab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="reviews" className="pb-4 p-4">
                        {/* Reviews */}
                        <ReviewsTab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="transcript" className="pb-4 p-4">
                        {/* Transcript */}
                        <TranscriptTab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="faq" className="pb-4 p-4">
                        {/* FAQ */}
                        <FAQTab />
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Tab.Container>
            </Col>
            <Col lg={4} md={12} sm={12} className="mt-lg-n22">
              {/* Card */}
              <Card className="mb-3 mb-4">
                <div className="p-1">
                  <div
                    className="d-flex justify-content-center position-relative rounded py-10 border-white border rounded-3 bg-cover"
                    style={{
                      background: `url('/images/course/course-javascript.jpg')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                    }}
                  >
                    <Link
                      href="#"
                      className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none"
                      // onClick={() => setOpen(true)}
                    >
                      <i className="fe fe-play"></i>
                    </Link>
                  </div>
                </div>
                {/* video popup */}
                {/* <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId={YouTubeURL}
                  onClose={() => setOpen(false)}
                /> */}
                {/* end of video popup */}

                {/* Card body */}
                <Card.Body>
                  {/* Price single page */}
                  <div className="mb-3">
                    <span className="text-dark fw-bold h2 me-2">$600</span>
                    <del className="fs-4 text-muted">$750</del>
                  </div>
                  <div className="d-grid">
                    <Link href="#" className="btn btn-primary mb-2  ">
                      Add to Cart
                    </Link>
                    <Link
                      href="/marketing/pages/pricing/"
                      className="btn btn-outline-primary"
                    >
                      Buy now
                    </Link>
                  </div>
                </Card.Body>
              </Card>
              {/* Card */}
              <Card className="mb-4">
                {/* Card header */}
                <Card.Header>
                  <h4 className="mb-0">What’s included</h4>
                </Card.Header>
                {/* Card Body */}
                <Card.Body className="p-0">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <i className="fe fe-play-circle align-middle me-2 text-primary"></i>
                      12 hours video
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fe fe-award me-2 align-middle text-success"></i>
                      Certificate
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fe fe-calendar align-middle me-2 text-info"></i>
                      12 Article
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fe fe-video align-middle me-2 text-secondary"></i>
                      Watch Offline
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent">
                      <i className="fe fe-clock align-middle me-2 text-warning"></i>
                      Lifetime access
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              {/* Card */}
              <InstructorProfileSummaryCard data={profileData} />
            </Col>
          </Row>
          {/* Card */}
          <div className="pt-12 pb-3">
            <Row className="d-md-flex align-items-center mb-4">
              <Col lg={12} md={12} sm={12}>
                <h2 className="mb-0">Related Courses</h2>
              </Col>
            </Row>
            <Row>
              {AllCoursesData.filter(function (datasource) {
                return datasource.category === "javascript";
              })
                .slice(0, 4)
                .map((item, index) => (
                  <Col lg={3} md={6} sm={12} key={index}>
                    <CourseCard item={item} free />
                  </Col>
                ))}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default CourseSingle;
