import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import MarkAttedenceAdmin from "../components/pages/MarkAttedanceAdmin/MarkAttedanceAdmin";
import DasboardLayout from "./DasboardLayout";
import AddStudentPage from "../components/pages/AddStudentPage/AddStudentPage";
import MarksheetDoc from "../components/pages/MakeMarksheet/MarksheetDoc";
import EventHandling from "../components/pages/EventHandling/EventHandling";
import Homepage from "./Homepage";
const router = createBrowserRouter([
  {
    path: "/dash",
    element: <DasboardLayout />,
    children: [
      {
        path: "/dash/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/dash/attedence",
        element: <MarkAttedenceAdmin />,
      },

      {
        path: "/dashaddstudent",
        element: <AddStudentPage />,
      },
      {
        path: "/dashmakesheet",
        element: <MarksheetDoc />,
      },
      {
        path: "/dash/eventHandling",
        element: <EventHandling />,
      },
    ],
  },
  {
    path: "/",
    element: <Homepage />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
