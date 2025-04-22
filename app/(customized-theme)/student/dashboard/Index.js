"use client";

// import node module libraries
import { Fragment, useEffect } from "react";
import { Col, Row, Nav, Tab, Card, Container, Image } from "react-bootstrap";
import Link from "next/link";

// import widget/custom components
// import { ProfileCover, CourseCard } from "widgets";
// import ProfileCover from "widgets/account-settings/ProfileCover";
import CourseCard from "shared/card/CourseCard";

// import data files
import { AllCoursesData } from "data/slider/AllCoursesData";
import ProfileCover from "widgets/headers/ProfileCover";

const StudentDashboard = () => {
  const dashboardData = {
    avatar: "/images/avatar/avatar-3.jpg",
    name: "Stella Flores",
    username: "@stellaflores",
    linkname: "Account Setting",
    link: "/student/profile",
    verified: false,
    outlinebutton: false,
    level: "Beginner",
    buttonText: "See all courses",
  };

  useEffect(() => {
    document.body.className = "bg-light";
  });

  return (
    <Fragment>
      <section className="pt-5 pb-5">
        <Container>
          {/* User info */}
          <ProfileCover dashboardData={dashboardData} />

          {/* Content */}
          <Row className="mt-0 mt-md-4">
            <Col lg={12} md={12} sm={12}>
              <Row className="mb-6">
                <Col md={12}>
                  <Tab.Container defaultActiveKey="bookmarked">
                    <Card className="bg-transparent shadow-none ">
                      <Card.Header className="border-0 p-0 bg-transparent">
                        <Nav className="nav-lb-tab">
                          <Nav.Item className="ms-0">
                            <Nav.Link
                              eventKey="bookmarked"
                              className="mb-sm-3 mb-md-0"
                            >
                              Bookmarked
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link
                              eventKey="learning"
                              className="mb-sm-3 mb-md-0"
                            >
                              Learning
                            </Nav.Link>
                          </Nav.Item>

                          {/* <Nav.Item>
														<Nav.Link
															eventKey="path"
															className="mb-sm-3 mb-md-0"
														>
															Path
														</Nav.Link>
													</Nav.Item> */}
                        </Nav>
                      </Card.Header>
                      <Card.Body className="p-0">
                        <Tab.Content>
                          <Tab.Pane
                            eventKey="bookmarked"
                            className="pb-4 p-4 ps-0 pe-0"
                          >
                            {/* bookmarked started */}
                            <Row>
                              {AllCoursesData.filter(function (datasource) {
                                return datasource;
                              })
                                .slice(0, 8)
                                .map((item, index) => (
                                  <Col lg={3} md={6} sm={12} key={index}>
                                    <CourseCard item={item} />
                                  </Col>
                                ))}
                            </Row>
                            {/* end of bookmarked */}
                          </Tab.Pane>
                          <Tab.Pane
                            eventKey="learning"
                            className="pb-4 p-4 ps-0 pe-0"
                          >
                            {/* learning courses started */}
                            <Row>
                              {AllCoursesData.filter(function (datasource) {
                                return (
                                  datasource.id === 1 ||
                                  datasource.id === 2 ||
                                  datasource.id === 3 ||
                                  datasource.id === 4
                                );
                              }).map((item, index) => (
                                <Col lg={3} md={6} sm={12} key={index}>
                                  <CourseCard item={item} showprogressbar />
                                </Col>
                              ))}
                            </Row>
                            {/* end of learning courses */}
                          </Tab.Pane>

                          <Tab.Pane
                            eventKey="path"
                            className="pb-4 p-4 ps-0 pe-0"
                          >
                            <Row className="d-flex justify-content-center text-center">
                              <Col xl={5} lg={5} md={12} xs={12}>
                                <div className="py-6">
                                  <Image
                                    src="/images/svg/path-img.svg"
                                    alt="path"
                                    className="img-fluid"
                                  />
                                  <div className="mt-4 ">
                                    <h2 className="display-4 fw-bold">
                                      Coming Soon
                                    </h2>
                                    <p className="mb-5">
                                      The designer working on our design so for
                                      now we schedule it to come soon. we
                                      release it soon for you. Thank you for
                                      watching.
                                    </p>
                                    <Link href="/" className="btn btn-primary">
                                      Back To Dashboard
                                    </Link>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Card.Body>
                    </Card>
                  </Tab.Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default StudentDashboard;
