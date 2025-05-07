"use client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addItemToCart } from "store/cartSlice";
// import { addItemToCart } from "../redux/slices/cartSlice";
function handelAddToCart(course, instructorData, dispatch) {
  const previousCartItem = localStorage.getItem("cartItem");
  if (previousCartItem) {
    const parsedCartItem = JSON.parse(previousCartItem);
    if (parsedCartItem.find((item) => item.id === course.id)) {
      toast("Already in Cart");
    } else {
      localStorage.setItem(
        "cartItem",
        JSON.stringify([
          ...parsedCartItem,
          { ...course, instructor: instructorData },
        ])
      );
      dispatch(
        addItemToCart([
          ...parsedCartItem,
          { ...course, instructor: instructorData },
        ])
      );
      toast.success("Cart Added Successfully");
    }
  } else {
    localStorage.setItem(
      "cartItem",
      JSON.stringify([{ ...course, instructor: instructorData }])
    );
    dispatch(addItemToCart([{ ...course, instructor: instructorData }]));
    toast.success("Cart Added Successfully");
  }
}
const AddToCart = ({ course, instructorData }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => handelAddToCart(course, instructorData, dispatch)}
      className="btn btn-primary mb-2 "
    >
      Add to Cart
    </div>
  );
};

export default AddToCart;
