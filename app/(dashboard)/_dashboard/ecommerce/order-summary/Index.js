'use client';

// import node module libraries
import React, { Fragment } from 'react'
import { Breadcrumb, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'

const OrderSummary = () => {
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-3 mb-3">
            <div className="mb-2 mb-lg-0">
              <h1 className="mb-1 h2 fw-bold">Order Summary </h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
                <Breadcrumb.Item active>Order Summary </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8} xs={12}>
          <Card>
            <Card.Body>
              <div className="mb-6">
                <h2 className="mb-0">Thank you for your order</h2>
                <p className="mb-0">We appreciate your order, were currently processing it. So hard tight and we will send
                  you confirmation very soon!</p>
              </div>
              <div>
                <div className="border-bottom mb-3 pb-3 ">
                  <div className="d-flex align-items-center">
                    <h4 className="mb-0">Order tracking number</h4>
                    <a href="#" className="ms-2 fw-semibold">ABC321C4D567FG</a>
                  </div>
                </div>
                <Row className="justify-content-between">
                  <Col lg={8} xs={12}>
                    <div className="d-md-flex">
                      <div>
                        <Image src='/images/ecommerce/ecommerce-img-1.jpg' alt="" className="img-4by3-xl rounded" />
                      </div>
                      <div className="ms-md-4 mt-2">
                        <h5 className="mb-1"> White &amp; Red Nike Athletic Shoe</h5>
                        <span>Color: <span className="text-dark">Orange</span>, Size:<span className="text-dark"> 10</span>
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} xs={12}>
                    <div className="d-flex justify-content-end mt-2">
                      <h5>$49.00</h5>
                    </div>
                  </Col>
                </Row>
                <hr className="my-3" />
                <Row className="justify-content-between">
                  <Col lg={8} xs={12}>
                    <div className="d-md-flex">
                      <div>
                        <Image src='/images/ecommerce/ecommerce-img-9.jpg' alt="" className="img-4by3-xl rounded" />
                      </div>
                      <div className="ms-md-4 mt-2">
                        <h5 className="mb-1">
                          Nike Black and White
                        </h5>
                        <span>Color: <span className="text-dark">Black</span>, Size:<span className="text-dark"> 11</span>
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} xs={12}>
                    <div className="d-flex justify-content-end mt-2">
                      <h5>$79.00</h5>
                    </div>
                  </Col>
                </Row>
                <hr className="my-3" />
                <div>
                  <ListGroup bsPrefix='list-unstyled' className='mb-0'>
                    <ListGroup.Item className="d-flex justify-content-between mb-2">
                      <span>Subtotal</span>
                      <span className="text-dark fw-medium">$128.00</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between mb-2">
                      <span>Shipping</span>
                      <span className="text-dark fw-medium">$0.00</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between mb-2">
                      <span>Discount</span>
                      <span className="text-dark fw-medium">$0.00</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between mb-2">
                      <span>Tax</span>
                      <span className="text-dark fw-medium">$0.00</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-top my-2"></ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between mb-2">
                      <span className="fw-medium text-dark">Grand Total</span>
                      <span className="fw-medium text-dark">$128.00</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <div className="mb-4">
                <h2 className="mb-0">Your Order is being shipped to</h2>
              </div>
              <Row>
                <Col md={6} xs={12}>
                  <h4>Shipping Address</h4>
                  <p>
                    3812 Orchard Street<br />
                    Bloomington, <br />
                    Minnesota - 55431, <br />
                    United States
                  </p>
                  <p className="mb-0">Phone: 12309876534</p>
                </Col>
                <Col md={6} xs={12}>
                  <h4 className="mb-3">Payment Method</h4>
                  <Image src='/images/creditcard/visa.svg' alt="" className="mb-2" />
                  <p className="mb-0 text-dark">Ending with 1243</p>
                  <p className="mb-0">Expires 21/23</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default OrderSummary