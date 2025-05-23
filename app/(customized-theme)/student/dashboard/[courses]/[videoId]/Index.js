"use client";
// import node module libraries
import { Fragment } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import "simplebar/dist/simplebar.min.css";

import SidebarCard from "./components/SidebarCard";

export const CourseResume = ({ sections, slug, params }) => {
  return (
    <Fragment>
      <main className="main-courses">
        {/*  side */}
        <section className="card course-sidebar " id="courseAccordion">
          <SidebarCard sections={sections} slug={slug} params={params} />
        </section>
        <section className="mt-0 course-container">
          <Container fluid>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <div className="content">
                  <div className="mt-5">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h3 className=" mb-0  text-truncate-line-2">
                          Introduction
                        </h3>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Dropdown className="video-info-icon me-2">
                          <Dropdown.Toggle
                            bsPrefix=" "
                            as="a"
                            href="#"
                            variant="secondary"
                            id="dropdown-basic"
                          >
                            <i className="fe fe-help-circle text-secondary"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="p-3"
                            style={{ width: "300px" }}
                          >
                            <span>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. cupiditate consequatur rerum eius ad ut
                              officiis
                            </span>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* <ActionMenu /> */}
                      </div>
                    </div>
                    <div
                      className="embed-responsive position-relative w-100 d-block overflow-hidden p-0"
                      style={{ height: "580px" }}
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/VO_RaLa56C8?si=kFkvvs7ULsXNalLu"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen={true}
                      ></iframe>
                      {/* <GKYouTube videoId={YouTubeURL} height="700" /> */}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </Fragment>
  );
};

export default CourseResume;
