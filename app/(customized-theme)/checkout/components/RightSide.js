"use client";

import useMounted from "hooks/useMounted";
// import getLocalCartData from "helper/getLocalCartData";

import React, { useEffect } from "react";
import { Image } from "react-bootstrap";

// import { useDispatch, useSelector } from "react-redux";

export default function RightSide() {
  const [cartData, setCartData] = React.useState([]);
  const hasMounted = useMounted();
  useEffect(() => {
    const data = localStorage.getItem("cartItem");
    if (data) {
      const parsedCartData = JSON.parse(data);
      setCartData(parsedCartData);
    } else {
      setCartData([]);
    }
  }, [hasMounted]);
  console.log(cartData);
  const totalPrice = cartData?.reduce((acc, item) => {
    return acc + Number(item?.price);
  }, 0);
  // const cartData = [];

  return (
    <section className="col-md-6">
      {/* Order Summary */}
      <div className="card p-4 shadow mb-4">
        <h4 className="mb-4 fw-bold">Order summary</h4>
        {/* <div className="d-flex justify-content-between">
          <span>Original Price:</span>
          <span>$139.98</span>
        </div> */}
        {/* <div className="d-flex justify-content-between text-danger">
          <span>Discounts (81% Off):</span>
          <span>-$114.00</span>
        </div> */}
        <hr />
        <div className="d-flex justify-content-between fw-bold">
          <span>Total ({cartData?.length} courses):</span>
          <span>BDT {totalPrice}</span>
        </div>
        <p className="mt-3 text-muted" style={{ fontSize: "0.875rem" }}>
          By completing your purchase, you agree to these{" "}
          <a href="#" className="text-primary text-decoration-none">
            Terms of Use
          </a>
          .
        </p>
        <button className="btn btn-primary w-100 py-2 fw-bold">
          <i className="bi bi-lock-fill me-2"></i> Pay BDT {totalPrice}
        </button>
        <div className="text-center mt-4">
          <h6 className="fw-bold">30-Day Money-Back Guarantee</h6>
          <p className="text-muted" style={{ fontSize: "0.875rem" }}>
            Not satisfied? Get a full refund within 30 days. <br />
            Simple and straightforward!
          </p>
        </div>
      </div>

      {/* Order Details */}
      <div className="card p-3 shadow">
        <div className="border-bottom pb-2 mb-2">
          <h6 className="fw-bold">
            Order details ({cartData?.length} courses)
          </h6>
        </div>
        {cartData?.map((item, i) => (
          <div key={"cartData" + i} className="d-flex align-items-center py-2">
            <Image
              src={item?.thumbnail}
              alt="JavaScript for Beginners"
              className="me-3 rounded"
              width={80}
              height={60}
            />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-1 fw-semibold">{item?.title}</p>
                  <p className="mb-0 text-muted">
                    {item?.instructor?.instructor[0]?.name}
                  </p>
                </div>
                <div className="text-end text-primary fw-medium">
                  BDT {item?.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
