// import node module libraries
import { Row, Col, ListGroup } from "react-bootstrap";
import Link from "next/link";

const File = ({ file, index }) => (
  <ListGroup as="ul" variant="flush">
    <ListGroup.Item className={`px-0 ${index != 0 ? "border-top" : ""}`}>
      <Row>
        <Col xs="auto">
          <div>{file.icon}</div>
        </Col>
        <Col className="d-flex ms-n3">
          <span className="me-4 text-dark fw-bold">{file.name}</span>
          <p className="mb-0">{file.desc}</p>
        </Col>
      </Row>
      {file.children && (
        <ListGroup variant="flush" className="ps-3 mt-3">
          {file.children.map((child) =>
            child.name === "gulpfile.js" ? (
              <ListGroup.Item className="px-0" key={child.id}>
                <Row>
                  <Col xs="auto">
                    <div>{child.icon}</div>
                  </Col>
                  <Col className="d-flex ms-n3">
                    <span className="me-4 text-dark fw-bold">{child.name}</span>
                    <p className="mb-0">
                      Configuration file for Gulp library. It contains all tasks
                      you want to perform with Gulp. Learn more about it from
                      section or{" "}
                      <Link href="/docs/working-with-gulp">
                        Working with Gulp
                      </Link>
                      <Link href="https://gulpjs.com/">
                        official Gulp documentation
                      </Link>
                    </p>
                  </Col>
                </Row>
              </ListGroup.Item>
            ) : (
              <File key={child.id} file={child} />
            )
          )}
        </ListGroup>
      )}
    </ListGroup.Item>
  </ListGroup>
);

export default File;
