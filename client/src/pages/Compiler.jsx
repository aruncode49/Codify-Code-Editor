import { useState, useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { CodeEditor, EditorHeader, RenderCode } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateFullCode } from "@/app/code/codeSlice";
import toast from "react-hot-toast";

const Compiler = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { codeId } = useParams();

  async function loadCode(codeId) {
    try {
      const res = await axios.get(`/api/v1/code/load/${codeId}`);
      if (res?.data?.success) {
        dispatch(updateFullCode(res?.data?.fullCode));
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      navigate("/compiler");
    }
  }

  useEffect(() => {
    if (codeId) {
      loadCode(codeId);
    }
  }, [codeId]);

  // use effect for making responsive editor
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
      className="max-w-full border editor"
    >
      <ResizablePanel defaultSize={55}>
        <div className="">
          <EditorHeader />
          <CodeEditor />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle className={"w-3 bg-black"} />
      <ResizablePanel defaultSize={45}>
        <div className="bg-white">
          <RenderCode />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Compiler;
