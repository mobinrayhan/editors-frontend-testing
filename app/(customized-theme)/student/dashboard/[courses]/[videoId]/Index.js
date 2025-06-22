"use client";
// import node module libraries
import { Fragment } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import "simplebar/dist/simplebar.min.css";

import SidebarCard from "./components/SidebarCard";

export const CourseResume = ({ sections, slug, params, videoInfo = {} }) => {
  const hasVideoData = videoInfo?.otp && videoInfo?.playbackInfo;

  return (
    <Fragment>
      <main className="main-courses">
        {/* Sidebar */}
        <section className="card course-sidebar" id="courseAccordion">
          <SidebarCard sections={sections} slug={slug} params={params} />
        </section>

        {/* Main Content */}
        <section className="mt-0 course-container">
          <Container fluid>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <div className="content">
                  <div className="mt-5">
                    {/* Header */}
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h3 className="mb-0 text-truncate-line-2">
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
                              elit. Cupiditate consequatur rerum eius ad ut
                              officiis.
                            </span>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    {/* Video Player */}
                    <div
                      className="embed-responsive position-relative w-100 d-block overflow-hidden p-0"
                      style={{ height: "580px" }}
                    >
                      {hasVideoData ? (
                        <iframe
                          key={videoInfo.otp} // critical for autoplay on video change
                          src={`https://player.vdocipher.com/v2/?otp=${videoInfo.otp}&playbackInfo=${videoInfo.playbackInfo}&autoplay=1`}
                          width="100%"
                          height="100%"
                          allow="encrypted-media; autoplay"
                          allowFullScreen
                          frameBorder="0"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      ) : (
                        <div className="text-white text-center pt-5">
                          Loading video...
                        </div>
                      )}
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
