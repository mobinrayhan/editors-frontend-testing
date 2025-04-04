"use client";

// import node module libraries
import Link from "next/link";
import { Row, Col, Image, Card } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import widget/custom components
import { PageHeadingDescription } from "widgets";

// import required data files
import { environmentLinks } from "data/docs/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={environmentLinks}>
      <div className="docs-content mx-xxl-9">

        <PageHeadingDescription
          title="Environment Setup"
          description="To get started with Geeks UI Next.js Theme, the only requirement is a
                                Node JS other required packages like SASS, Next.js, React Bootstrap everything will be managed by theme itself."
        />

        <hr className="mb-5 mt-7" />


        <Row>
          <Col md={12} xs={12}>
            <div className="mb-8">
              <h2 className="fw-semibold">Modern development toolset.</h2>
              <p className="mb-0">
                Below are the core tools which we use for building a Geeks UI Next.js theme.
                For more detail of the toolset, go to their official websites.
              </p>
            </div>
            <div className="mb-8">
              <Row>
                <Col lg={6} xs={12} className="mb-4">
                  <Card className="border shadow-none mb-4 mb-lg-0">
                    <Card.Body>
                      <div className="mb-6">
                        <div className="mb-4">
                          <Image
                            src="/images/docs/nodejs.svg"
                            alt=""
                            className="avatar-md"
                          />
                        </div>
                        <h3 className="fw-semibold">Node Js </h3>
                        <p>
                          <Link href="https://nodejs.org/en/" target="_blank">
                            Node.js <i className="fe fe-external-link"></i>
                          </Link> {" "}
                          is an open-source, cross-platform, back-end JavaScript
                          runtime environment that runs on the V8 engine and executes
                          JavaScript code outside a web browser.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6} xs={12} className="mb-4">
                  <Card className="border shadow-none mb-4 mb-lg-0">
                    <Card.Body>
                      <div className="mb-6">
                        <div className="mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="40"><mask height="180" id=":r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#:r8:mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:r8:paint0_linear_408_134)"></path><rect fill="url(#:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect></g><defs><linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg>
                        </div>
                        <h3 className="fw-semibold">Next.js</h3>
                        <p>
                          <Link href="https://nextjs.org/" target="_blank">
                            Next.js <i className="fe fe-external-link"></i> {" "}
                          </Link> is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6} xs={12} className="mb-4">
                  <Card className="border shadow-none mb-4 mb-lg-0">
                    <Card.Body>
                      <div className="mb-6">
                        <div className="mb-4">
                          <Image
                            src="/images/docs/sass.svg"
                            alt=""
                            className="avatar-md"
                          />
                        </div>
                        <h3 className="fw-semibold">SASS</h3>
                        <p>
                          <Link href="https://sass-lang.com/" target="_blank">
                            Sass <i className="fe fe-external-link"></i> {" "}
                          </Link>
                          (short for syntactically awesome style sheets) is a
                          preprocessor scripting language that is interpreted or
                          compiled into Cascading Style Sheets (CSS).
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6} xs={12} className="mb-4">
                  <Card className="border shadow-none mb-4 mb-lg-0">
                    <Card.Body>
                      <div className="mb-6">
                        <div className="mb-4">
                          <Image
                            src="/images/docs/react-bootstrap.svg"
                            alt=""
                            className="avatar-md"
                          />
                        </div>
                        <h3 className="fw-semibold">React Bootstrap</h3>
                        <p>
                          <Link href="https://react-bootstrap.netlify.app/" target="_blank">
                            React Bootstrap <i className="fe fe-external-link"></i> {" "}
                          </Link> replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </DocsInnerLayout>
  );
};

export default Index;
