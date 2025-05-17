"use client";
// import node module libraries
import PropTypes from "prop-types";
import { Fragment } from "react";

// import widget/custom components

// import data files
import ErrorPage from "components/ErrorPage";
import { Col, Row } from "react-bootstrap";
import CourseCard from "shared/card/CourseCard";

const CourseSlider = ({
  instructors,
  courses,
  recommended = false,
  popular = false,
  trending = false,
  category = null,
}) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Row>
        {courses?.success === false ? (
          <ErrorPage />
        ) : (
          courses?.courses?.map((item, index) => (
            <Col lg={4} md={6} sm={12} key={item.id}>
              <div className="item px-md-1">
                <CourseCard
                  key={index}
                  item={item}
                  instructor={instructors[index].instructor[0]}
                  extraclass="mx-2"
                />
              </div>
            </Col>
          ))
        )}
      </Row>
      {/* <Slider {...settings} className="pb-sm-5 mb-5 slick-slider-wrapper"> */}
      {
        // AllCoursesData.filter(function (dataSource) {
        //   if (recommended === true) {
        //     dataSource = dataSource.recommended;
        //   }
        //   if (popular === true) {
        //     dataSource = dataSource.popular;
        //   }
        //   if (trending === true) {
        //     dataSource = dataSource.trending;
        //   }
        //   if (category != null) {
        //     dataSource = dataSource.category === category;
        //   }
        //   return dataSource;
        // })
        // courses.courses.map((item, index) => (
        //   <div className="item px-md-1" key={item.id}>
        //     <CourseCard
        //       key={index}
        //       item={{
        //         id: 1,
        //         title: "JavaScript for Beginners",
        //         description:
        //           "A complete course for learning JavaScript from scratch.",
        //         price: "49.99",
        //         level: "Beginner",
        //         slug: "javascript-for-beginners",
        //         thumbnail:
        //           "https://dummyimage.com/600x400/333/fff&text=JavaScript",
        //         createdAt: "2025-04-24T15:59:01.000Z",
        //         createdBy: 1,
        //         visibility: "public",
        //       }}
        //       extraclass="mx-2"
        //     />
        //   </div>
        // ))
      }
      {/* </Slider> */}
    </Fragment>
  );
};

// Typechecking With PropTypes
CourseSlider.propTypes = {
  recommended: PropTypes.bool,
  popular: PropTypes.bool,
  trending: PropTypes.bool,
  category: PropTypes.string,
};

export default CourseSlider;
