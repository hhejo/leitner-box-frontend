import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Card from "./routes/card";
import CreateCard from "./routes/create-card";
import TodayCard from "./routes/today-card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "cards/:cardId", element: <Card /> },
      { path: "cards/create", element: <CreateCard /> },
      { path: "cards/today", element: <TodayCard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
