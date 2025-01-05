import { configureStore } from "@reduxjs/toolkit";
import DigitReducer from "../features.js/DigitSlice";
export const store = configureStore({
  reducer: {
    digit: DigitReducer,
  },
});
