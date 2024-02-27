import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

export function SaveDialog({ children }) {
  const [title, setTitle] = useState("");

  async function handleSaveCode() {
    if (title == "") return toast.error("Please add a title!");
    try {
    } catch (error) {}
  }

  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-md rounded-lg bg-slate-900 py-8 pb-9  ">
        <DialogHeader>
          <DialogTitle>Add Title</DialogTitle>
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
          <Button
            onClick={handleSaveCode}
            type="submit"
            size="sm"
            className="px-3"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
