import toast from "react-hot-toast";

function downloadCodeFile(code, fileName) {
  const blob = new Blob([code], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}

export function downloadCodeFiles(fullCode) {
  if (fullCode.html == "" && fullCode.css == "" && fullCode.javascript == "") {
    return toast.error("Empty code cannot be download!");
  }

  if (fullCode.html !== "") {
    downloadCodeFile(fullCode.html, "index.html");
  }

  if (fullCode.css !== "") {
    downloadCodeFile(fullCode.css, "style.css");
  }

  if (fullCode.javascript !== "") {
    downloadCodeFile(fullCode.javascript, "script.js");
  }

  return toast.success("Code download successfully!");
}
