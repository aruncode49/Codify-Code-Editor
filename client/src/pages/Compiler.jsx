import { useState, useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { CodeEditor, EditorHeader, RenderCode } from "../components";

const Compiler = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial render

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResizablePanelGroup
      direction={isMobile ? "vertical" : "horizontal"}
      className="h-full max-w-full border editor"
    >
      <ResizablePanel defaultSize={55}>
        <div className="h-full ">
          <EditorHeader />
          <CodeEditor />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle className={"w-3 bg-black"} />
      <ResizablePanel defaultSize={45}>
        <div className="bg-white h-full">
          <RenderCode />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Compiler;
