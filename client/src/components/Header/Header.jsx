import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 border-b border-b-gray-700 flex items-center justify-between  px-2 sm:px-4">
      <Link to="/">
        <Logo />
      </Link>

      <Link
        className="px-2 py-1 bg-primary hover:bg-hover rounded-md "
        to="/login"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Header;
