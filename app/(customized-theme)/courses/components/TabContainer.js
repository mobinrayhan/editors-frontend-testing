"use client";
// import node module libraries

import React, { Fragment } from "react";
import { Col, Row, Container, Tab } from "react-bootstrap";

// import widget/custom components
// import { GridListViewButton, PageHeading } from "shared";

// import sub components
import FilterOptions from "./FilterOptions";
import CourseGridView from "./CourseGridView";
import CourseListView from "./CourseListView";
import FormSelect from "shared/form-select/FormSelect";
import GridListViewButton from "shared/grid-list-view-button/GridListViewButton";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setCourses } from "store/coursesSlice";

const TabContainer = ({ courses, instructors }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setCourses(courses));
  // }, [courses, dispatch]);
  const sortByOptions = [
    { value: "newest", label: "Newest" },
    { value: "free", label: "Free" },
    { value: "most-popular", label: "Most Popular" },
    { value: "highest-rated", label: "Highest Rated" },
  ];

  return (
    <Tab.Container defaultActiveKey="grid">
      <Row>
        <Col lg={12} md={12} sm={12} className="mb-4">
          <Row className="d-lg-flex justify-content-between align-items-center">
            <Col md={6} lg={8} xl={9}>
              <h4 className="mb-3 mb-lg-0">Displaying 9 out of 68 courses</h4>
            </Col>
            <Col md={6} lg={4} xl={3} className="d-inline-flex">
              <div className="me-2">
                <GridListViewButton keyGrid="grid" keyList="list" />
              </div>
              <FormSelect options={sortByOptions} placeholder="Sort by" />
            </Col>
          </Row>
        </Col>
        <Col xl={3} lg={3} md={4} sm={12} className="mb-4 mb-lg-0">
          <FilterOptions />
        </Col>
        {/* Tab content */}
        <Col xl={9} lg={9} md={8} sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="grid" className="pb-4 px-0">
              <CourseGridView instructors={instructors} courses={courses} />
            </Tab.Pane>
            <Tab.Pane eventKey="list" className="pb-4 px-0 react-code">
              <CourseListView instructors={instructors} courses={courses} />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default TabContainer;
