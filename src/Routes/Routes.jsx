import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFoundPage from "../Pages/ErrorPage/NotFoundPage";
import HomePage from "../Pages/HomePage/HomePage";
import IndividualMusicPage from "../Pages/IndividualMusic/individualMusicPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <IndividualMusicPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
