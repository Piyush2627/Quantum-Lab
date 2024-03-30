import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import MarkAttedence from "../components/pages/MarkAttedence/MarkAttedence";
import DasboardLayout from "./DasboardLayout";
import TestingWorkoutPage from "../components/pages/TestingWorkoutPage/TestingWorkoutPage";
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
        path: "/testing",
        element: <TestingWorkoutPage />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
