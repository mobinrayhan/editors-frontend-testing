"use  client";
// import node module libraries
import Link from "next/link";
import { useState } from "react";
import { Card, Image } from "react-bootstrap";

// import required icons
import { StarFill } from "react-bootstrap-icons";

// import required helper file
import { convertToCurrency } from "helper/utils";

// import widget/custom components
import { SignUpModalPopup } from "widgets";

const MentorCard = ({ mentor }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card className="rounded-3 card-bordered card-lift">
      <div className="p-3 d-flex flex-column gap-3">
        <div className="position-relative">
          <Link href="/marketing/mentor/single">
            <Image
              src={mentor.image}
              alt="mentor 1"
              className="img-fluid w-100 rounded-3"
            />
          </Link>
          {mentor.new ? (
            <div className="position-absolute bottom-0 left-0 p-3">
              <span className="badge text-bg-success">New Mentor</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex flex-column gap-2">
            <div>
              <div className="d-flex align-items-center gap-2">
                <h3 className="mb-0">
                  <Link href="/marketing/mentor/single" className="text-reset">
                    {mentor.mentorName}
                  </Link>
                </h3>
                {mentor.verified ? (
                  <span>
                    <svg
                      className="bi bi-patch-check-fill text-success"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                  </span>
                ) : (
                  ""
                )}
              </div>
              <span className="text-gray-800">{mentor.mentorRole}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between fs-6">
              <div>
                <span>@ {mentor.company}</span>
                <div className="vr mx-2 text-gray-200"></div>
                <span>{mentor.experience} yrs Exp.</span>
              </div>
              <div className="d-flex gap-1 align-items-center lh-1">
                <StarFill size={12} className="text-warning" />
                <span className="fw-bold text-dark">{mentor.ratings}</span>
                <span>({mentor.reviews} Reviews)</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div>
              <span>Starting from</span>
              <div className="d-flex flex-row gap-1 align-items-center">
                <h4 className="mb-0">{convertToCurrency(mentor.price)}</h4>
                <span className="fs-6">/ Month</span>
              </div>
            </div>
            <div>
              {mentor.allowFreeTrial ? (
                <Link
                  href="#"
                  scroll={false}
                  className="btn btn-outline-primary"
                  onClick={() => setModalShow(true)}
                >
                  Book a Free Trial
                </Link>
              ) : (
                <Link
                  href="#"
                  scroll={false}
                  className="btn btn-outline-secondary"
                  onClick={() => setModalShow(true)}
                >
                  Book Sessions
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <SignUpModalPopup show={modalShow} onHide={() => setModalShow(false)} />
    </Card>
  );
};

export default MentorCard;
