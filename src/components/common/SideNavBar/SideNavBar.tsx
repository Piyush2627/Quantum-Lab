 import CloseIcon from "@mui/icons-material/Close";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
interface SideBarProp {
  toggleSidebar: () => void;
}
function SideNavBar({ toggleSidebar }: SideBarProp) {
  return (
    <div>
      <div className=" flex justify-between items-center mb">
        <div>Logo</div>
        <button
          className="  hover:bg-gray-200 focus:outline-none font-semibold h-8 px-2 rounded-lg flex items-center focus:border-cyan-300active:border-cyan-300 active:border-s justify-center  "
          onClick={toggleSidebar}
        >
          <CloseIcon />
        </button>
      </div>
      <DashboardSidebar />
    </div>
  );
}

export default SideNavBar;
