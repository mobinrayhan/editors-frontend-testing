"use client";

import React from "react";
import { Col } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addItemToCart } from "store/cartSlice";
import GKTippy from "widgets/tooltips/GKTippy";

export default function CartDeleteIcon({ data }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const cartItem = localStorage.getItem("cartItem");
    if (cartItem) {
      const parsedCartItem = JSON.parse(cartItem);
      const updatedCartItem = parsedCartItem.filter(
        (item) => item.id !== data.id
      );
      localStorage.setItem("cartItem", JSON.stringify(updatedCartItem));
      dispatch(addItemToCart(updatedCartItem));
      toast.success("Cart item removed");
    }
  };
  return (
    <Col style={{ cursor: "pointer" }} className="col-auto">
      <GKTippy content="Remove from Cart">
        {/* <Link href="#"> */}
        <i onClick={handleDelete} className="fe fe-trash"></i>
        {/* </Link> */}
      </GKTippy>
    </Col>
  );
}
