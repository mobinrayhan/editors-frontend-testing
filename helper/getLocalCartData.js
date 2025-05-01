"use client";
export default function getLocalCartData() {
  const hasMounted = typeof window !== "undefined";
  if (!hasMounted) return null; // Prevents server-side rendering issues
  const cartData = localStorage.getItem("cartItem");
  if (cartData) {
    const parsedCartData = JSON.parse(cartData);
    return parsedCartData;
  } else {
    return null;
  }
}
