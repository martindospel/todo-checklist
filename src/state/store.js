import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./slices";

const itemsReducer = combineReducers({ items: itemSlice.reducer });

const store = configureStore({
  reducer: itemsReducer,
});

export default store;
