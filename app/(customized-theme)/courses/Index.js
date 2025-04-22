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

const CourseFilterPage = () => {
  return (
    <Fragment>
      {/* Page header */}
      <PageHeading pagetitle="Filter Page" />

      {/* Content */}
      <section className="py-6">
        <Container>
          <TabContainer />
        </Container>
      </section>
    </Fragment>
  );
};

export default CourseFilterPage;
