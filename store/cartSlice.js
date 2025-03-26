import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [
      {
        id: 1,
        productID: 1,
        quantity: 2,
        colors: "Orange",
        size: 10,
        price: 10.00,
        totalPrice: 20.00
      },
      {
        id: 2,
        productID: 2,
        quantity: 2,
        colors: "Orange",
        size: 10,
        price: 49.00,
        totalPrice: 98.00
      },
      {
        id: 3,
        productID: 3,
        quantity: 2,
        colors: "Orange",
        size: 10,
        price: 49.00,
        totalPrice: 98.00
      },
    ],
    totalQuantity: 0,
    cartSummary: {
      subTotal: 0,
      discount: 0,
      coupon: '',
      shipping: 50,
      tax: 18, // Tax in percentage}
      taxAmount: 0
    },
    couponCodes: [
      { code: 'GKDIS5', discount: 5 },
      { code: 'GKDIS10', discount: 10 },
      { code: 'GKDIS15', discount: 15 }
    ]
  },
  reducers: {
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter((product) => product.id !== action.payload)
    },
    updateCart(state, action) {
      let index = state.cartItems.findIndex(item => item.id === action.payload.id)
      let currentItem = state.cartItems[index];
      currentItem.quantity = action.payload.quantity;
      currentItem.totalPrice = currentItem.price * action.payload.quantity;
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    updateCartSubTotal(state, action) {
      state.cartSummary.subTotal = action.payload
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    updateCartTaxAmount(state, action) {
      state.cartSummary.taxAmount = action.payload
    },
    applyCoupon(state, action) {
      state.cartSummary.coupon = action.payload.coupon,
        state.cartSummary.discount = action.payload.discount
    }
  },
});



export const { addItemToCart, removeItemFromCart, updateCart, updateCartSubTotal, updateCartTaxAmount, applyCoupon } = cartSlice.actions

export default cartSlice.reducer
