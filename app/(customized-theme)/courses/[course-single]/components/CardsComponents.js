"use client";
import React, { Fragment } from "react";
import {
  Col,
  Row,
  Container,
  Nav,
  Card,
  Tab,
  ListGroup,
} from "react-bootstrap";
import Link from "next/link";

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
import AddToCart from "./AddToCart";
// import CourseList from "./CourseList";
const CardsComponents = ({ course, instructorData }) => {
  // const profileData = {
  //   id: 1,
  //   name: "Jenny Wilson",
  //   image: "/images/avatar/avatar-1.jpg",
  //   designation: "Front-end Developer, Designer",
  //   rating: 4.5,
  //   reviews: 12230,
  //   students: 11604,
  //   courses: 32,
  //   verified: true,
  //   link: "/marketing/instructor/profile",
  //   about:
  //     "I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.",
  // };
  return (
    <>
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
              // onClick={() => setOpen(true)}
            >
              <i className="fe fe-play"></i>
            </Link>
          </div>
        </div>
        {/* video popup */}
        {/* <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId={YouTubeURL}
                  onClose={() => setOpen(false)}
                /> */}
        {/* end of video popup */}

        {/* Card body */}
        <Card.Body>
          {/* Price single page */}
          <div className="mb-3">
            <span className="text-dark fw-bold h2 me-2">
              BDT {course?.price}
            </span>
            <del className="fs-4 text-muted">750</del>
          </div>
          <div className="d-grid">
            <AddToCart course={course} instructorData={instructorData} />
            <Link
              href="/marketing/pages/pricing/"
              className="btn btn-outline-primary"
            >
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
              12 hours video
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fe fe-award me-2 align-middle text-success"></i>
              Certificate
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fe fe-calendar align-middle me-2 text-info"></i>
              12 Article
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fe fe-video align-middle me-2 text-secondary"></i>
              Watch Offline
            </ListGroup.Item>
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
