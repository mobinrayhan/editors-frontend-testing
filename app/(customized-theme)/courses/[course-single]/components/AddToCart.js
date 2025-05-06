"use client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addItemToCart } from "store/cartSlice";
// import { addItemToCart } from "../redux/slices/cartSlice";
function handelAddToCart(course, instructorData, dispatch) {
  toast.success("Added to Cart", {
    duration: 2000,
    position: "top-center",
    style: {
      background: "#333",
      color: "#fff",
      fontSize: "16px",
      padding: "10px",
    },
  });
  const previousCartItem = localStorage.getItem("cartItem");
  if (previousCartItem) {
    const parsedCartItem = JSON.parse(previousCartItem);
    if (parsedCartItem.find((item) => item.id === course.id)) {
      // alert("Already in Cart");
      toast.error("Already in Cart", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#333",
          color: "#fff",
          fontSize: "16px",
          padding: "10px",
        },
      });
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
      toast.success("Added to Cart", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#333",
          color: "#fff",
          fontSize: "16px",
          padding: "10px",
        },
      });
    }
  } else {
    localStorage.setItem(
      "cartItem",
      JSON.stringify([{ ...course, instructor: instructorData }])
    );
    dispatch(addItemToCart([{ ...course, instructor: instructorData }]));
    // alert("Added to Cart");
    toast.success("Added to Cart", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#333",
        color: "#fff",
        fontSize: "16px",
        padding: "10px",
      },
    });
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
