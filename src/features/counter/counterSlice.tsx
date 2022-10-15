import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increment_by_amount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, increment_by_amount } =
  counterSlice.actions;

export default counterSlice.reducer;
