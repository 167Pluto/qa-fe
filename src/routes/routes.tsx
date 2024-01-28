import { lazy } from "react";
import Layout from "../layout/Layout";

const LoginPage = lazy(() => import("../pages/auth/Login"));
const RegisterPage = lazy(() => import("../pages/auth/Register"));
const HomePage = lazy(() => import("../pages/Home"));

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
  ],
};

export default MainRoutes;
