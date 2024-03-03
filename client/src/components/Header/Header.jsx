import Logo from "./Logo";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { removeUser } from "../../app/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { ProfileDropdown } from "./ProfileDropdown";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const path = location.pathname;

  async function handleLogout() {
    let toastId = null;
    try {
      toastId = toast.loading("Logging out...");
      const res = await axios.get("/api/v1/auth/logout");
      if (res?.data?.success) {
        toast.success("User logout successfully");
        dispatch(removeUser());
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      if (toastId) toast.dismiss(toastId);
    }
  }

  return (
    <div className="w-full h-16 border-b border-b-gray-700 flex items-center justify-between  px-2 sm:px-4">
      <Link to="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-3 -mr-2 sm:-mr-0">
        {path !== "/compiler" && (
          <Link
            className="px-3 py-2 text-sm bg-[#2D9596]  hover:bg-[#237172]  rounded font-medium "
            to="/compiler"
          >
            Compiler
          </Link>
        )}

        {!isLogin && (
          <Link
            className="px-3 py-2 sm:px-5 text-sm text-black  bg-[#F1FADA]  hover:bg-[#cfdeab]  rounded font-medium "
            to="/login"
          >
            Login
          </Link>
        )}

        <div className="mr-2 sm:mr-0">
          {isLogin && (
            <ProfileDropdown
              handleLogout={handleLogout}
              username={user?.username}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
