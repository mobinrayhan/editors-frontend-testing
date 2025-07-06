// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

// simple bar scrolling used for notification item scrolling
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// import widget/custom components
// import { GKTippy } from "widgets";

// import custom components
import DarkLightMode from "layouts/DarkLightMode";

// import data files

// import hooks
import useMounted from "hooks/useMounted";
// import Carts from "data/Cart";
import { signOutUserFromClient } from "helper/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const QuickMenu = ({ sessionUser }) => {
  const hasMounted = useMounted();
  const user = sessionUser?.user;
  const router = useRouter();
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const Carts = useSelector((state) => state.cart.cartItems);

  const Cart = () => {
    return (
      <SimpleBar style={{ maxHeight: "300px", maxWidth: "500px" }}>
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
                          src={item?.thumbnail}
                          alt=""
                          width={50}
                          height={50}
                          className=" rounded"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1">{item?.title}</h5>
                          <p className="fw-bold">
                            {item?.instructor?.instructor[0]?.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col className="col-auto text-center me-2">
                    <p className="">BDT {item?.price} </p>
                  </Col>
                </Row>
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
          {hasMounted && isDesktop ? (
            <Dropdown.Toggle
              as="a"
              bsPrefix=" "
              id="dropdownNotification"
              className="text-dark icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted bg-white"
            >
              <i className="fe fe-shopping-cart"></i>
            </Dropdown.Toggle>
          ) : (
            <Link
              href={"/cart"}
              className="text-dark icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted bg-white"
            >
              <i className="fe fe-shopping-cart"></i>
            </Link>
          )}
          <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end mt-4 py-0"
            aria-labelledby="dropdownNotification"
            align="end"
            show={hasMounted && isDesktop ? true : false}
          >
            <Dropdown.Item className="mt-3" bsPrefix=" " as="div">
              {Carts.length === 0 ? (
                <p className="h4  text-center">NO Course Added To Cart!</p>
              ) : (
                <>
                  <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                    <span className="h4 mb-0">Cart</span>
                  </div>
                  <Cart />
                  <div className="border-top px-3 pt-3 pb-3 d-flex justify-content-between align-items-center">
                    <Link href="/cart" className="text-link fw-semi-bold">
                      See all Cart
                    </Link>
                    <Link href="/checkout" className=" text-link fw-semi-bold">
                      <button
                        className="btn btn-primary"
                        style={{ marginBlock: 0 }}
                      >
                        Checkout
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {user && (
          <Dropdown as="li" className="ms-2">
            <Dropdown.Toggle
              as="a"
              bsPrefix=" "
              className="rounded-circle"
              id="dropdownUser"
            >
              <div className="avatar avatar-md avatar-indicators avatar-online">
                {user?.profileImage ? (
                  <Image
                    width={50}
                    height={50}
                    alt="avatar"
                    src={user?.profileImage}
                    className="rounded-circle"
                  />
                ) : (
                  <Avatar name={user?.name} />
                )}
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="dashboard-dropdown dropdown-menu-end mt-4 py-0"
              align="end"
              aria-labelledby="dropdownUser"
              show={hasMounted && isDesktop ? true : false}
            >
              <Dropdown.Item className="mt-3">
                <Link href="/student/dashboard" style={{ width: "100%" }}>
                  <div className="d-flex">
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                      {user?.profileImage ? (
                        <Image
                          width={50}
                          height={50}
                          alt="avatar"
                          src={user?.profileImage}
                          className="rounded-circle"
                        />
                      ) : (
                        <Avatar name={user?.name} />
                      )}
                    </div>
                    <div className="ms-3 lh-1">
                      <h5 className="mb-1">{user?.name}</h5>
                      <p className="mb-0 text-muted">{user?.email}</p>
                    </div>
                  </div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">
                <Link style={{ width: "100%" }} href="/student/profile">
                  <i className="fe fe-user me-2"></i> Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className="mb-3"
                onClick={() => {
                  signOutUserFromClient();
                  router.push("/");
                }}
              >
                <i className="fe fe-power me-2"></i> Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </ListGroup>
    </Fragment>
  );
};

const LETTER_COLORS = {
  A: "bg-primary",
  B: "bg-secondary",
  C: "bg-success",
  D: "bg-danger",
  E: "bg-warning",
  F: "bg-info",
  G: "bg-light text-dark",
  H: "bg-dark",
  I: "bg-primary-subtle",
  J: "bg-success-subtle",
  K: "bg-danger-subtle",
  L: "bg-warning-subtle",
  M: "bg-info-subtle",
  N: "bg-secondary-subtle",
  O: "bg-dark-subtle text-light",
  P: "bg-body-secondary",
  Q: "bg-primary-emphasis",
  R: "bg-success-emphasis",
  S: "bg-danger-emphasis",
  T: "bg-warning-emphasis",
  U: "bg-info-emphasis",
  V: "bg-secondary-emphasis",
  W: "bg-dark-emphasis text-light",
  X: "bg-body-tertiary",
  Y: "bg-light-subtle text-dark",
  Z: "bg-black text-white",
};

export const Avatar = ({
  name,
  width = 40,
  height = 40,
  isActiveAvatar = true,
}) => {
  if (!name) return null;

  const firstChar = name.trim().charAt(0).toUpperCase();
  const colorClass = LETTER_COLORS[firstChar] || "bg-muted text-dark";

  return (
    <div
      className={`avatar avatar-md ${
        isActiveAvatar ? " avatar-indicators avatar-online" : ""
      }`}
    >
      <div
        className={`d-flex justify-content-center align-items-center rounded-circle ${colorClass}`}
        style={{
          width: width,
          height: height,
          fontWeight: "bold",

          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      >
        {firstChar}
      </div>
    </div>
  );
};

export default QuickMenu;
