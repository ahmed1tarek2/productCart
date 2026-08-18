import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";
import Main from "../page/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Main /> }],
  },
]);
