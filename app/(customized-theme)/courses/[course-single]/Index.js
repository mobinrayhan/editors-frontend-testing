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
import DescriptionTab from "./components/DescriptionTab";
import ReviewsTab from "./components/ReviewsTab";
import TranscriptTab from "./components/TranscriptTab";
import FAQTab from "./components/FAQTab";

// import data files
import { CourseIndex } from "data/courses/CourseIndexData";
import { AllCoursesData } from "data/slider/AllCoursesData";
import GKAccordionDefault from "widgets/accordions/GKAccordionDefault";
import InstructorProfileSummaryCard from "widgets/cards/InstructorProfileSummaryCard";
import GKTippy from "widgets/tooltips/GKTippy";
import CourseCard from "shared/card/CourseCard";
import Ratings from "widgets/ratings/Ratings";
import AddToCart from "./components/AddToCart";
import CourseList from "./components/CourseList";
import CardsComponents from "./components/CardsComponents";
import ErrorPage from "components/ErrorPage";

const CourseSingle = async ({ params }) => {
  console.log(params["course-single"]);
  const slug = params["course-single"];
  // const [isOpen, setOpen] = useState(false);
  // const [YouTubeURL] = useState("JRzWRZahOVU");
  const responseCourse = await fetch(
    `https://api.editors.academy/courses/${slug}`,
    {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }
  );
  const { course } = await responseCourse.json();
  console.log(course);

  const responseSection =
    course &&
    (await fetch(`https://api.editors.academy/courses/${course.id}/sections`, {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }));
  const sections = course && (await responseSection.json());
  console.log(sections);
  const resInstructor = await fetch(
    `https://api.editors.academy/courses/${course.id}/instructor`,
    {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }
  );
  const instructorData = await resInstructor.json();
  const responseAllSectionWithVideo = await Promise.all(
    sections?.success === false || course === undefined
      ? []
      : sections?.courseSections?.map(async (section) => {
          const resVideoData = await fetch(
            `https://api.editors.academy/courses/${course.id}/${section.id}/videos`,
            {
              method: "GET",
              headers: {
                "x-api-key": process.env.API_KEY,
              },
            }
          );
          const resAssignmentData = await fetch(
            `https://api.editors.academy/courses/${course.id}/${section.id}/assignments`,
            {
              method: "GET",
              headers: {
                "x-api-key": process.env.API_KEY,
              },
            }
          );
          const resResourceData = await fetch(
            `https://api.editors.academy/courses/${course.id}/${section.id}/resources`,
            {
              method: "GET",
              headers: {
                "x-api-key": process.env.API_KEY,
              },
            }
          );

          const sectionVideoData = await resVideoData.json();
          const sectionAssignmentData = await resAssignmentData.json();
          const sectionResourcesData = await resResourceData.json();

          return {
            ...sectionVideoData,
            ...sectionAssignmentData,
            ...sectionResourcesData,
            ...section,
          };
        })
  );
  // console.log(responseAllSectionWithVideo);

  // console.log(sections);
  // console.log(video);
  const profileData = {
    id: 1,
    name: "Jenny Wilson",
    image: "/images/avatar/avatar-1.jpg",
    designation: "Front-end Developer, Designer",
    rating: 4.5,
    reviews: 12230,
    students: 11604,
    courses: 32,
    verified: true,
    link: "/marketing/instructor/profile",
    about:
      "I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.",
  };

  return (
    <Fragment>
      {/* Page header */}
      {!course ? (
        <ErrorPage />
      ) : (
        <section className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary">
          <Container>
            <Row className="align-items-center">
              <Col xl={7} lg={7} md={12} sm={12}>
                <div>
                  <h1 className="text-white display-4 fw-semi-bold">
                    {/* Getting Started with JavaScript */}
                    {course?.title}
                  </h1>
                  <p className="text-white mb-6 lead">
                    {/* JavaScript is the popular programming language which powers
                  web pages and web applications. This course will get you
                  started coding in JavaScript. */}
                    {course?.description}
                  </p>
                  <div className="d-flex align-items-center">
                    <GKTippy content="Add to Bookmarks">
                      <Link
                        href="#"
                        className="bookmark text-white text-decoration-none"
                      >
                        <i className="fe fe-bookmark text-white-50 me-2"></i>{" "}
                        Bookmark
                      </Link>
                    </GKTippy>
                    <span className="text-white ms-3">
                      <i className="fe fe-user text-white-50"></i> 1200 Enrolled{" "}
                    </span>
                    <span className="ms-4">
                      <span className="text-warning">
                        <Ratings rating={4.5} />
                        <span className="text-white ms-1">(140)</span>
                      </span>
                    </span>
                    <span className="text-white ms-4 d-none d-md-block">
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          fill="#DBD8E9"
                          height="6"
                          rx="1"
                          width="2"
                          x="3"
                          y="8"
                        ></rect>
                        <rect
                          fill="#DBD8E9"
                          height="9"
                          rx="1"
                          width="2"
                          x="7"
                          y="5"
                        ></rect>
                        <rect
                          fill="#DBD8E9"
                          height="12"
                          rx="1"
                          width="2"
                          x="11"
                          y="2"
                        ></rect>
                      </svg>{" "}
                      <span className="align-middle">{course?.level}</span>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      {/* Page content */}
      {course && (
        <section className="pb-10">
          <Container>
            <Row>
              <Col lg={8} md={12} sm={12} className="mt-n8 mb-4 mb-lg-0">
                <CourseList sections={responseAllSectionWithVideo} />
              </Col>
              <Col lg={4} md={12} sm={12} className="mt-lg-n22">
                <CardsComponents
                  instructorData={instructorData}
                  course={course}
                />
              </Col>
            </Row>

            {/* Card */}
            {/* <div className="pt-12 pb-3">
            <Row className="d-md-flex align-items-center mb-4">
              <Col lg={12} md={12} sm={12}>
                <h2 className="mb-0">Related Courses</h2>
              </Col>
            </Row>
            <Row>
              {AllCoursesData.filter(function (datasource) {
                return datasource.category === "javascript";
              })
                .slice(0, 4)
                .map((item, index) => (
                  <Col lg={3} md={6} sm={12} key={index}>
                    <CourseCard item={item} free />
                  </Col>
                ))}
            </Row>
          </div> */}
          </Container>
        </section>
      )}
    </Fragment>
  );
};

export default CourseSingle;
