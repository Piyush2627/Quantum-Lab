import React from "react";
import { useRef, useEffect } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SideNavBar from "../SideNavBar/SideNavBar";
import AttachmentIcon from "@mui/icons-material/Attachment";
import NavSearvh from "../NavSearch/NavSearvh";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import { GitHub } from "@mui/icons-material";
function Navigation() {
  const [sideNavBar, setSideNavBar] = React.useState(false);
  const [profileDraweer, setProfileDraweer] = React.useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);
  const profileDraweeref = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    setProfileDraweer(!profileDraweer);
  };

  const handleClick = () => {
    setSideNavBar(!sideNavBar);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDraweeref.current &&
        !profileDraweeref.current.contains(event.target as Node)
      ) {
        setProfileDraweer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDraweeref]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        setSideNavBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideNavRef]);

  return (
    <>
      <div className=" w-full border-b-2 border-b-gray-200 p-2">
        <div className="m-auto ">
          <div className=" flex justify-between">
            <div>
              <div className=" flex items-center gap-3">
                <button
                  onClick={handleClick}
                  className=" hover:bg-gray-200 px-2 rounded-md py-1"
                >
                  <MenuRoundedIcon />
                </button>
                <div className=" pr-5 text-lg">And Name</div>
              </div>
            </div>
            <div className="  items-center gap-4 flex ">
              <div className="hidden sm:block">
                <NavSearvh />
              </div>
              <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                <a href="https://github.com/Piyush2627">
                  <GitHub />
                </a>
              </div>
              <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                <AttachmentIcon />
              </div>
              <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                <AttachmentIcon />
              </div>
              <div>
                <img
                  onClick={handleProfileClick}
                  className="w-10 h-10 rounded-full"
                  src="https://picsum.photos/200"
                  alt="Rounded avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {sideNavBar && (
        <div
          ref={sideNavRef}
          className=" bg-white h-full w-80 absolute top-0 left-0 z-50 rounded-lg border-r-2 border-gray-300 p-4"
        >
          <SideNavBar toggleSidebar={handleClick} />
        </div>
      )}
      {profileDraweer && (
        <div
          ref={profileDraweeref}
          className=" bg-white h-full w-80 absolute top-0 right-0 z-50 rounded-lg border-l-2 border-gray-300 p-4"
        >
          <ProfileSideBar />
        </div>
      )}
    </>
  );
}

export default Navigation;
