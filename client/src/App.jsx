import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, Login, Signup, PageNotFound, Compiler } from "./pages";
import Layout from "./layout/Layout";
import { updateAuthState } from "./utils/updateAuthState";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  console.log(isLogin);

  useEffect(() => {
    updateAuthState(dispatch);
  }, [isLogin]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="/compiler"
          element={isLogin ? <Compiler /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/compiler/:codeId"
          element={isLogin ? <Compiler /> : <Navigate to={"/login"} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
