'use client';

// import node module libraries
import React, { Fragment } from 'react'
import { Badge, Breadcrumb, Card, Col, Image, ListGroup, Row, Table } from 'react-bootstrap'
import Link from 'next/link';

const OrderSingle = () => {
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-3 mb-3">
            <div className="mb-2 mb-lg-0">
              <h1 className="mb-1 h2 fw-bold">Order Single </h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
                <Breadcrumb.Item active>Order Single </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={8} lg={7} xs={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1">Order ID: GK00017</h4>
                  <span>Order Date: a October 03,2022 t 6:31 pm <Badge bg='success-soft' className="ms-2">Paid</Badge>
                  </span>
                </div>
                <div>
                  <Link href="#" className="btn btn-primary btn-sm">Invoice</Link>
                </div>
              </div>
            </Card.Header>
            <Table responsive className="table mb-0 text-nowrap">
              <thead className="table-light">
                <tr>
                  <th>Products</th>
                  <th>Items</th>
                  <th>Amounts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="#" className="text-inherit">
                      <div className="d-lg-flex">
                        <div>
                          <Image src='/images/ecommerce/ecommerce-img-1.jpg' alt="" className="img-4by3-md rounded" />
                        </div>
                        <div className="ms-lg-4 mt-2 mt-lg-0">
                          <h5 className="mb-0">
                            White &amp; Red Nike Athletic Shoe
                          </h5>
                          <span className="text-body">SKU: <span>Shoe01</span></span>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td>1</td>
                  <td>$120.00</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#" className="text-inherit">
                      <div className="d-lg-flex">
                        <div>
                          <Image src='/images/ecommerce/ecommerce-img-2.jpg' alt="" className="img-4by3-md rounded" />
                        </div>
                        <div className="ms-lg-4 mt-2 mt-lg-0">
                          <h5 className="mb-0">
                            Wayfarer Styled Sunglasses
                          </h5>
                          <span className="text-body">SKU: <span>Glasses01</span> </span>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td>1</td>
                  <td>$220.00
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom-0 pb-0"></td>
                  <td colSpan="1" className="fw-medium text-dark border-bottom-0 pb-0">
                    Sub Total :
                  </td>
                  <td className="fw-medium text-dark border-bottom-0 pb-0 text-end">
                    $340.00
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom-0 pb-0"></td>
                  <td colSpan="1" className="fw-medium text-dark border-bottom-0 pb-0">
                    Discount (GKDIS15%) :
                  </td>
                  <td className="fw-medium text-dark border-bottom-0 pb-0 text-end">
                    -$51.00
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom-0 pb-0"></td>
                  <td colSpan="1" className="fw-medium text-dark border-bottom-0 pb-0">
                    Shipping Charge :
                  </td>
                  <td className="fw-medium text-dark border-bottom-0 pb-0 text-end">
                    $15.00
                  </td>
                </tr>
                <tr>
                  <td className="border-bottom-0"></td>
                  <td colSpan="1" className="fw-semibold text-dark ">
                    Tax Vat 19% (included) :
                  </td>
                  <td className="fw-semibold text-dark text-end">
                    $64.00
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan="1" className="fw-semibold text-dark ">
                    Paid by Customer
                  </td>
                  <td className="fw-semibold text-dark text-end">
                    $368.00
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <div className="d-md-flex justify-content-between align-items-center mb-5">
                <div>
                  <h4 className="mb-3 mb-md-0">Order Status</h4>
                </div>
                <div>
                  <Link href="#" className="btn btn-light-primary btn-sm text-primary">Change Address</Link>
                  <Link href="#" className="btn btn-light-danger btn-sm text-danger ms-2">Cancel Order
                  </Link>
                </div>
              </div>
              <div>
                <ListGroup as="ul" className="list-group-flush list-timeline-activity">
                  <ListGroup.Item as="li" className="px-0 pt-0 border-0 mb-4">
                    <Row>
                      <Col xs={"auto"}>
                        <div className="icon-shape icon-md rounded-circle bg-primary text-white position-relative z-1">
                          <i className="fe fe-shopping-cart"></i>
                        </div>
                      </Col>
                      <Col className="ms-n2 mt-1">
                        <h4 className="mb-3">Order Placed </h4>
                        <h5 className="mb-0">An order has been placed.</h5>
                        <span className="fs-6 text-muted">Wed, 15 April 2022 at 4:30 pm</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="px-0 pt-0 border-0 mb-4">
                    <Row>
                      <Col xs={"auto"}>
                        <div className="icon-shape icon-md rounded-circle bg-primary text-white position-relative z-1">
                          <i className="fe fe-shopping-bag"></i>
                        </div>
                      </Col>
                      <Col className="ms-n2 mt-1">
                        <h4 className="mb-3">Packed Thu, 16 April 2022 </h4>
                        <h5 className="mb-0">Your Item has been picked up by courier patner</h5>
                        <span className="fs-6 text-muted">Wed, 15 April 2022 at 4:30 pm</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="px-0 pt-0 border-0 mb-4">
                    <Row>
                      <Col xs={"auto"}>
                        <div className="icon-shape icon-md rounded-circle bg-primary text-white position-relative z-1">
                          <i className="fe fe-box"></i>
                        </div>
                      </Col>
                      <Col className="ms-n2 mt-1">
                        <h4 className="mb-3">Shipping Thu, 16 April 2022 </h4>
                        <h5 className="mb-1">BlueDart Logistics GEEK3214566 </h5>
                        <h5 className="mb-1"> Your item has been shipped.</h5>
                        <span className="fs-6 text-muted">Thu, 16 April 2022 at 5:00 pm</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="px-0 pt-0 border-0 mb-4">
                    <Row>
                      <Col xs={"auto"}>
                        <div className="icon-shape icon-md rounded-circle bg-light-primary text-primary position-relative z-1">
                          <i className="fe fe-gift"></i>
                        </div>
                      </Col>
                      <Col className="ms-n2 mt-1">
                        <h4 className="mb-0">Delivered </h4>
                        <h5 className="mb-1">Order has been successfully delivered </h5>
                        <span className="fs-6 text-muted">Thu, 17 April 2022 at 9:50am</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>

              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={5} xs={12}>
          <Card className="mb-4 mt-4 mt-lg-0">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">Customer</h4>
                <Link href="#">View Profile</Link>
              </div>
              <div className="d-flex align-items-center">
                <Image src='/images/avatar/avatar-12.jpg' className="avatar-lg rounded-circle" alt="" />
                <div className="ms-3">
                  <h4 className="mb-0">Harold Gonzalez</h4>
                  <div>
                    <span>Customer since April 5,2022</span>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Body className="border-top">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">Contact</h4>
                <Link href="#">Edit</Link>
              </div>
              <div>
                <div className="d-flex align-items-center mb-2"><i className="fe fe-mail text-muted fs-4"></i><Link href="#" className="ms-2">haroldonzalez@gmail.com</Link></div>
                <div className="d-flex align-items-center"><i className="fe fe-phone text-muted fs-4"></i><span className="ms-2">+(000) 123465 987</span></div>
              </div>
            </Card.Body>
            <Card.Body className="border-top">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">Shipping Address</h4>
                <Link href="#">Edit</Link>
              </div>
              <div>
                <p className="mb-0">3812 Orchard Street <br />
                  Bloomington,<br />
                  Minnesota 55431,<br />
                  United States<br />
                  +(000) 123465 987</p>
              </div>
            </Card.Body>
            <Card.Body className="border-top">
              <div className=" mb-3">
                <h4 className="mb-0">Billing Address</h4>
              </div>
              <div>
                <p className="mb-0">3812 Orchard Street <br />
                  Bloomington,<br />
                  Minnesota 55431,<br />
                  United States<br />
                  +(000) 123465 987</p>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="mb-3">
                <h4 className="mb-0">Payment Details</h4>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span>Transactions:</span>
                <span className="text-dark">#GK444TO10000</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span>Payment Method:
                </span>
                <span className="text-dark">Credit Card</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span>Card Holder Name:
                </span>
                <span className="text-dark">Harold Gonzalez</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span>Card Number:
                </span>
                <span className="text-dark">xxxx xxxx xxxx 6779</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span>Total Amount:
                </span>
                <span className="text-dark fw-bold">$368.00</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default OrderSingle