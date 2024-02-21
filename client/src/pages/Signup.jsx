import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SubmitButton } from "../components";
import { validateForm } from "../utils/validation";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (validateForm(email, username, password)) {
        const res = await axios.post("/api/v1/auth/signup", {
          email,
          username,
          password,
        });

        if (res?.data?.success) {
          toast.success(res?.data?.message);
          // update redux store
          // navigate to
          console.log(res?.data?.user);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create Account</h1>

        <p className="mt-4 text-gray-300">
          "Join Codify now to unlock unlimited coding possibilities and embark
          on your journey with confidence."
        </p>
      </div>

      <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="username" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              className="w-full bg-gray-200 placeholder:text-gray-500 text-black rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

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
            Already have an account?
            <Link to={"/login"} className="underline pl-1" href="#">
              Sign In
            </Link>
          </p>

          <SubmitButton
            handleSubmit={handleSubmit}
            text={"Register"}
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

export default Signup;
