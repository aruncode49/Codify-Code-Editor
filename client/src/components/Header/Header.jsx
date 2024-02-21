import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { SubmitButton } from "../index";
import axios from "axios";
import toast from "react-hot-toast";
import { removeUser } from "../../app/auth/authSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

      <>
        <Link
          className="px-4 py-2 text-sm bg-blue-500  hover:bg-blue-600  rounded font-medium "
          to="/login"
        >
          Get Started
        </Link>

        {/* logut button */}

        <SubmitButton handleSubmit={handleLogout} text={"Logout"} />
      </>
    </div>
  );
};

export default Header;
