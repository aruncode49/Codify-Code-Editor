import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 border-b border-b-gray-700 flex items-center justify-between  px-2 sm:px-4">
      <Link to="/">
        <Logo />
      </Link>

      <Link
        className="px-4 py-2 text-sm bg-blue-600 hover:bg-transparent border border-blue-600 rounded font-medium "
        to="/login"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Header;
