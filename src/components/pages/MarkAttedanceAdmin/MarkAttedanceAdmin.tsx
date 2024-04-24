import React, { useEffect, useState } from "react";
import BasicCard from "../../common/BasicCard/BasicCard";

interface AttedanceDataProps {
  _id: string;
  student: string;
  date: string;
  system_used: string;
  comment: string;
  status: boolean;
}
interface StudentDataProps {
  _id: string;
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
  batch: number;
  internal?: number;
  external?: number;
  oral?: number;
}

function MarkAttedanceAdmin() {
  const [attedanceData, setAttedanceData] = useState<AttedanceDataProps[]>([]);
  const [studentData, setStudentData] = useState<StudentDataProps[]>([]);
  const [studentId, setStudentId] = useState<string>(""); // State variable for student ID
  const [searchName, setSearchName] = useState<string>(""); // State variable for search name
  const [results, setResults] = useState<AttedanceDataProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/attendance")
      .then((response) => response.json())
      .then((data) => setAttedanceData(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/api/students")
      .then((response) => response.json())
      .then((data) => setStudentData(data));
  }, []);

  const inputhandelchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value); // Update the search name state based on input value
    const matchingStudent = studentData.find(
      (student) => student.first_name === event.target.value
    );
    if (matchingStudent) {
      setStudentId(matchingStudent._id); // Set the student ID based on matching first name
    } else {
      setStudentId(""); // Reset student ID if no matching student is found
    }
  };
  const handleClick = () => {
    const filteredData = attedanceData.filter(
      (ele) => ele.student === studentId
    );
    setResults(filteredData);
  };

  return (
    <div>
      <div className="p-5">
        <BasicCard
          contain={attedanceData.length}
          header="Total Count Of Student"
        />
      </div>
      <div className="p-5 m-5 border rounded-md text-center shadow-md ">
        <p className=" text-lg font-semibold">
          Enter the student name to get the data
        </p>
        <input
          className="border mx-5 border-black rounded-sm"
          type="text"
          value={searchName}
          onChange={inputhandelchange}
        />
        <button
          className="border-0 bg-violet-300 px-4 py-2 rounded-md hover:bg-violet-500 hover:text-white "
          onClick={handleClick}
        >
          click
        </button>
      </div>
      {results.map((ele, index) => {
        return (
          <div key={index}>
            <div className="flex space-x-4 p-5 border-2 rounded-lg m-5 shadow-md">
              <div>{ele.date.slice(0, 10)}</div>
              <div>{ele.comment}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MarkAttedanceAdmin;
