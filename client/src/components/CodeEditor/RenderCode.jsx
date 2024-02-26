import React from "react";
import { useSelector } from "react-redux";

const RenderCode = () => {
  const fullCode = useSelector((state) => state.code.fullCode);

  const renderCode = `
    <html>
        <style>${fullCode.css}</style>
        <body>${fullCode.html}</body>
        <script>${fullCode.javascript}</script>
    </html>
  `;

  const iframeContent = `data:text/html;charset=utf-8,${encodeURIComponent(
    renderCode
  )}`;

  return (
    <div style={{ width: "100%" }} className="h-full">
      <iframe className="h-full w-full" src={iframeContent} />
    </div>
  );
};

export default RenderCode;
