import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullCode: {
    html: "",
    css: "",
    javascript: "",
  },
  currentLanguage: "html",
};

const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    updateCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export const { updateCurrentLanguage, updateCodeValue } = codeSlice.actions;

export default codeSlice.reducer;
