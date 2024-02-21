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
    },
    removeUser: (state) => {
      state.user = null;
    },
    setLoginState: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { addUser, removeUser, setLoginState } = authSlice.actions;

export default authSlice.reducer;
