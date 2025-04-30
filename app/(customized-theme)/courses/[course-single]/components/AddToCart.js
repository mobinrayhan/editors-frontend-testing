"use client";
import Link from "next/link";
import React from "react";
function handelAddToCart(course, instructorData) {
  console.log(course);
  const previousCartItem = localStorage.getItem("cartItem");
  if (previousCartItem) {
    const parsedCartItem = JSON.parse(previousCartItem);
    parsedCartItem.find((item) => item.id === course.id)
      ? alert("Already in Cart")
      : localStorage.setItem(
          "cartItem",
          JSON.stringify([
            ...parsedCartItem,
            { ...course, instructor: instructorData },
          ])
        );
  } else {
    localStorage.setItem(
      "cartItem",
      JSON.stringify([{ ...course, instructor: instructorData }])
    );
    alert("Added to Cart");
  }
}
const AddToCart = ({ course, instructorData }) => {
  return (
    <div
      onClick={() => handelAddToCart(course, instructorData)}
      className="btn btn-primary mb-2 "
    >
      Add to Cart
    </div>
  );
};

export default AddToCart;
