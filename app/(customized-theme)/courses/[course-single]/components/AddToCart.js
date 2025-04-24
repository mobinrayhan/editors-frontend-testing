"use client";
import Link from "next/link";
import React from "react";
function handelAddToCart() {
  const previousCartItem = localStorage.getItem("cartItem");
  if (previousCartItem) {
    const parsedCartItem = JSON.parse(previousCartItem);
    localStorage.setItem(
      "cartItem",
      JSON.stringify([
        ...parsedCartItem,
        { courseId: 1, courseName: "Course Name" },
      ])
    );
  } else {
    localStorage.setItem(
      "cartItem",
      JSON.stringify([{ courseId: 1, courseName: "Course Name" }])
    );
  }

  alert("Added to Cart");
}
const AddToCart = () => {
  return (
    <div className="btn btn-primary mb-2 " onClick={handelAddToCart}>
      Add to Cart
    </div>
  );
};

export default AddToCart;
