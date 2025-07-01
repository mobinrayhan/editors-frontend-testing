// import node module libraries
import Link from "next/link";
import PropTypes from "prop-types";
import { Fragment } from "react";
import {
  Badge,
  Card,
  Col,
  Image,
  ListGroup,
  ProgressBar,
  Row,
} from "react-bootstrap";

// import widget/custom components
// import { GKTippy } from "widgets";

// import custom components
import LevelIcon from "widgets/miscellaneous/LevelIcon";
import Ratings from "widgets/ratings/Ratings";

// import utility file
import { numberWithCommas } from "helper/utils";

import CartDeleteIcon from "app/(customized-theme)/cart/components/CartDeleteIcon";
import AddToCartIcon from "components/AddToCartIcon";

const CourseCard = ({
  isCart,
  instructor,
  item,
  free = false,
  viewby = "grid",
  showprogressbar = false,
  extraclass = "",
}) => {
  /** Used in Course Index, Course Category, Course Filter Page, Student Dashboard etc...  */

  const GridView = () => {
    return (
      <Card className={`mb-4 card-hover ${extraclass}`}>
        <Link href={`/courses/${item?.slug}`}>
          <Image
            src={item?.thumbnail || null}
            alt="Thumbnail"
            className="card-img-top rounded-top-md"
          />
        </Link>
        {/* Card body  */}
        <Link href={`/courses/${item?.slug}`}>
          <Card.Body>
            <h3 className="h4 mb-2 text-truncate-line-2 ">
              {/* <Link href="#" className="text-inherit"> */}
              {item?.title}
              {/* </Link> */}
            </h3>
            <ListGroup as="ul" bsPrefix="list-inline" className="mb-3">
              <ListGroup.Item as="li" bsPrefix="list-inline-item">
                <i className="far fa-clock me-1"></i>
                {item?.totalDuration}
              </ListGroup.Item>
              <ListGroup.Item as="li" bsPrefix="list-inline-item">
                <LevelIcon level={item?.level} />
                {item?.level}
              </ListGroup.Item>
            </ListGroup>
            <div
              className={`lh-1 d-flex align-items-center ${
                free ||
                item.price === undefined ||
                item.price <= 0 ||
                item.discount === undefined
                  ? "mb-5"
                  : ""
              }`}
            >
              <span className="text-warning me-1 mb-0">
                {/* item.rating */}
                <Ratings rating={4} size="0.92rem" />
              </span>
              <span className="text-warning me-1">
                {" "}
                {/* {item.rating.toFixed(1)} */} 4.0
              </span>
              <span className="fs-6 text-muted">
                {" "}
                {/* item.ratingby */}
                {/* ({numberWithCommas(1200)}) */}
              </span>
            </div>
            <div
              className={`lh-1 mt-3 ${
                free || item.price === undefined || item.price <= 0 //||
                  ? // item.discount === undefined
                    "d-none"
                  : ""
              }`}
            >
              <span className="text-dark fw-bold">
                {/* ${item.price - item?.discount} */}BDT {item?.price}
              </span>{" "}
              <del className="fs-6 text-muted">${item?.price}</del>
            </div>
          </Card.Body>
        </Link>
        {/* Card Footer */}
        <Card.Footer>
          <Row className="align-items-center g-0">
            <Col className="col-auto">
              <Link href={"/instructor/profile"}>
                <Image
                  src={
                    // instructor?.profile_image ||
                    // "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                    "https://i.ibb.co.com/KzfWFxGn/187910563-10220662170840378-3981185376255859365-n.jpg"
                  }
                  className="rounded-circle avatar-xs object-fit-cover"
                  alt=""
                />
              </Link>
            </Col>
            <Col className="col ms-2">
              <Link href={"/instructor/profile"}>
                {/* <span>{instructor?.name}</span> */}
                <span>James Prince Barai</span>
              </Link>
            </Col>
            <Col style={{ cursor: "pointer" }} className="col-auto">
              {item?.isPurchasedByUser ? (
                <Link href={`/courses/${item.slug}`}>
                  <i class="fe fe-video"></i>
                </Link>
              ) : (
                <AddToCartIcon courses={item} instructor={instructor} />
              )}
            </Col>
          </Row>
          <span className={`${showprogressbar ? "" : "d-none"}`}>
            {" "}
            <ProgressBar
              variant="success"
              now={item.progress}
              className="mt-3"
              style={{ height: "5px" }}
            />
          </span>
        </Card.Footer>
      </Card>
    );
  };

  /** Used in Course Filter Page  */
  const ListView = () => {
    return (
      <Card className="mb-4 card-hover">
        <Row className="g-0">
          <Link
            href={`/courses/${item?.slug}`}
            className="bg-cover img-left-rounded col-12 col-md-12 col-xl-3 col-lg-3 "
            style={{
              background: `url(${item?.thumbnail})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <Image
              src={item?.thumbnail}
              alt="..."
              className="img-fluid d-lg-none invisible"
            />
          </Link>
          <Col lg={9} md={12} sm={12}>
            {/*   Card body   */}
            <Card.Body>
              <h3 className="mb-2 text-truncate-line-2 ">
                <Link href={`/courses/${item?.slug}`} className="text-inherit">
                  {item?.title}
                </Link>
              </h3>
              {/*   List inline   */}
              <ListGroup as="ul" bsPrefix="list-inline" className="mb-5">
                <ListGroup.Item as="li" bsPrefix="list-inline-item">
                  <i className="far fa-clock me-1"></i>
                  {item?.totalDuration}
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="list-inline-item">
                  <LevelIcon level={item?.level} />
                  {item?.level}
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="list-inline-item">
                  <span className="text-warning">
                    {" "}
                    <Ratings rating={5} /> {(5.0).toFixed(1)}
                  </span>
                  <span className="fs-6 text-muted">
                    {" "}
                    ({numberWithCommas(1200)})
                  </span>
                </ListGroup.Item>
              </ListGroup>
              {/*   Row   */}
              <Row className="align-items-center g-0">
                <Col className="col-auto">
                  <Image
                    src={
                      instructor?.profile_image ||
                      "https://i.ibb.co.com/KzfWFxGn/187910563-10220662170840378-3981185376255859365-n.jpg"
                    }
                    className="rounded-circle avatar-xs object-fit-cover"
                    alt=""
                  />
                </Col>
                <Col className="col ms-2">
                  {/* <span>{instructor?.name}</span> */}
                  <span>James Prince Barai</span>
                </Col>
                {isCart ? (
                  <CartDeleteIcon data={item} />
                ) : (
                  <Col style={{ cursor: "pointer" }} className="col-auto">
                    {item?.isPurchasedByUser ? (
                      <Link href={`/courses/${item.slug}`}>
                        <i class="fe fe-video"></i>
                      </Link>
                    ) : (
                      <AddToCartIcon courses={item} instructor={instructor} />
                    )}
                  </Col>
                  // <Col className="col-auto">
                  //   <GKTippy content="Add to Bookmarks">
                  //     <Link href="#">
                  //       <i className="fe fe-bookmark"></i>
                  //     </Link>
                  //   </GKTippy>
                  // </Col>
                )}{" "}
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  };

  /** Used in Instructor Profile Page  */
  const ListGroupView = () => {
    return (
      <div className="d-lg-flex align-items-center">
        <div>
          <Image src={item.image} alt="" className="rounded img-4by3-lg" />
        </div>
        <div className="ms-lg-3 mt-2 mt-lg-0">
          <h4 className="text-primary-hover">
            {item.title}{" "}
            <Badge bg="light-success" className="text-success">
              New
            </Badge>
          </h4>
          <ListGroup
            as="ul"
            bsPrefix="list-inline"
            className="fs-6 mb-0 text-inherit"
          >
            <ListGroup.Item as="li" bsPrefix="list-inline-item">
              <i className="far fa-clock me-1"></i>
              {item.duration}
            </ListGroup.Item>
            <ListGroup.Item as="li" bsPrefix="list-inline-item">
              <LevelIcon level={item.level} />
              {item.level}
            </ListGroup.Item>
            <ListGroup.Item as="li" bsPrefix="list-inline-item">
              <span className="text-warning">
                {" "}
                <Ratings rating={item.rating} /> {item.rating.toFixed(1)}
              </span>
              <span className="fs-6 text-muted">
                {" "}
                ({numberWithCommas(item.ratingby)})
              </span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      {viewby === "grid" ? (
        <GridView />
      ) : viewby === "list" ? (
        <ListView />
      ) : (
        <ListGroupView />
      )}
    </Fragment>
  );
};

// Typechecking With PropTypes
CourseCard.propTypes = {
  item: PropTypes.object.isRequired,
  free: PropTypes.bool,
  viewby: PropTypes.string,
  showprogressbar: PropTypes.bool,
  extraclass: PropTypes.string,
};

export default CourseCard;
