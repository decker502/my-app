import React, { lazy, FC } from "react";

import { useRoutes } from "react-router-dom";
import LayoutPage from "./pages/layout";
// import Welcome from "./pages/welcome";
import Demo from "./pages/demo";
const Welcome = lazy(() => import("./pages/welcome"));

const routeList = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />
      },
      {
        path: "/demo",
        element: <Demo />
      }
    ]
  }
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
