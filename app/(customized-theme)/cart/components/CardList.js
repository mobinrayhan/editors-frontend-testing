"use client";
import Link from "next/link";
import React from "react";
import { Card, Col, Form } from "react-bootstrap";

const CardList = ({ cartData }) => {
  return (
    <Col className="">
      <Card className="">
        <div className="pt-4 " style={{ marginBottom: "-18px" }}>
          <h3 className="d-flex position-relative rounded px-4 border-white bg-cover">
            Total Price:
          </h3>
        </div>
        <hr className="hr" style={{ marginBottom: "-18px" }} />
        {/* Card body */}
        {/* Price single page */}
        <Card.Body>
          <div className="mb-3">
            <span className="text-dark fw-bold h2 me-2">
              ${cartData[0]?.price}
            </span>
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
        {/* Price single page */}
        <Card.Body>
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
  );
};

export default CardList;
