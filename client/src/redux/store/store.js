import { configureStore } from "@reduxjs/toolkit";
import { dogsReducer } from "../reducers/dogsReducer";

const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});

export default store;
