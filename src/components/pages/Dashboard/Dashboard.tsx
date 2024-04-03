import { useEffect, useState } from "react";
import BasicCard from "../../common/BasicCard/BasicCard";
import StudentPagenationTable from "../../common/studentPagenationTable/StudentPagenationTable";

function Dashboard() {
  const [isStudentData, setIsStudentData] = useState([
    {
      first_name: "piyush",
      last_name: "dahiwadkar",
      email: "piyushdahiwadkar89@gmail.com",
      address: "ravat",
      gender: "male",
      roll_no: 3482,
      enrollment_no: 3000123,
      year_admission: 2023,
      phone: 9662722205,
      sem: 2,
      batch: 3,
    },
  ]);
  useEffect(() => {
    fetch("http://localhost:4000/api/students")
      .then((response) => response.json())
      .then((data) => setIsStudentData(data));
  }, []);
  return (
    <>
      <div className=" flex justify-center w-full">
        <div className="mx-6 w-full">
          <div className="container m-auto flex justify-center items-center">
            <div className=" text-center">
              <div className="mt-12 sm:text-8xl text-6xl ">Quantum Lab</div>
              <div className="sm:text-4xl  text-2xl"> Student Management</div>
              <div className="text-xl sm:text-lg text-gray-400">
                Efficiently Manage Student Activities and Resources
              </div>
              <div></div>
            </div>
          </div>

          <div className="container m-auto text-center mt-16">
            <StudentPagenationTable data={isStudentData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
