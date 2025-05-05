"use client";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addItemToCart } from "store/cartSlice";
import GKTippy from "widgets/tooltips/GKTippy";
function handelAddToCart(course, instructorData, dispatch) {
  const previousCartItem = localStorage.getItem("cartItem");
  if (previousCartItem) {
    const parsedCartItem = JSON.parse(previousCartItem);
    if (parsedCartItem.find((item) => item.id === course.id)) {
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
      // alert("Already in Cart");
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
export default function AddToCartIcon({ instructor, courses }) {
  const dispatch = useDispatch();

  return (
    <GKTippy content="Add to Cart">
      {/* <Link href="#"> */}
      <i
        onClick={() => handelAddToCart(courses, instructor, dispatch)}
        style={{ cursor: "pointer" }}
        className="fe fe-shopping-cart"
      ></i>
      {/* </Link> */}
    </GKTippy>
  );
}
