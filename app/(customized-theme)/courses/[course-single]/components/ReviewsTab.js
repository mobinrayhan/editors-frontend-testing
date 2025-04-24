"use client";
// import node module libraries
import { Fragment } from "react";
import { Form } from "react-bootstrap";

// import widget/custom components
// import { RatingProgressBar, ReviewCard } from "widgets";
import RatingProgressBar from "widgets/ratings/RatingProgressBar";

// import data files
import { Reviews } from "data/courses/CourseIndexData";
import ReviewCard from "widgets/cards/ReviewCard";

const ReviewsTab = () => {
  return (
    <Fragment>
      <div className="mb-3">
        <h3 className="mb-4">How students rated this courses</h3>
        <RatingProgressBar
          totalFiveStart={24}
          totalFourStart={16}
          totalThreeStart={5}
          totalTwoStart={2}
          totalOneStart={3}
        />
      </div>
      {/* hr */}
      <hr className="my-5" />
      <div className="mb-3">
        <div className="d-lg-flex align-items-center justify-content-between mb-5">
          {/* Reviews */}
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Reviews</h3>
          </div>
          <div>
            {/* Form */}
            <Form className="form-inline">
              <Form.Group
                className="d-flex align-items-center me-2"
                controlId="formBasicEmail"
              >
                <span className="position-absolute ps-3">
                  <i className="fe fe-search"></i>
                </span>
                <Form.Control
                  type="search"
                  placeholder="Search Review"
                  className=" ps-6"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        {/* Rating */}
        {Reviews.map((item, index) => (
          <ReviewCard item={item} key={index} />
        ))}
      </div>
    </Fragment>
  );
};
export default ReviewsTab;
