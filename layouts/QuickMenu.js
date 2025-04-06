// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Image, Dropdown, ListGroup } from "react-bootstrap";

// simple bar scrolling used for notification item scrolling
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// import widget/custom components
import { GKTippy } from "widgets";

// import custom components
import DotBadge from "components/bootstrap/DotBadge";
import DarkLightMode from "layouts/DarkLightMode";

// import data files
import NotificationList from "data/Notification";

// import hooks
import useMounted from "hooks/useMounted";
import Carts from "data/Cart";

const QuickMenu = () => {
  const hasMounted = useMounted();

  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });

  const Notifications = () => {
    return (
      <SimpleBar style={{ maxHeight: "300px" }}>
        <ListGroup variant="flush">
          {NotificationList.map(function (item, index) {
            return (
              <ListGroup.Item
                key={index}
                className={index === 0 ? "bg-light" : ""}
              >
                <Row>
                  <Col>
                    <Link
                      href="/student/notification-history"
                      className="text-body"
                    >
                      <div className="d-flex">
                        <Image
                          src={item.image}
                          alt=""
                          className="avatar-md rounded-circle"
                        />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1">{item.sender}</h5>
                          <p className="mb-3">{item.message}</p>
                          <span className="fs-6 text-muted">
                            <span>
                              <span className="fe fe-thumbs-up text-success me-1"></span>
                              {item.date}
                            </span>
                            <span className="ms-1">{item.time}</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col className="col-auto text-center me-2">
                    <GKTippy content="Mark as unread">
                      {/* <Link href="#"> */}
                      <DotBadge bg="secondary"></DotBadge>
                      {/* </Link> */}
                    </GKTippy>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </SimpleBar>
    );
  };
  const Cart = () => {
    return (
      <SimpleBar style={{ maxHeight: "300px" }}>
        <ListGroup variant="flush">
          {Carts.map(function (item, index) {
            return (
              <ListGroup.Item
                className={index === 0 ? "bg-light" : ""}
                key={index}
              >
                <Row>
                  <Col>
                    <Link href="#" className="text-body">
                      <div className="d-flex">
                        <Image
                          src={item.image}
                          alt=""
                          className="avatar-md rounded"
                        />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1">{item.title}</h5>
                          <p className="fw-bold">Jack ank carin</p>

                          {/* <button
                            style={{ width: "100%" }}
                            className="btn btn-primary"
                          >
                            Buy Now
                          </button> */}
                          {/* <span className="fs-6 text-muted">
                            <span>
                              <span className="fe fe-thumbs-up text-success me-1"></span>
                              {item.date}
                            </span>
                            <span className="ms-1">{item.time}</span>
                          </span> */}
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col className="col-auto text-center me-2">
                    {/* <GKTippy content="Mark as unread">
                      <Link href="#">
                        <DotBadge bg="secondary"></DotBadge>
                      </Link>
                    </GKTippy> */}
                    <p className="">BDT 15000 </p>
                  </Col>
                </Row>
                {/* <button style={{ width: "100%" }} className="btn btn-primary">
                  Buy Now
                </button> */}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </SimpleBar>
    );
  };

  return (
    <Fragment>
      <DarkLightMode />
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-2 d-flex nav-top-wrap"
      >
        {/* notification */}

        <Dropdown as="li">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            id="dropdownNotification"
            className="text-dark icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted"
          >
            <i className="fe fe-bell"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end mt-4 py-0"
            aria-labelledby="dropdownNotification"
            align="end"
            show={hasMounted && isDesktop ? true : false}
          >
            <Dropdown.Item className="mt-3" bsPrefix=" " as="div">
              <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                <span className="h4 mb-0">Notifications</span>
                {/* <Link href="/" className="text-muted">
                  <span className="align-middle">
                    <i className="fe fe-settings me-1"></i>
                  </span>
                </Link> */}
              </div>
              <Notifications />
              <div className="border-top px-3 pt-3 pb-3">
                <Link
                  href="/student/notification-history"
                  className="text-link fw-semi-bold"
                >
                  See all Notifications
                </Link>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* cart */}
        <Dropdown as="li">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            id="dropdownNotification"
            className="text-dark icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted"
          >
            <i className="fe fe-shopping-cart"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end mt-4 py-0"
            aria-labelledby="dropdownNotification"
            align="end"
            show={hasMounted && isDesktop ? true : false}
          >
            <Dropdown.Item className="mt-3" bsPrefix=" " as="div">
              <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                <span className="h4 mb-0">Cart</span>
                {/* <Link href="/" className="text-muted">
                  <span className="align-middle">
                    <i className="fe fe-settings me-1"></i>
                  </span>
                </Link> */}
              </div>
              <Cart />
              <div className="border-top px-3 pt-3 pb-3">
                <Link
                  href="/dashboard/notification-history"
                  className="text-link fw-semi-bold"
                >
                  See all Cart
                </Link>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as="li" className="ms-2">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="rounded-circle"
            id="dropdownUser"
          >
            <div className="avatar avatar-md avatar-indicators avatar-online">
              <Image
                alt="avatar"
                src="/images/avatar/avatar-1.jpg"
                className="rounded-circle"
              />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown dropdown-menu-end mt-4 py-0"
            align="end"
            aria-labelledby="dropdownUser"
            show={hasMounted && isDesktop ? true : false}
          >
            <Dropdown.Item className="mt-3">
              <Link href="/student/dashboard">
                <div className="d-flex">
                  <div className="avatar avatar-md avatar-indicators avatar-online">
                    <Image
                      alt="avatar"
                      src="/images/avatar/avatar-1.jpg"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="ms-3 lh-1">
                    <h5 className="mb-1">Annette Black</h5>
                    <p className="mb-0 text-muted">annette@geeksui.com</p>
                  </div>
                </div>
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">
              <Link href="/student/profile">
                <i className="fe fe-user me-2"></i> Profile
              </Link>
            </Dropdown.Item>
            {/* <Dropdown.Item eventKey="3">
              <i className="fe fe-star me-2"></i> Subscription
            </Dropdown.Item> */}
            {/* <Dropdown.Item>
              <i className="fe fe-settings me-2"></i> Settings
            </Dropdown.Item> */}
            <Dropdown.Divider />
            <Dropdown.Item className="mb-3">
              <i className="fe fe-power me-2"></i> Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>
    </Fragment>
  );
};

export default QuickMenu;
