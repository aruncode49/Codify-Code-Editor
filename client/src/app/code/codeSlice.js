import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullCode: {
    html: `<button>Click Here</button>`,
    css: `body{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightyellow;
}

button{
  outline: none;
  border: none;
  background-color: lightblue;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: white;
}
    `,
    javascript: `document.querySelector("button").addEventListener("click", function() {
  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = randomColor;
});
    `,
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
    updateFullCode: (state, action) => {
      state.fullCode = action.payload;
    },
  },
});

export const { updateCurrentLanguage, updateCodeValue, updateFullCode } =
  codeSlice.actions;

export default codeSlice.reducer;
