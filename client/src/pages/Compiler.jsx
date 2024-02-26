import React, { useState } from "react";
import SplitPane from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

import { CodeEditor, EditorHeader, RenderCode } from "../components";

const layoutCSS = {
  height: "100%",
  display: "flex",
};

const Compiler = () => {
  const [sizes, setSizes] = useState([100, "5%", "auto"]);
  return (
    <div
      className="h-[calc(100vh - 64px)]"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        {/* code editor */}
        <div
          className="flex flex-col "
          style={{ ...layoutCSS, background: "black" }}
        >
          <EditorHeader />
          <CodeEditor />
        </div>

        {/* Iframe or code output */}
        <div style={{ ...layoutCSS, background: "#fff" }}>
          <RenderCode />
        </div>
      </SplitPane>
    </div>
  );
};

export default Compiler;
