"use client";

// import node module libraries
import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";

// import required data files
import { changelogLinks } from "data/docs/SidebarContentLinks";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import widget/custom components
import { PageHeadingDescription } from "widgets";

const ChangeLog = () => {
  return (
    <DocsInnerLayout links={changelogLinks} id="intro">
      <div className="docs-content mx-xxl-9">
        <PageHeadingDescription
          title="Changelog"
          description="We’re constantly improving & updating Geeks. See the latest features and improvements."
        />

        <div id="v300"></div>
        <hr className="mb-5 mt-5" />

        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={12} xs={12}>
                    <Row className="docs-example">
                      <Col lg={4} xs={12}>
                        <div id="v320">
                          <h4 className="mb-3 fw-semibold">
                            <code>v3.0.0</code>- Nov 11, 2024
                          </h4>
                        </div>
                      </Col>
                      <Col md={8} xs={12}>
                        <div className="mb-3">
                          <h3 className="mb-2">
                            Converted Geeks Nextjs page router to app router{" "}
                          </h3>
                          <p>
                            Geeks Nextjs (app router) is a fully responsive and
                            yet modern premium bootstrap template. Geeks design
                            is suited for the academy and online courses
                            marketplace with the admin dashboard. For all
                            previous changelog are applicable as per Geeks
                            Nextjs (page router).{" "}
                            <Link
                              href="https://geeks-nextjs.vercel.app/dashboard/changelog"
                              target="_blank"
                            >
                              Click here <i className="fe fe-external-link"></i>
                            </Link>{" "}
                            to check previous updates which were implemented on
                            page router, now the same will be availalbe in Geeks
                            Nextjs ( app router).
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </DocsInnerLayout>
  );
};

export default ChangeLog;
