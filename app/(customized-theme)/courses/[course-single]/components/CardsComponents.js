"use client";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, ListGroup, Modal } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

import InstructorProfileSummaryCard from "widgets/cards/InstructorProfileSummaryCard";
import AddToCart from "./AddToCart";

const CardsComponents = ({ course, instructorData, sections }) => {
  const [isOpen, setOpen] = useState(false);

  const vdocipherIframe = `<iframe
    src="https://player.vdocipher.com/v2/?otp=${course?.videoInfo?.otp}&playbackInfo=${course?.videoInfo?.playbackInfo}"
    width="100%"
    height="460"
    allowfullscreen
    allow="encrypted-media"
    frameborder="0"
  ></iframe>`;

  return (
    <>
      <Modal
        show={isOpen}
        onHide={() => setOpen(false)}
        centered
        size="lg"
        backdrop="static"
        keyboard={false}
        contentClassName="bg-black p-0 border-0"
      >
        <div
          className="position-absolute top-0 end-0 p-2"
          style={{ zIndex: 1051 }}
        >
          <Button
            variant="link"
            onClick={() => setOpen(false)}
            className="text-white fs-4"
            style={{ textDecoration: "none" }}
          >
            <X />
          </Button>
        </div>

        <Modal.Body className="p-0">
          <div dangerouslySetInnerHTML={{ __html: vdocipherIframe }} />
        </Modal.Body>
      </Modal>
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
            {!course?.isPurchasedByUser && (
              <AddToCart course={course} instructorData={instructorData} />
            )}
            {!course?.isPurchasedByUser ? (
              <Link href="/checkout" className="btn btn-outline-primary">
                Buy now
              </Link>
            ) : (
              <Link
                style={{
                  pointerEvents:
                    !sections?.[0]?.id || !sections?.[0]?.videos?.[0]?.id
                      ? "none"
                      : "auto",
                }}
                href={`/student/dashboard/${course?.slug}/section-${sections?.[0]?.id}-video-${sections?.[0]?.videos?.[0]?.id}`}
                className="btn btn-outline-primary"
              >
                Start Watching
              </Link>
            )}
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
