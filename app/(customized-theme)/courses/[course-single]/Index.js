// import node module libraries
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

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

// import data files
import AddToCartIcon from "components/AddToCartIcon";
import ErrorPage from "components/ErrorPage";
import getFetch from "helper/getFetch";
import { API_ENDPOINT } from "helper/global";
import Ratings from "widgets/ratings/Ratings";
import CardsComponents from "./components/CardsComponents";
import CourseList from "./components/CourseList";

const CourseSingle = async ({ params }) => {
  const slug = params["course-single"];
  const { course } = await getFetch(`${API_ENDPOINT}/courses/${slug}`);

  const sections =
    course && (await getFetch(`${API_ENDPOINT}/courses/${course.id}/sections`));

  const instructorData = await getFetch(
    `${API_ENDPOINT}/courses/${course.id}/instructors`
  );

  const responseAllSectionWithVideo = await Promise.all(
    sections?.success === false || course === undefined
      ? []
      : sections?.courseSections?.map(async (section) => {
          const sectionVideoData = await getFetch(
            `${API_ENDPOINT}/courses/${course.id}/${section.id}/videos`
          );
          const sectionAssignmentData = await getFetch(
            `${API_ENDPOINT}/courses/${course.id}/${section.id}/assignments`
          );
          const sectionResourcesData = await getFetch(
            `${API_ENDPOINT}/courses/${course.id}/${section.id}/resources`
          );

          return {
            ...sectionVideoData,
            ...sectionAssignmentData,
            ...sectionResourcesData,
            ...section,
          };
        })
  );

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
                    {course?.title}
                  </h1>
                  <p className="text-white mb-6 lead">{course?.description}</p>
                  <div className="d-flex align-items-center bookmark text-white text-decoration-none">
                    <AddToCartIcon
                      courses={course}
                      instructor={instructorData.instructor[0]}
                    >
                      <span style={{ marginLeft: "5px", cursor: "pointer" }}>
                        Add to Cart
                      </span>
                    </AddToCartIcon>

                    <span className="text-white ms-3">
                      <i className="fe fe-user text-white-50"></i>{" "}
                      {course?.totalEnrollments} Enrolled
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
                <CourseList
                  slug={slug}
                  sections={responseAllSectionWithVideo}
                />
              </Col>
              <Col lg={4} md={12} sm={12} className="mt-lg-n22">
                <CardsComponents
                  instructorData={instructorData}
                  course={course}
                  sections={responseAllSectionWithVideo}
                />
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </Fragment>
  );
};

export default CourseSingle;
