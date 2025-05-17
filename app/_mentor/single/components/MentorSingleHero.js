// import node module libraries
import Link from "next/link";
import { Badge, Card, Image } from "react-bootstrap";
import {
  GeoAltFill,
  HeartFill,
  PeopleFill,
  StarFill,
} from "react-bootstrap-icons";

const MentorSingleHero = () => {
  const skills = [
    "Frontend",
    "HTML",
    "CSS",
    "React",
    "Javascript",
    "Vuejs",
    "Next.js",
  ];
  return (
    <Card>
      <div
        className="rounded-top-3"
        style={{
          backgroundImage: "url(/images/mentor/mentor-single.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "228px",
        }}
      ></div>
      <Card.Body className="p-md-5">
        <div className="d-flex flex-column gap-5">
          <div className="mt-n8">
            <Image
              src="/images/mentor/mentor-img-single.jpg"
              alt="mentor 1"
              className="img-fluid rounded-4 mt-n8"
            />
          </div>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-md-row flex-column justify-content-between gap-2">
                <div>
                  <h1 className="mb-0">Jitu Chauhan</h1>
                  <div className="d-flex flex-lg-row flex-column gap-2">
                    <small className="fw-medium text-gray-800">
                      Software Engineer at Apple
                    </small>
                    <small className="fw-medium text-success">
                      7+ years in UX Design & Brand Design.
                    </small>
                  </div>
                </div>
                <div className="d-flex flex-row gap-3 align-items-center">
                  <Link href="#!" className="btn btn-outline-white">
                    <span>
                      <HeartFill size={13} className="me-1" />{" "}
                    </span>{" "}
                    Save
                  </Link>
                  <Link href="#!" className="btn btn-outline-white">
                    Ask questions
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-md-row flex-column gap-md-4 gap-2">
                <div className="d-flex flex-row gap-2 align-items-center lh-1">
                  <span>
                    <StarFill
                      size={13}
                      className="text-warning align-baseline"
                    />{" "}
                  </span>
                  <span>
                    {" "}
                    <span className="text-gray-800 fw-bold">5.0</span>(16
                    Reviews){" "}
                  </span>
                </div>
                <div className="d-flex flex-row gap-2 align-items-center lh-1">
                  <span>
                    <PeopleFill
                      size={13}
                      className="text-primary align-baseline"
                    />{" "}
                  </span>
                  <span>
                    {" "}
                    <span className="text-gray-800 fw-bold">
                      40+
                    </span> Mentees{" "}
                  </span>
                </div>
                <div className="d-flex flex-row gap-2 align-items-center lh-1">
                  <span>
                    <GeoAltFill size={13} className="text-danger" />{" "}
                  </span>
                  <span>Gujarat,India</span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <h3 className="mb-0">Skills</h3>
              <div className="gap-2 d-flex flex-wrap">
                {skills.map((skill, index) => {
                  return (
                    <Link href="#!" key={index} className="btn btn-tag btn-sm">
                      {skill}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <Badge className="rounded-pill text-success-emphasis bg-success-subtle border border-success align-items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-reply-fill me-1 align-text-top"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                  </svg>
                </span>
                Quick Responder
              </Badge>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MentorSingleHero;
