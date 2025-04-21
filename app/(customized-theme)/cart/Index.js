"use client";
import React from "react";
import {
  Card,
  Col,
  Container,
  DropdownDivider,
  Form,
  Row,
} from "react-bootstrap";
// import { PageHeading } from "shared";
import CourseListView from "../courses/components/CourseListView";
import Link from "next/link";
import PageHeading from "widgets/page-headings/PageHeadingDescription";

const Cart = () => {
  return (
    <>
      <section className="mb-4">
        <PageHeading pagetitle="Shopping Cart" />

        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className=" mt-4">
              <Row className="d-lg-flex justify-content-between align-items-center">
                <Col md={6} lg={8} xl={9}>
                  <h4 className="mb-3 mb-lg-0">2 Courses in Cart</h4>
                </Col>
              </Row>
            </Col>
            <hr className="hr" />
          </Row>
          <Row className="flex-column-reverse flex-md-row">
            <Col xl={9} lg={8} md={7} sm={12} className="mt-4 mt-md-0">
              <CourseListView />
            </Col>
            <Col className="">
              <Card className="">
                <div className="pt-4 " style={{ marginBottom: "-18px" }}>
                  <h3 className="d-flex position-relative rounded px-4 border-white bg-cover">
                    Total Price:
                  </h3>
                </div>
                <hr className="hr" style={{ marginBottom: "-18px" }} />
                {/* Card body */}
                <Card.Body>
                  {/* Price single page */}
                  <div className="mb-3">
                    <span className="text-dark fw-bold h2 me-2">$600</span>
                    <del className="fs-4 text-muted">$750</del>
                  </div>
                  <div className="d-grid">
                    <Link href="#" className="btn btn-primary mb-2  ">
                      Proceed to Checkout <i className="fe fe-arrow-right"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
              <hr />
              <Card className="">
                <div className="pt-4" style={{ marginBottom: "-18px" }}>
                  <h3 className="d-flex position-relative rounded px-4 border-white bg-cover">
                    Promotions
                  </h3>
                </div>
                <hr className="hr" style={{ marginBottom: "-18px" }} />
                {/* Card body */}
                <Card.Body>
                  {/* Price single page */}
                  <div className="d-flex gap-2 mt-2 justify-content-between">
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Enter Coupon Code"
                      required
                    />
                    <div className=" btn btn-primary ">Apply</div>
                  </div>
                  <div className=""></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;
