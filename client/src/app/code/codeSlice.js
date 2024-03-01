import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullCode: {
    html: "",
    css: "",
    javascript: "",
  },
  currentLanguage: "html",
  isEditable: false,
  codeDetails: null,
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
    updateFullCode: (state, action) => {
      state.fullCode = action.payload;
    },
    updateCodeDetails: (state, action) => {
      state.codeDetails = action.payload;
    },
    removeCodeDetails: (state) => {
      state.codeDetails = null;
    },
    updateIsEditable: (state, action) => {
      state.isEditable = action.payload;
    },
  },
});

export const {
  updateCurrentLanguage,
  updateCodeValue,
  updateFullCode,
  updateCodeDetails,
  removeCodeDetails,
  updateIsEditable,
} = codeSlice.actions;

export default codeSlice.reducer;
