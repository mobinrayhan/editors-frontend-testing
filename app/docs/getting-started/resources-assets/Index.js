"use client";

// import node module libraries
import { Row, Col, Card } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import sub components
import ResourcesTable from "./components/ResourcesTable";

// import widget/custom components
import { PageHeadingDescription } from "widgets";

// import required data file
import { resourcesLinks } from "data/docs/SidebarContentLinks";
import {
  pluginResources,
  iconResources,
  imageResources,
} from "data/docs/ResourcesData";

const Index = () => {
  return (
    <DocsInnerLayout links={resourcesLinks}>
      <div className="docs-content mx-xxl-9">

        <PageHeadingDescription
          title="Resources & assets"
          description="First, let us take this opportunity to thank all the creative
                                minds for their great products and plugins."
        />

        <div id="plugins"></div>
        <hr className="mb-5 mt-7" />


        <Row>
          <Col md={12} xs={12}>
            <div className="mb-8" >
              <h2 className="fw-semibold">Plugins (libraries / packages)</h2>
              <p className="mb-3">
                The following dependencies are used with GeeksUI Next.js theme, which are required to run the template.
              </p>
              <Card>
                <Card.Body>
                  <ResourcesTable data={pluginResources} />
                </Card.Body>
              </Card>

            </div>
          </Col>
          <Col md={12} xs={12}>
            <div id="icons"></div>
            <hr className="mb-5 mt-7" />
          </Col>
          <Col md={12} xs={12}>
            <div className="mb-8" >
              <h2 className="fw-semibold">Icons</h2>
              <p className="mb-3">All of the icons we use in GeeksUI Next.js</p>
              <Card>
                <Card.Body>
                  <ResourcesTable data={iconResources} />
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={12} xs={12}>
            <div id="images"></div>
            <hr className="mb-5 mt-7" />
          </Col>
          <Col md={12} xs={12}>
            <div className="mb-8" >
              <h2 className="fw-semibold">Images</h2>
              <p className="mb-3">
                Images in GeeksUI Next.js come almost exclusively from below website
                links.
              </p>
              <Card>
                <Card.Body>
                  <ResourcesTable data={imageResources} />
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={12} xs={12}>
            <div id="figma-files"></div>
            <hr className="mb-5 mt-7" />
          </Col>
          <Col md={12} xs={12}>
            <div className="mb-8" >
              <h2 className="fw-semibold">Figma Files</h2>
              <p className="mb-3">We will provide Figma files upon request.</p>
            </div>
          </Col>
        </Row>
      </div>
    </DocsInnerLayout>
  );
};

export default Index;
