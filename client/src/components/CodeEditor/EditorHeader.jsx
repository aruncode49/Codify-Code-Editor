import React, { useState } from "react";
import { Save, Share2, ChevronsUpDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentLanguage } from "../../app/code/codeSlice";

import { DialogTrigger } from "@/components/ui/dialog";
import { SaveDialog } from "./SaveDialog";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const languages = ["html", "css", "javascript"];

const EditorHeader = () => {
  const [isSelectOpen, setSelectOpen] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState("html");
  const isLogin = useSelector((state) => state.auth.isLogin);
  const { codeId } = useParams();

  const dispatch = useDispatch();

  function changeSelectLanguage(lang) {
    setSelectLanguage(lang);
    dispatch(updateCurrentLanguage(lang));
    setSelectOpen((prev) => !prev);
  }

  return (
    <div className="bg-black w-full h-16 p-3 px-4 flex items-center justify-between">
      <div className="flex items-center gap-3 ">
        <SaveDialog>
          <DialogTrigger asChild>
            <button
              onClick={() => {
                if (!isLogin)
                  return toast.error("Please login to save the code!");
              }}
              className="flex items-center gap-1 px-2 py-1 bg-green-600 hover:bg-green-700 duration-100 rounded"
            >
              <Save size={18} />
              Save
            </button>
          </DialogTrigger>
        </SaveDialog>

        {codeId && (
          <button className="flex items-center gap-1 px-2 py-1 bg-blue-500 hover:bg-blue-600 duration-100 rounded">
            <Share2 size={18} />
            Share
          </button>
        )}
      </div>

      <div className="relative">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900">
          <button
            onClick={() => setSelectOpen((prev) => !prev)}
            className="flex items-center justify-between pl-4 w-[140px] sm:w-44 text-sm h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 uppercase"
          >
            {selectLanguage}
            <ChevronsUpDown size={18} />
          </button>
        </div>

        {isSelectOpen && (
          <div
            className="absolute end-0 z-10 mt-2 w-44 uppercase text-sm rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
            role="menu"
          >
            <ul className="p-2">
              {languages.map((lang, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer block rounded-lg px-4 py-2  text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  role="menuitem"
                  onClick={() => changeSelectLanguage(lang)}
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorHeader;
