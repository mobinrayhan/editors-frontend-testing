// import node module libraries
import React, { Fragment } from "react";
import { Col, Row, Container, Tab } from "react-bootstrap";

// import widget/custom components
// import { GridListViewButton, PageHeading } from "shared";

// import sub components
// import FilterOptions from "./components/FilterOptions";
// import CourseGridView from "./components/CourseGridView";
// import CourseListView from "./components/CourseListView";
// import FormSelect from "shared/form-select/FormSelect";
// import GridListViewButton from "shared/grid-list-view-button/GridListViewButton";
import PageHeading from "shared/page-headings/PageHeading";
import TabContainer from "./components/TabContainer";

const CourseFilterPage = async () => {
  const response = await fetch("https://api.editors.academy/courses", {
    method: "GET",
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const courses = await response.json();
  const instructors = await Promise.all(
    courses.courses.map(async (course) => {
      const resInstructor = await fetch(
        `https://api.editors.academy/courses/${course.id}/instructor`,
        {
          method: "GET",
          headers: {
            "x-api-key": process.env.API_KEY,
          },
        }
      );
      if (!resInstructor.ok) {
        throw new Error(
          `Failed to fetch instructor for course ID: ${course.id}`
        );
      }
      const instructorData = await resInstructor.json();

      return instructorData;
    })
  );
  console.log(courses);
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
