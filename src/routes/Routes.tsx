import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import MarkAttedenceAdmin from "../components/pages/MarkAttedanceAdmin/MarkAttedanceAdmin";
import DasboardLayout from "./DasboardLayout";
import AddStudentPage from "../components/pages/AddStudentPage/AddStudentPage";
import MarksheetDoc from "../components/pages/MakeMarksheet/MarksheetDoc";
import EventHandling from "../components/pages/EventHandling/EventHandling";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DasboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "/attedence",
        element: <MarkAttedenceAdmin />,
      },

      {
        path: "/addstudent",
        element: <AddStudentPage />,
      },
      {
        path: "/makesheet",
        element: <MarksheetDoc />,
      },
      {
        path: "/eventHandling",
        element: <EventHandling />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
