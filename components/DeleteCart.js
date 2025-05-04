"use client";

import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "store/cartSlice";
import GKTippy from "widgets/tooltips/GKTippy";

export default function DeleteCart({ data }) {
  const dispatch = useDispatch();
  const handelCartDelete = () => {
    const previousCartItem = localStorage.getItem("cartItem");
    if (previousCartItem) {
      const parsedCartItem = JSON.parse(previousCartItem);
      const updatedCartItem = parsedCartItem.filter(
        (item) => item?.id !== data?.id
      );
      localStorage.setItem("cartItem", JSON.stringify(updatedCartItem));
      dispatch(removeItemFromCart(data));
    } else {
      alert("No items in cart");
    }
    console.log(data);
  };
  return (
    <Col style={{ cursor: "pointer" }} className="col-auto">
      <GKTippy content="Remove from Cart">
        <i onClick={handelCartDelete} className="fe fe-trash"></i>
      </GKTippy>
    </Col>
  );
}
