"use client";
import React from "react";
import GKTippy from "widgets/tooltips/GKTippy";
function handelAddToCart(course, instructorData) {
  const previousCartItem = localStorage.getItem("cartItem");
  if (previousCartItem) {
    const parsedCartItem = JSON.parse(previousCartItem);
    parsedCartItem.find((item) => item.id === course.id)
      ? alert("Already in Cart")
      : localStorage.setItem(
          "cartItem",
          JSON?.stringify([
            ...parsedCartItem,
            { ...course, instructor: instructorData },
          ])
        );
  } else {
    const data = [{ ...course, instructor: instructorData }];
    localStorage.setItem("cartItem", JSON.stringify(data));
    alert("Added to Cart");
  }
}
export default function AddToCartIcon(instructor, courses) {
  return (
    <GKTippy content="Add to Cart">
      {/* <Link href="#"> */}
      <i
        onClick={() => handelAddToCart(courses, instructor)}
        style={{ cursor: "pointer" }}
        className="fe fe-shopping-cart"
      ></i>
      {/* </Link> */}
    </GKTippy>
  );
}
