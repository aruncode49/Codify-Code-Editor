import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Code, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

export function ProfileDropdown({ username, handleLogout }) {
  const [isOpen, setOpen] = React.useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger onClick={() => setOpen(true)} asChild>
        <div className="p-2 rounded-full bg-gray-600 cursor-pointer">
          <User size={24} />
        </div>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuContent className="w-44 mt-1 mr-2 bg-black">
          <DropdownMenuLabel className="pl-3 select-none">
            Hii,{" "}
            <span className="px-3 bg-yellow-500 rounded-lg py-0.5 text-black ml-1">
              {username}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex flex-col justify-center items-center text-sm pb-1">
            <Link
              to="/saved"
              onClick={() => setOpen(false)}
              className=" w-full pl-3 py-2 hover:bg-slate-800 hover:text-green-500  flex items-center  gap-2 rounded-lg duration-100"
            >
              <Code size={18} />
              Saved
            </Link>

            <button
              onClick={handleLogout}
              className=" w-full pl-3 py-2 hover:bg-slate-800 hover:text-red-500 flex items-center gap-2 rounded-lg duration-100"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}