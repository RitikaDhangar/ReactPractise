import { createSlice } from "@reduxjs/toolkit";
const DigitSlice = createSlice({
  name: "digit",
  initialState: { num: 2 },
  reducers: {
    increamentDigit: (state, action) => {
      state.num += action.payload;
    },
    decrementDigit: (state) => {
      state.num -= 2;
    },
  },
});
export const { increamentDigit, decrementDigit } = DigitSlice.actions;
export default DigitSlice.reducer;
