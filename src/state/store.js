import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./slices";

const store = configureStore({
  reducer: {
    items: itemSlice,
  },
});

export default store;
