"use client";
import Link from "next/link";
import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

// import popup youtube video
// import ModalVideo from "react-modal-video";

// import widget/custom components
// import {
//   GKAccordionDefault,
//   Ratings,
//   CourseCard,
//   GKTippy,
//   InstructorProfileSummaryCard,
// } from "widgets";

// import sub components
// import DescriptionTab from "./DescriptionTab";
// import ReviewsTab from "./ReviewsTab";
// import TranscriptTab from "./TranscriptTab";
// import FAQTab from "./FAQTab";

// import data files
// import { CourseIndex } from "data/courses/CourseIndexData";
// import { AllCoursesData } from "data/slider/AllCoursesData";
// import GKAccordionDefault from "widgets/accordions/GKAccordionDefault";
import InstructorProfileSummaryCard from "widgets/cards/InstructorProfileSummaryCard";
// import GKTippy from "widgets/tooltips/GKTippy";
// import CourseCard from "shared/card/CourseCard";
// import Ratings from "widgets/ratings/Ratings";
import ModalVideo from "react-modal-video";
import AddToCart from "./AddToCart";
// import CourseList from "./CourseList";
const CardsComponents = ({ course, instructorData, sections }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* modal */}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1 }}
        isOpen={isOpen}
        videoId={course?.previewVideo || ""}
        onClose={() => setOpen(false)}
      />
      {/* Card */}
      <Card className="mb-3 mb-4">
        <div className="p-1">
          <div
            className="d-flex justify-content-center position-relative rounded py-10 border-white border rounded-3 bg-cover"
            style={{
              background: `url(${course?.thumbnail})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          >
            <Link
              href="#"
              className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none"
              onClick={() => setOpen(true)}
            >
              <i className="fe fe-play"></i>
            </Link>
          </div>
        </div>

        {/* Card body */}
        <Card.Body>
          {/* Price single page */}
          <div className="mb-3">
            <span className="text-dark fw-bold h2 me-2">
              BDT {course?.price}
            </span>
            {/* <del className="fs-4 text-muted">750</del> */}
          </div>
          <div className="d-grid">
            <AddToCart course={course} instructorData={instructorData} />
            <Link href="/checkout" className="btn btn-outline-primary">
              Buy now
            </Link>
          </div>
        </Card.Body>
      </Card>
      {/* Card */}
      <Card className="mb-4">
        {/* Card header */}
        <Card.Header>
          <h4 className="mb-0">What’s included</h4>
        </Card.Header>
        {/* Card Body */}
        <Card.Body className="p-0">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <i className="fe fe-play-circle align-middle me-2 text-primary"></i>
              {course?.totalDuration}
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fe fe-award me-2 align-middle text-success"></i>
              Certificate
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fe fe-calendar align-middle me-2 text-info"></i>
              {course?.totalResources} Resources
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-tasks text-success"></i>{" "}
              {course?.totalAssignments} Assignments
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <i className="fe fe-video align-middle me-2 text-secondary"></i>
              Watch Offline
            </ListGroup.Item> */}
            <ListGroup.Item className="bg-transparent">
              <i className="fe fe-clock align-middle me-2 text-warning"></i>
              Lifetime access
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      {/* Card */}
      <InstructorProfileSummaryCard data={instructorData} />
    </>
  );
};

export default CardsComponents;
