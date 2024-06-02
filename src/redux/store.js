import { configureStore } from "@reduxjs/toolkit";
import cartLengthReducer from "./cart/cartLengthSlice.js";
import orderLengthReducer from "./order/orderLengthSlice.js";

const store = configureStore({
  reducer: {
    cartLength: cartLengthReducer,
    orderLength: orderLengthReducer,
  },
});

export default store;
