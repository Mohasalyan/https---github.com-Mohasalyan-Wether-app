import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ShearedLayOut from "./components/ShearedLayOut";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Forecast from "./pages/Forecast";
import SignIn from "./pages/SignIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShearedLayOut />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
        {
          path: "/forecast",
          element: <Forecast />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
