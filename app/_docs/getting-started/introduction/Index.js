"use client";

// import node module libraries
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import widget/custom components
import { PageHeadingDescription } from "widgets";

// import required data files
import { introductionLinks } from "data/docs/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={introductionLinks} id="intro">
      <div className="docs-content mx-xxl-9">
        <PageHeadingDescription
          title="Introduction"
          description="A professional Geeks UI Next.js (app router) kit that comes with plenty of
                                ready-to-use components that will help you to build more
                                beautiful application (web app) and frontend pages."
        />

        <hr className="mb-5 mt-5" />

        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="mb-8">
              <p>
                Geeks UI Next.js theme is built with the most popular front-end
                framework{" "}
                <Link
                  href="https://react-bootstrap.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ReactJS Bootstrap <i className="fe fe-external-link"></i>
                </Link>{" "}
                with react-scripts.
              </p>
              <p>
                This doc will guide you to understand how GeeksUI-Next.js theme
                is organized, basics of how to customize, how to run, how to
                build, update, and integrate API!.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <div className="mb-8" id="setting-up">
              <h2 className="fw-semibold">Setting up local development</h2>
              <p className="mb-0">
                GeeksUI Next.js is built using modern development toolset. For
                setting up local development you need core tool i.e. Node JS.{" "}
                <Link href="/docs/getting-started/environment-setup">
                  Read More
                </Link>
              </p>
            </div>
            <div className="mb-8" id="customize-theme">
              <div className="mb-4">
                <h2 className="fw-semibold">Customize your theme</h2>
                <p className="mb-0">
                  Now that you’ve got your theme running and understand the
                  compiling process, let’s discuss the proper ways to edit and
                  customize your theme.{" "}
                  <Link href="/docs/getting-started/customize-theme">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </DocsInnerLayout>
  );
};

export default Index;
