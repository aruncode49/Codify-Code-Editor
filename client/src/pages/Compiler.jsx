import React, { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

const layoutCSS = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Compiler = () => {
  const [sizes, setSizes] = useState([100, "10%", "auto"]);
  return (
    <div
      className="h-[calc(100vh - 64px)]"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        {/* code editor */}
        <div className="" style={{ ...layoutCSS, background: "black" }}>
          Code Editor
        </div>

        {/* Iframe or code output */}
        <div style={{ ...layoutCSS, background: "#a1a5a9" }}>
          Iframe for code output Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Modi maxime odit pariatur fugit porro error natus
          nesciunt sequi sunt ullam?
        </div>
      </SplitPane>
    </div>
  );
};

export default Compiler;
