import { createSlice } from "@reduxjs/toolkit";

const multiplyBy10slice = createSlice({
  name: "multiply",
  initialState: {
    val: 10,
  },
  reducers: {
    multiplyby10: (state) => {
      state.val *= 10;
    },
  },
});

export default multiplyBy10slice.reducer;
export const { multiplyby10 } = multiplyBy10slice.actions;
