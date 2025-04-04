"use client";

// import node module libraries
import { Row, Col, Card } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { APIIntegrationLinks } from "data/docs/SidebarContentLinks";

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from "widgets";

const Index = ({ data }) => {
  const mockAPICode = `// import sub components
// Here page.js is server component in which we can use async()
import Index from "./Index";

const Page = async () => {
    const getData = async () => {
        const response = await fetch('https://dummyjson.com/products/1');
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        return response.json();
    }
    const data = await getData();
    return <Index data={data} />;
};

export default Page;
`;

  const mockResultCode = `"use client";
// Here Index.js is client component in which we can't use async()
// import node module libraries
import { Card, Container } from "react-bootstrap"

const Index = ({ data }) => {
    return (
        <Container>
            <Card className="p-5 my-3">
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Card>
        </Container>
    )
}

export default Index`;

  return (
    <DocsInnerLayout links={APIIntegrationLinks}>
      <div className="docs-content mx-xxl-9">

        <PageHeadingDescription
          title="API Integration"
          description="An API integration is the connection between two or more applications, via their APIs, that lets those systems exchange data. API integrations power processes throughout many high-performing businesses that keep data in sync and enhance productivity."
        />

        <hr className="mb-5 mt-7" />


        <Row className="docs-example mt-7">
          <Col md={12} xs={12}>
            <div id="api-code">
              <h4 className="mb-3">
                api-demo/page.js
              </h4>
            </div>
          </Col>
          <Col md={12} xs={12}>
            <HighlightCode className="py-3 ps-3" code={mockAPICode} />
          </Col>
        </Row>


        <Row className="docs-example mt-7">
          <Col md={12} xs={12}>
            <div id="result-code">
              <h4 className="mb-3">
                api-demo/Index.js
              </h4>
            </div>
          </Col>
          <Col md={12} xs={12}>
            <HighlightCode className="py-3 ps-3" code={mockResultCode} />
          </Col>
        </Row>

        <Row className="docs-example mt-7" id="colors">
          <Col md={12} xs={12}>
            <div id="result">
              <h4 className="mb-3">
                Final result @ <code>http://localhost:3000/api-demo</code> url.
              </h4>
            </div>
          </Col>
          <Col md={12} xs={12}>
            <Card className="p-5 my-3">
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </Card>
          </Col>
        </Row>
      </div>
    </DocsInnerLayout>
  );
};

export default Index;
