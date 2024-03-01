import React, { lazy, Suspense, useEffect, startTransition } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Compiler = lazy(() => import("./pages/Compiler"));
const SavedCode = lazy(() => import("./pages/SavedCode"));

import Layout from "./layout/Layout";
import { updateAuthState } from "./utils/updateAuthState";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    startTransition(() => {
      updateAuthState(dispatch);
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="compiler/:codeId?" element={<Compiler />} />
        <Route path="saved" element={<SavedCode />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <Suspense
      fallback={
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader /> {/* Render your loading indicator */}
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
