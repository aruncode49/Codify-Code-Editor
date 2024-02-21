import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isLogin = false;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
