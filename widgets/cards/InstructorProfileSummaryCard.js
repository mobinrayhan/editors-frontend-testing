"use client";
// import node module libraries
import Link from "next/link";
import { Card, Col, Image, Row } from "react-bootstrap";

// import utility file
import { numberWithCommas } from "helper/utils";

const InstructorProfileSummaryCard = ({ data }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex align-items-center">
          <div className="position-relative">
            <Image
              src={
                data?.instructor[0]?.profile_image ||
                "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
              }
              alt=""
              className="rounded-circle avatar-xl"
            />
            {data?.verified ? (
              <span
                className="position-absolute mt-2 ms-n3"
                data-bs-toggle="tooltip"
                data-placement="top"
                title="Verifed"
              >
                <Image
                  src="/images/svg/checked-mark.svg"
                  alt=""
                  height="30"
                  width="30"
                />
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="ms-4">
            <h4 className="mb-0">{data?.instructor[0]?.name}</h4>
            <p className="mb-1 fs-6">{data?.instructor[0]?.expertise}</p>
            <span className="fs-6">
              <span className="text-warning">{4.8}</span>
              <span className="mdi mdi-star text-warning me-2"></span>
              Instructor Rating
            </span>
          </div>
        </div>
        <Row className="border-top mt-3 border-bottom mb-3 g-0">
          <Col>
            <div className="pe-1 ps-2 py-3">
              <h5 className="mb-0">{numberWithCommas(120)}</h5>
              <span>Students</span>
            </div>
          </Col>
          <Col className="border-start">
            <div className="pe-1 ps-3 py-3">
              <h5 className="mb-0">{1}</h5>
              <span>Courses</span>
            </div>
          </Col>
          <Col className="border-start">
            <div className="pe-1 ps-3 py-3">
              <h5 className="mb-0">{numberWithCommas(120)}</h5>
              <span>Reviews</span>
            </div>
          </Col>
        </Row>
        <p>{data?.instructor[0]?.bio}</p>
        <Link
          href={"/instructor/profile"}
          className="btn btn-outline-secondary btn-sm"
        >
          View Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default InstructorProfileSummaryCard;
