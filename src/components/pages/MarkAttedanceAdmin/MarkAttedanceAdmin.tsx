import { useEffect, useState } from "react";
import NavSearvh from "../../common/NavSearch/NavSearvh";
import AttendanceCard from "../../common/AttendanceCard/AttendanceCard";

function MarkAttedence() {
  const [isStudentData, setIsStudentData] = useState([
    {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      gender: "",
      roll_no: 0,
      enrollment_no: 0,
      year_admission: 0,
      phone: 0,
      sem: 0,
      batch: 3,
      _id: "",
    },
  ]);
  const [isAttedanceData, setAttedanceData] = useState([
    {
      student: "",
      date: "",
      status: "",
      system_used: "",
      comment: "",
    },
  ]);

  //fetched data
  useEffect(() => {
    fetch("http://localhost:4000/api/attendance")
      .then((response) => response.json())
      .then((data) => setAttedanceData(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/api/students")
      .then((response) => response.json())
      .then((data) => setIsStudentData(data));
  }, []);

  //functions

  return (
    <div className="w-full p-5">
      <div className=" text-4xl">
        <h1>Mark Attedanece</h1>
      </div>
      <p className=" text-gray-500">Search For attedance report</p>
      <div className="mt-4 flex justify-between">
        <div>
          <NavSearvh />
        </div>
        <div>button</div>
      </div>
      <div>
        <div className="mt-4">
          All new attedance reports will be available in this section
        </div>
      </div>
      <div className="mt-4">
        <AttendanceCard />
      </div>
      <div className="mt-4">
        <AttendanceCard />
      </div>
    </div>
  );
}

export default MarkAttedence;
