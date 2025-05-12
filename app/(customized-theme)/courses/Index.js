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
import getFetch from "helper/getFetch";

const CourseFilterPage = async () => {
  const courses = await getFetch("https://api.editors.academy/courses");

  const instructors = await Promise.all(
    courses.courses.map(async (course) => {
      const instructorData = await getFetch(
        `https://api.editors.academy/courses/${course.id}/instructors`
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
