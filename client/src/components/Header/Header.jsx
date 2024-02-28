import Logo from "./Logo";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SubmitButton } from "../index";
import axios from "axios";
import toast from "react-hot-toast";
import { removeUser } from "../../app/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const location = useLocation();
  const path = location.pathname;

  async function handleLogout() {
    try {
      const res = await axios.get("/api/v1/auth/logout");
      if (res?.data?.success) {
        toast.success("User logout successfully");
        dispatch(removeUser());
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="w-full h-16 border-b border-b-gray-700 flex items-center justify-between  px-2 sm:px-4">
      <Link to="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-3">
        {path !== "/compiler" && (
          <Link
            className="px-3 py-2 text-sm bg-blue-500  hover:bg-blue-600  rounded font-medium "
            to="/compiler"
          >
            Compiler
          </Link>
        )}

        {!isLogin && (
          <Link
            className="px-3 py-2 sm:px-5 text-sm  bg-blue-500  hover:bg-blue-600 rounded font-medium "
            to="/login"
          >
            Login
          </Link>
        )}

        {/* logut button */}

        {isLogin && (
          <SubmitButton
            color={"bg-red-500"}
            hoverColor={"hover:bg-red-600"}
            px={"px-3 sm:px-4"}
            py={"py-2"}
            handleSubmit={handleLogout}
            text={"Logout"}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
