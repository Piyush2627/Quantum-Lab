import TextRevel from "../../animation/TextRevel/TextRevel";
import SearchIcon from "@mui/icons-material/Search";
function StudentsAttendeance() {
  return (
    <div>
      <TextRevel>
        <div className=" text-center font-bold text-xl mt-5 ">
          Student Attendance Management Portal
        </div>
      </TextRevel>
      <TextRevel>
        <div className="p-5 m-5  border rounded-md">
          <div className="text-xl font-semibold">Find your profile</div>
          <div className="mt-3">
            <div className="bg-violet-400 w-max flex items-center rounded-md">
              <SearchIcon className=" text-white pl-2" fontSize="large" />
              <input
                type="text"
                className="items-cente flex r pl-2 w-full h-10 bg-violet-400 text-white text-base focus:ring-0 focus:border-0 active:border-0 active:ring-0 placeholder:text-white"
                placeholder="Your ID"
              />
              <button className="px-4 text-white ">search</button>
            </div>
          </div>
        </div>
      </TextRevel>
    </div>
  );
}

export default StudentsAttendeance;
