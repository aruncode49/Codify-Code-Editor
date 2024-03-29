import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { updateCodeDetails, updateIsEditable } from "@/app/code/codeSlice";

export function SaveDialog({ children }) {
  const [title, setTitle] = useState("");

  const fullCode = useSelector((state) => state.code.fullCode);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const isEditable = useSelector((state) => state.code.isEditable);
  const codeDetails = useSelector((state) => state.code.codeDetails);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSaveCode() {
    if (title == "") return toast.error("Please add a title!");
    let toastId = null;
    try {
      toastId = toast.loading("Code Saving...");
      const res = await axios.post("/api/v1/code/save", {
        fullCode,
        title,
      });

      if (res?.data?.success) {
        toast.success(res.data.message);
        navigate(`/compiler/${res.data.codeId}`);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      if (toastId) {
        toast.dismiss(toastId);
      }
    }
  }

  async function handleEditCode() {
    if (title == "") return toast.error("Please add a title!");
    let toastId = null;
    try {
      toastId = toast.loading("Code Updating...");
      const res = await axios.put(`/api/v1/code/edit/${codeDetails._id}`, {
        fullCode,
        title,
      });

      if (res?.data?.success) {
        toast.success(res.data.message);
        navigate(`/compiler/${res.data.codeId}`);
        dispatch(updateIsEditable(false));
        dispatch(updateCodeDetails(null));
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      if (toastId) {
        toast.dismiss(toastId);
      }
    }
  }

  useEffect(() => {
    if (codeDetails) {
      setTitle(codeDetails.title);
    }
  }, []);

  return (
    <Dialog>
      {children}
      {isLogin && (
        <DialogContent className="sm:max-w-md rounded-lg bg-slate-900 py-8 pb-9  ">
          <DialogHeader>
            <DialogTitle>{isEditable ? "Edit Title" : "Add Title"}</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-3 mt-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <DialogClose asChild>
              <Button
                onClick={isEditable ? handleEditCode : handleSaveCode}
                type="submit"
                size="sm"
                className="px-3"
              >
                {isEditable ? "Edit" : "Save"}
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
