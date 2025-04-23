"use client";
// import node module libraries
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
import DescriptionTab from "./DescriptionTab";
import ReviewsTab from "./ReviewsTab";
import TranscriptTab from "./TranscriptTab";
import FAQTab from "./FAQTab";

// import data files
import { CourseIndex } from "data/courses/CourseIndexData";
import { AllCoursesData } from "data/slider/AllCoursesData";
import GKAccordionDefault from "widgets/accordions/GKAccordionDefault";
import InstructorProfileSummaryCard from "widgets/cards/InstructorProfileSummaryCard";
import GKTippy from "widgets/tooltips/GKTippy";
import CourseCard from "shared/card/CourseCard";
import Ratings from "widgets/ratings/Ratings";
import AddToCart from "./AddToCart";
const CourseList = () => {
  return (
    <Tab.Container defaultActiveKey="contents">
      <Card>
        <Nav className="nav-lb-tab">
          {["Contents", "Description", "Reviews", "Transcript", "FAQ"].map(
            (item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  href={`#${item.toLowerCase()}`}
                  eventKey={item.toLowerCase()}
                  className="mb-sm-3 mb-md-0"
                >
                  {item}
                </Nav.Link>
              </Nav.Item>
            )
          )}
        </Nav>
        <Card.Body className="p-0">
          <Tab.Content>
            <Tab.Pane eventKey="contents" className="pb-4 pt-3 px-4">
              {/* Course Index Accordion */}
              <GKAccordionDefault
                accordionItems={CourseIndex}
                itemClass="px-0"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="description" className="pb-4 p-4">
              {/* Description */}
              <DescriptionTab />
            </Tab.Pane>
            <Tab.Pane eventKey="reviews" className="pb-4 p-4">
              {/* Reviews */}
              <ReviewsTab />
            </Tab.Pane>
            <Tab.Pane eventKey="transcript" className="pb-4 p-4">
              {/* Transcript */}
              <TranscriptTab />
            </Tab.Pane>
            <Tab.Pane eventKey="faq" className="pb-4 p-4">
              {/* FAQ */}
              <FAQTab />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Card>
    </Tab.Container>
  );
};

export default CourseList;
