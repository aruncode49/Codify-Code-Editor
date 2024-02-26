import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import codeSlice from "./code/codeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    code: codeSlice,
  },
});

export default store;
