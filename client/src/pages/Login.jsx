import { Link, Navigate, useNavigate } from "react-router-dom";
import { SubmitButton } from "../components";
import { validateForm } from "../utils/validation";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthState } from "../utils/updateAuthState";

const Login = () => {
  const email = "xxxxx@gmail.com";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.auth.isLogin);

  // early return
  if (isLogin) {
    return <Navigate to={"/compiler"} />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (validateForm(email, username, password)) {
        const res = await axios.post("/api/v1/auth/login", {
          username,
          password,
        });

        if (res?.data?.success) {
          toast.success(res?.data?.message);
          updateAuthState(dispatch);
          navigate("/compiler");
          console.log(res?.data?.user);
        }
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Sign In</h1>

        <p className="mt-4 text-gray-300">
          "Sign in to Codify and dive into a world of coding creativity with
          ease."
        </p>
      </div>

      <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full bg-gray-200 placeholder:text-gray-500 text-black rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              className="w-full bg-gray-200 placeholder:text-gray-500 text-black rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-300">
            No account?
            <Link to={"/signup"} className="underline pl-1" href="#">
              Sign up
            </Link>
          </p>

          <SubmitButton
            handleSubmit={handleSubmit}
            text={loading ? "Signing..." : "Sign In"}
            color={"bg-blue-500"}
            hoverColor={"hover:bg-blue-600"}
            px={"px-5"}
            py={"py-3"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
