import DashboardSidebar from "../components/common/DashboardSidebar/DashboardSidebar";
import { Outlet } from "react-router-dom";
import Navigation from "../components/common/Navigation/Navigation";

function DasboardLayout() {
  return (
    <div>
      <Navigation />
      <div className="block lg:flex ">
        <div className=" w-full flex-grow  lg:max-w-xs justify-center  p-4 border-r space-y-4 lg:h-screen lg:sticky top-0">
          <DashboardSidebar />
        </div>
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DasboardLayout;
