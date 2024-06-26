import { useEffect, useState } from "react";
import StudentPagenationTable from "../../common/studentPagenationTable/StudentPagenationTable";
import BasicCard from "../../common/BasicCard/BasicCard";
import TextRevel from "../../animation/TextRevel/TextRevel";

interface StudentDataProps {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  gender: string;
  roll_no: number;
  enrollment_no: number;
  year_admission: number;
  phone: number;
  sem: number;
}

function Dashboard() {
  const [isStudentData, setIsStudentData] = useState<StudentDataProps[]>([]);
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
              <TextRevel>
                <div className="mt-12 sm:text-8xl text-6xl ">Quantum Lab</div>
              </TextRevel>
              <TextRevel>
                <div className="sm:text-4xl  text-2xl"> Student Management</div>
                <div className="text-xl sm:text-lg text-gray-400">
                  Efficiently Manage Student Activities and Resources
                </div>
              </TextRevel>
            </div>
          </div>
          <TextRevel Animationdelay={0.3}>
            <div className="flex space-x-4 justify-center mt-2">
              <BasicCard
                contain={isStudentData.length}
                header="Student Count"
              />
              <BasicCard
                contain={isStudentData.length}
                header="Current Events"
              />
              <BasicCard
                contain={isStudentData.length}
                header="Total Count Of Student"
              />
            </div>
          </TextRevel>
          <TextRevel Animationdelay={0.6}>
            <div className="container m-auto text-center mt-8">
              <StudentPagenationTable data={isStudentData} />
            </div>
          </TextRevel>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
