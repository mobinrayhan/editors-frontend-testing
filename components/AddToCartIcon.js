"use client";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addItemToCart } from "store/cartSlice";
import GKTippy from "widgets/tooltips/GKTippy";

function handelAddToCart(course, instructorData, disPatch) {
  const previousCartItem = localStorage.getItem("cartItem");
  if (previousCartItem) {
    const parsedCartItem = JSON.parse(previousCartItem);
    if (parsedCartItem.find((item) => item.id === course.id)) {
      toast("Already in Cart", {
        icon: "✌️",
      });
    } else {
      const newCartItem = [
        ...parsedCartItem,
        {
          ...course,
          instructor: {
            message: "cartItem",
            instructor: [instructorData],
          },
        },
      ];
      localStorage.setItem("cartItem", JSON?.stringify(newCartItem));
      disPatch(addItemToCart(newCartItem));

      toast.success("Cart Added Successfully");
    }
  } else {
    const data = [
      {
        ...course,
        instructor: {
          message: "cartItem",
          instructor: [instructorData],
        },
      },
    ];
    localStorage.setItem("cartItem", JSON.stringify(data));
    disPatch(addItemToCart(data));
    toast.success("Cart Added Successfully");
  }
}
export default function AddToCartIcon({ instructor, courses, children }) {
  const disPatch = useDispatch();

  return (
    <div onClick={() => handelAddToCart(courses, instructor, disPatch)}>
      <GKTippy content="Add to Cart">
        <span style={{ cursor: "pointer" }}>
          <i className="fe fe-shopping-cart"></i>
        </span>
      </GKTippy>
      {children}
    </div>
  );
}
