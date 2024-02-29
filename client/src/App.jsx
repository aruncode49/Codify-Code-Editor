import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  Login,
  Signup,
  PageNotFound,
  Compiler,
  SavedCode,
} from "./pages";
import Layout from "./layout/Layout";
import { updateAuthState } from "./utils/updateAuthState";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {
    updateAuthState(dispatch);
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

  return <RouterProvider router={router} />;
};

export default App;
