import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

export function ShareLinkDialog({ children }) {
  function handleCopyUrl() {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Copied Url");
  }

  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-md rounded-lg bg-slate-900">
        <DialogHeader>
          <DialogTitle>Share Your Code</DialogTitle>
          <DialogDescription>
            Copy the url and share with anyone you want.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={window.location.href} readOnly />
          </div>
          <DialogClose asChild>
            <Button
              onClick={handleCopyUrl}
              type="submit"
              size="sm"
              className="px-3"
            >
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </DialogClose>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
