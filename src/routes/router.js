import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import Location from "../pages/Location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/location",
        element: <Location />,
      },
    ],
  },
]);
export default router;
