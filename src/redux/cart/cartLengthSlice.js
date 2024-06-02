import { createSlice } from "@reduxjs/toolkit";

const cartLengthSlice = createSlice({
  name: "cartLength",
  initialState: {
    value: 0,
  },
  reducers: {
    setCartLength: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCartLength } = cartLengthSlice.actions;
export default cartLengthSlice.reducer;
