import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import MarkAttedenceAdmin from "../components/pages/MarkAttendanceAdmin/MarkAttedanceAdmin";
import DasboardLayout from "./DasboardLayout";
import AddStudentPage from "../components/pages/AddStudentPage/AddStudentPage";
import MarksheetDoc from "../components/pages/MakeMarksheet/MarksheetDoc";
import EventHandling from "../components/pages/EventHandling/EventHandling";
import LoginLayout from "./LoginLayout";
import MainLayout from "./MainLayout";
import StudentsAttendeance from "../components/pages/StudentsAttendance/StudentsAttendeance";
const router = createBrowserRouter([
  {
    path: "/dash",
    element: <DasboardLayout />,
    children: [
      {
        path: "/dash",
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
    element: <LoginLayout />,
  },
  {
    path: "/Student",
    element: <MainLayout />,
    children: [
      {
        path: "/Student/Attendence",
        element: <StudentsAttendeance />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
