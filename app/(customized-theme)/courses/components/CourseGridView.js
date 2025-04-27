// import node module libraries
"use client";
import { Fragment, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import ReactPaginate from "react-paginate";
// import { ChevronLeft, ChevronRight } from "react-feather";

// import widget/custom components
// import { CourseCard } from "shared";

// import data files
import { AllCoursesData } from "data/slider/AllCoursesData";
import Link from "next/link";
import CourseCard from "shared/card/CourseCard";

const CourseGridView = ({ courses, instructors }) => {
  const [Records] = useState(AllCoursesData.slice(0, 500));

  //------paging start----------
  const [pageNumber, setPageNumber] = useState(0);
  const RecordsPerPage = 9;
  const pagesVisited = pageNumber * RecordsPerPage;
  const pageCount = Math.ceil(Records.length / RecordsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayRecords = courses.courses
    .slice(pagesVisited, pagesVisited + RecordsPerPage)
    .map((Records, index) => {
      return (
        <Col lg={4} md={6} sm={12} key={index}>
          <CourseCard
            item={Records}
            instructor={instructors[index].instructor[0]}
          />
        </Col>
      );
    });
  //---end of paging start----------

  return (
    <Fragment>
      <Row>
        {displayRecords.length > 0 ? (
          displayRecords
        ) : (
          <Col>No matching records found.</Col>
        )}
      </Row>

      {/* <ReactPaginate
        previousLabel={<ChevronLeft size="14px" />}
        nextLabel={<ChevronRight size="14px" />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"justify-content-center mb-0 pagination"}
        previousLinkClassName={"page-link mx-1 rounded"}
        nextLinkClassName={"page-link mx-1 rounded"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link mx-1 rounded"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"active"}
      /> */}
    </Fragment>
  );
};
export default CourseGridView;
