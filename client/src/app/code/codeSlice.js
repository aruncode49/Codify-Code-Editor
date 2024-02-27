import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullCode: {
    html: `<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Basic Example</title>
<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>

<div class="container">
  <button id="myButton">Click me!</button>
  <p id="output"></p>
</div>

<script src="script.js"></script>

</body>
</html>
    `,
    css: `body {
  font-family: Arial, sans-serif;
}

.container {
  text-align: center;
  margin-top: 100px;
}

button{
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 1rem;
  background: lightblue;
  cursor: pointer;
  margin-top: 100px;
  
}

#output {
  font-size: 24px;
  color: blue;
}
    `,
    javascript: `document.getElementById("myButton").addEventListener("click", function() {
  document.getElementById("output").innerText = "Hello, world!";
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
  },
});

export const { updateCurrentLanguage, updateCodeValue } = codeSlice.actions;

export default codeSlice.reducer;
