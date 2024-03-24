import { useRoutes } from "react-router";
import { Navigate } from "react-router-dom";
import { Error } from "../pages/Error";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import MainLayout from "../layouts/index";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Service } from "../pages/Service";
import { Logout } from "../pages/Logout";
import { Home } from "../pages/Home";
import GuestGuard from "../store/GuestGuard";

export default function index() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "logout",
          element: (
              <Logout />
          ),
        },
      ],
    },


    { path: "404", element: <Error /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
