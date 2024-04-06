import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import MarkAttedence from "../components/pages/MarkAttedance/MarkAttedance";
import DasboardLayout from "./DasboardLayout";
import AddStudentPage from "../components/pages/AddStudentPage/AddStudentPage";
import MarksheetDoc from "../components/pages/MakeMarksheet/MarksheetDoc";
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
        element: <MarkAttedence />,
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
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
