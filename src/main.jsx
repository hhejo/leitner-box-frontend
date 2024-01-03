import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import ErrorPage from "./error-page";
import Layout from "./layout";

const router = createBrowserRouter([
  { element: <Layout />, errorElement: <ErrorPage />, children: routes },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
