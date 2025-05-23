import { Fragment } from "react";
import { Container } from "react-bootstrap";

import getFetch from "helper/getFetch";
import { API_ENDPOINT } from "helper/global";
import PageHeading from "shared/page-headings/PageHeading";
import TabContainer from "./components/TabContainer";

const CourseFilterPage = async () => {
  const courses = await getFetch(`${API_ENDPOINT}/courses`);

  const instructors = await Promise.all(
    courses.courses.map(async (course) => {
      const instructorData = await getFetch(
        `${API_ENDPOINT}/courses/${course.id}/instructors`
      );
      return instructorData;
    })
  );

  return (
    <Fragment>
      {/* Page header */}
      <PageHeading pagetitle="Courses" />

      {/* Content */}
      <section className="py-6">
        <Container>
          <TabContainer instructors={instructors} courses={courses} />
        </Container>
      </section>
    </Fragment>
  );
};

export default CourseFilterPage;
