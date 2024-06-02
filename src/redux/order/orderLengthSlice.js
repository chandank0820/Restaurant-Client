import { createSlice } from "@reduxjs/toolkit";

const orderLengthSlice = createSlice({
  name: "orderLength",
  initialState: {
    value: 0,
  },
  reducers: {
    setOrderLength: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOrderLength } = orderLengthSlice.actions;
export default orderLengthSlice.reducer;
