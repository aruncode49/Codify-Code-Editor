import React, { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

import { useDispatch, useSelector } from "react-redux";
import { updateCodeValue } from "../../app/code/codeSlice";

const CodeEditor = () => {
  const currentLanguage = useSelector((state) => state.code.currentLanguage);
  const fullCode = useSelector((state) => state.code.fullCode);

  const dispatch = useDispatch();

  const onChange = useCallback((val) => {
    // update code value in redux
    dispatch(updateCodeValue(val));
  }, []);

  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh - 130px)"
      style={{
        width: "100%",
        fontSize: "16px",
      }}
      extensions={[loadLanguage(currentLanguage)]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
};

export default CodeEditor;
