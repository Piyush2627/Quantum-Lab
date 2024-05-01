import TextRevel from "../../animation/TextRevel/TextRevel";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../common/InputComponent/InputComponent";
import AttendanceHeatMap from "../../common/AttendanceHeatMap/AttendanceHeatMap";

function StudentsAttendeance() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="flex">
        <button
          className="p-1 m-2 ml-5 border rounded-full hover:bg-violet-200"
          onClick={() => navigate(-1)}>
          <ArrowBackIcon fontSize="large" />
        </button>
        <div className="w-full text-center font-bold text-xl mt-5 ">
          Student Attendance Management Portal
        </div>
      </div>

      <TextRevel>
        <div className="p-5 m-5  border rounded-md">
          <div className="text-xl font-semibold">Find your profile</div>
          <div className="mt-3">
            <div className="bg-violet-500 shadow-violet-800 shadow-lg w-max flex items-center rounded-md">
              <SearchIcon className=" text-white pl-2" fontSize="large" />
              <input
                type="text"
                className="items-cente flex r pl-2 w-full h-10 bg-violet-500 text-white focus:ring-0 focus:border-0 active:border-0 active:ring-0 placeholder:text-white"
                placeholder="Your ID"
              />
              <button className="px-4 text-white ">Search</button>
            </div>
          </div>
          <div className="mt-5 space-x-5 flex justify-between">
            <div className="p-5 rounded-md border-2 w-full">
              <div className="font-bold text-lg"> Student's Name</div>
              <div className="">Mark Attendance</div>

              <div>
                <button className="py-2 mt-3   bg-violet-500 rounded-md text-white px-4 placeholder:text-white">
                  Mark Today
                </button>
              </div>
            </div>

            <div className="p-5 rounded-md border-2 w-full">
              <div className="mb-5">
                <InputComponent lableText="Comment" />
                <InputComponent lableText="Time Spent" />
                <InputComponent lableText="Used Tech No" />
              </div>
            </div>
            <div className="p-5 rounded-md border-2 w-full">
              <div className="text-center">
                <h1 className="font-semibold text-xl p-4 ">
                  Attendance Heat Map
                </h1>
              </div>
              <AttendanceHeatMap />
            </div>
          </div>
        </div>
      </TextRevel>
    </div>
  );
}

export default StudentsAttendeance;
