"use client";

// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import {
  Breadcrumb,
  Card,
  Col,
  Image,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";

// import hooks
import useMounted from "hooks/useMounted";

const CustomerSingle = ({ customer }) => {
  const hasMounted = useMounted();
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">Customer Single</h1>
              <Breadcrumb>
                <Breadcrumb.Item to="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item to="#">Ecommerce</Breadcrumb.Item>
                <Breadcrumb.Item active>Customer Single</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="d-flex align-items-center">
              <Link
                href="/dashboard/ecommerce/add-customer"
                className="btn btn-primary me-2"
              >
                Add Customer
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      {hasMounted ? (
        <Row>
          <Col lg={8} xs={12}>
            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <Image
                    src={customer.avatar}
                    className="avatar-xl rounded-circle"
                    alt=""
                  />
                  <div className="ms-4">
                    <h3 className="mb-1">{customer.name}</h3>
                    <div>
                      <span>
                        <i className="fe fe-calendar text-muted me-2"></i>
                        Customer since April 5,2022
                      </span>
                      <span className="ms-3">
                        <i className="fe fe-map-pin text-muted me-2"></i>
                        {customer.location}
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Body className="border-top">
                <div className="hstack gap-2 justify-content-between d-md-flex d-inline">
                  {/* text */}
                  <div className="mb-3">
                    <span className="fw-semibold">Last Order</span>
                    <div className="mt-2">
                      <h5 className="h3 fw-bold mb-0">20 Hours ago</h5>
                      <span>White Adidas Low-Top Sneakers</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="fw-semibold">Lifetime Spent</span>
                    <div className="mt-2">
                      <h5 className="h3 fw-bold mb-0">$12,487.00</h5>
                      <span>Total 18 order</span>
                    </div>
                  </div>
                  <div>
                    <span className="fw-semibold">Average Order</span>
                    <div className="mt-2">
                      <h5 className="h3 fw-bold mb-0">$210.18</h5>
                      <span>$2000.00 Large Order</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div className="mb-4">
              <Card>
                <Card.Header>
                  <h4 className="mb-0">Recent Order</h4>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="px-0">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div>
                            <h6 className="text-primary mb-0">
                              Order ID: GK00017
                            </h6>
                          </div>
                          <div>
                            <span>Yesterday at 4:41 pm </span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <Link href="#" className="text-inherit">
                              <div className="d-lg-flex align-items-center">
                                <div>
                                  <Image
                                    src="/images/ecommerce/ecommerce-img-1.jpg"
                                    alt=""
                                    className="img-4by3-md rounded"
                                  />
                                </div>
                                <div className="ms-lg-3 mt-2 mt-lg-0">
                                  <h5 className="mb-0">
                                    White & Red Nike Athletic Shoe
                                  </h5>
                                  <span className="fs-6">SKU: Shoe01</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div>
                            <Link
                              href="#"
                              className="btn btn-light-danger text-danger btn-sm"
                            >
                              Refund
                            </Link>
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="px-0">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div>
                            <h6 className="text-primary mb-0">
                              Order ID: GK00017
                            </h6>
                          </div>
                          <div>
                            <span>Yesterday at 4:41 pm </span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <Link href="#" className="text-inherit">
                              <div className="d-lg-flex align-items-center">
                                <div>
                                  <Image
                                    src="/images/ecommerce/ecommerce-img-1.jpg"
                                    alt=""
                                    className="img-4by3-md rounded"
                                  />
                                </div>
                                <div className="ms-lg-3 mt-2 mt-lg-0">
                                  <h5 className="mb-0">
                                    White & Red Nike Athletic Shoe
                                  </h5>
                                  <span className="fs-6">SKU: Shoe01</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div>
                            <Link
                              href="#"
                              className="btn btn-light-danger text-danger btn-sm"
                            >
                              Refund
                            </Link>
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <div className="card-footer d-flex justify-content-end">
                  <Link href="/dashboard/ecommerce/order-summary">
                    View All Orders
                  </Link>
                </div>
              </Card>
            </div>
            <Card>
              <Card.Header>
                <h4 className="mb-0">Recent Payments</h4>
              </Card.Header>
              {/* Table */}
              <Table
                hover
                responsive
                className="mb-0 text-nowrap table-centered"
              >
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link href="#!">#GK00017</Link>
                    </td>
                    <td>$23.00</td>
                    <td>May 5, 2022</td>
                    <td>
                      <span className="badge bg-success-soft">Completed</span>
                    </td>
                    <td>
                      <Link href="#">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link href="#!">#GK00018</Link>
                    </td>
                    <td>$123.00</td>
                    <td>April 4, 2022</td>
                    <td>
                      <span className="badge bg-success-soft">Refunded</span>
                    </td>
                    <td>
                      <Link href="#">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link href="#!">#GK00019</Link>
                    </td>
                    <td>$124.00</td>
                    <td>April 3, 2022</td>
                    <td>
                      <span className="badge bg-success-soft">Completed</span>
                    </td>
                    <td>
                      <Link href="#">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link href="#!">#GK00020</Link>
                    </td>
                    <td>$657.00</td>
                    <td>April 2, 2022</td>
                    <td>
                      <span className="badge bg-danger-soft">Cancel</span>
                    </td>
                    <td>
                      <Link href="#">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link href="#!">#GK00021</Link>
                    </td>
                    <td>$235.00</td>
                    <td>March 31, 2022</td>
                    <td>
                      <span className="badge bg-success-soft">Completed</span>
                    </td>
                    <td>
                      <Link href="#">View Details</Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col lg={4}>
            {/* card */}
            <Card className="mt-4 mt-lg-0">
              <Card.Body className="border-bottom">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0">Contact</h4>
                  <Link href="#">Edit</Link>
                </div>
                <div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fe fe-mail text-muted fs-4"></i>
                    <Link href="#" className="ms-2">
                      {customer.email}
                    </Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fe fe-phone text-muted fs-4"></i>
                    <span className="ms-2">{customer.phone}</span>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0">Default Address</h4>
                  <Link href="#">Change</Link>
                </div>
                <div>
                  <p className="mb-0">
                    {customer.address} <br />
                    {customer.location}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        "Could not find any information for the specified record id"
      )}
    </Fragment>
  );
};

CustomerSingle.getInitialProps = async (context) => {
  const idInfo = context.query.id;
  const customer = CustomersData.find(
    (customer) => customer.id === parseInt(idInfo)
  );
  return { customer };
};

export default CustomerSingle;
