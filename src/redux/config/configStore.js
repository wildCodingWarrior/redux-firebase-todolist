import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../modules/todoSlice";
import countReducer from "../modules/countSlice";

export const store = configureStore({
  reducer: {
    todoReducer,
    countReducer,
  },
});
