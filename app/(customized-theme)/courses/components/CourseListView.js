"use client";
// import node module libraries
import { Fragment, useState } from "react";
import { Col, Row } from "react-bootstrap";

// import widget/custom components
// import { CourseCard } from "widgets";
import CourseCard from "shared/card/CourseCard";
// import data files
import { AllCoursesData } from "data/slider/AllCoursesData";

const CourseListView = ({
  courses,
  instructors,
  cartData,
  isCart = false,
  watchUrl,
}) => {
  const [Records] = useState(AllCoursesData.slice(0, 500));
  const [pageNumber, setPageNumber] = useState(0);
  const RecordsPerPage = 6;
  const pagesVisited = pageNumber * RecordsPerPage;
  const pageCount = Math.ceil(Records.length / RecordsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayRecords =
    courses && !isCart
      ? courses?.courses
          .slice(pagesVisited, pagesVisited + RecordsPerPage)
          .map((Records, index) => {
            return (
              <Col sm={12} md={12} lg={12} key={index}>
                <CourseCard
                  instructor={instructors?.[index]?.instructor[0]}
                  item={Records}
                  viewby="list"
                />
              </Col>
            );
          })
      : [];

  const cartRecords =
    cartData && isCart
      ? // courses?.courses
        // .slice(pagesVisited, pagesVisited + RecordsPerPage)
        cartData.map((Records, index) => {
          return (
            <Col sm={12} md={12} lg={12} key={index}>
              <CourseCard
                isCart={isCart}
                instructor={Records?.instructor?.instructor[0]}
                item={Records}
                viewby="list"
              />
            </Col>
          );
        })
      : [];
  // end of paging

  return (
    <Fragment>
      <Row>
        {displayRecords.length > 0 ? (
          displayRecords
        ) : isCart ? (
          cartRecords
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
export default CourseListView;
