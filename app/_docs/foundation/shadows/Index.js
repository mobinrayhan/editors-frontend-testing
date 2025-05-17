"use client";

// import node module libraries
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

// import widget/custom components
import { GKTabs, HighlightCode } from "widgets";

// import required sub components and code data
import ShadowsExamples, {
  ShadowsExamplesCode,
} from "./components/ShadowsExamples";
import SmoothShadows, { SmoothShadowsCode } from "./components/SmoothShadows";

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

const Shadows = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <div className="docs-content mx-xxl-9">
        <Row className="row">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="mb-7">
              <h1 className="mb-2 display-3 fw-bold">Shadows</h1>
              <p className="mb-0 lead">
                Add or remove shadows to elements with box-shadow utilities.
              </p>
            </div>
          </Col>
        </Row>

        {/* Shadow Examples */}

        <Row className="row">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="mb-4">
              <h2 className="fw-semibold mb-1">Example</h2>
              <p className="mb-0">
                While shadows on components are disabled by default in Bootstrap
                and can be enabled via <code>$enable-shadows</code> , you can
                also quickly add or remove a shadow with our{" "}
                <code>box-shadow</code> utility classes. Includes support for{" "}
                <code>.shadow-none</code> and three default sizes (which have
                associated variables to match).
              </p>
            </div>
            <div className="mb-8">
              <GKTabs
                tabs={[
                  {
                    id: 1,
                    tabKey: "design",
                    tabTitle: "Design",
                    tabData: <ShadowsExamples />,
                  },
                  {
                    id: 2,
                    tabKey: "code",
                    tabTitle: "Code",
                    tabData: <HighlightCode code={ShadowsExamplesCode} />,
                  },
                ]}
              />
            </div>
          </Col>
        </Row>

        {/* Smooth Shadows */}

        <Row className="row">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="mb-4">
              <h2 className="fw-semibold mb-1">Smooth Shadows</h2>
              <p className="mb-0">
                Smoother & sharper shadows with layered box-shadows. for more
                information{" "}
                <Link
                  href="https://tobiasahlin.com/blog/layered-smooth-box-shadows/"
                  target="_blank"
                >
                  <i className="fe fe-external-link"></i>
                </Link>
              </p>
            </div>
            <div>
              <GKTabs
                tabs={[
                  {
                    id: 1,
                    tabKey: "design",
                    tabTitle: "Design",
                    tabData: <SmoothShadows />,
                  },
                  {
                    id: 2,
                    tabKey: "code",
                    tabTitle: "Code",
                    tabData: <HighlightCode code={SmoothShadowsCode} />,
                  },
                ]}
              />
            </div>
          </Col>
        </Row>
      </div>
    </DocsInnerLayout>
  );
};

export default Shadows;
