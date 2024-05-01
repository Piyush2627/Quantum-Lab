import React, { useEffect, useState } from "react";
import TextRevel from "../../animation/TextRevel/TextRevel";
import EncryptedButton from "../../animation/EncryptedButton/EncryptedButton";
import { Link } from "react-router-dom";
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

//date elements
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
function MarkAttedanceAdmin() {
  const [attedanceData, setAttedanceData] = useState<AttedanceDataProps[]>([]);
  const [studentData, setStudentData] = useState<StudentDataProps[]>([]);
  const [studentId, setStudentId] = useState<string>(""); // State variable for student ID
  const [searchName, setSearchName] = useState<string>(""); // State variable for search name
  const [results, setResults] = useState<AttedanceDataProps[]>([]);
  const [date, setDate] = useState<string>(getDate());
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
  useEffect(() => {
    setDate(getDate());
  }, []);

  const inputhandelchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value); // Update the search name state based on input value
    const matchingStudent = studentData.find(
      (student) => student.first_name === event.target.value
    );
    if (matchingStudent) {
      setStudentId(matchingStudent._id); // Set the student ID based on matching first name
    } else {
      setStudentId("");
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
      <TextRevel>
        <p className=" text-center capitalize text-3xl font-semibold pt-5">
          manage attendance app
        </p>

        <p className=" text-center ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          pariatur voluptatum magni.
        </p>
      </TextRevel>
      <TextRevel>
        <div className="m-5 p-5 lg:border-2 lg:rounded-md ">
          <div className="flex space-x-5 lg:align-middle lg:items-center">
            <p>Select Your Profile</p>
            <Link to={"/Student/Attendence"}>
              <EncryptedButton buttonText="Student Section" />
            </Link>
            <div className="text-3xl">{date}</div>
          </div>
        </div>
      </TextRevel>
      <TextRevel Animationdelay={0.3}>
        <div className="p-5">
          <div className="lg:grid lg:space-x-5 space-x-0 grid-cols-3">
            <div className=" col-span-2 ">
              <div className=" border-2 rounded-xl p-5">
                <p className="text-gray-500">Attedance Report</p>
                <div className=" flex justify-between items-center">
                  <p className=" text-lg font-bold">Report</p>
                  <div className="font-bold text-sm text-white px-4 border rounded-lg  bg-violet-400 text-center py-2">
                    Month
                  </div>
                </div>
                <div className="border mt-4 rounded-lg p-5 relative">
                  this section will show the report of the attedence, This
                  section is going to be the graphecal representation of data
                  <img
                    src="https://i.ibb.co/SxS6JVX/Screenshot-2024-04-25-175201.png"
                    alt="Screenshot-2024-04-25-175201"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="border-2 rounded-xl p-5 flex flex-col">
              <p className="font-bold text-lg">Todays report</p>
              <p className="font-thin text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, non.
              </p>
              <div className=" text-center mt-2 font-semibold">Report</div>
              <div className="flex justify-between space-x-3 py-4">
                <div className=" p-1 w-full border-2 shadow-sm text-sm rounded-lg ">
                  <p className="text-center">Report</p>
                  <div className="text-center font-bold text-lg">20</div>
                </div>
                <div className=" p-1 w-full border-2 shadow-sm text-sm rounded-lg ">
                  <p className="text-center">Report</p>
                  <div className="text-center font-bold text-lg">20</div>
                </div>
                <div className=" p-1 w-full border-2 shadow-sm text-sm rounded-lg ">
                  <p className="text-center">Report</p>
                  <div className="text-center font-bold text-lg">20</div>
                </div>
              </div>
              <div className="font-bold text-lg">Percentage</div>
              <div className="w-full border rounded-md flex-grow mt-3">
                <div className="flex-col flex-grow space-y-2 p-3">
                  <div className="font-bold flex justify-between  px-2">
                    <div>Parcentage</div>
                    <div>20%</div>
                  </div>
                  <div className="bg-violet-400  text-violet-500 mx-2 rounded h-3.5  ">
                    .
                  </div>
                  <div className="font-bold flex justify-between  px-2">
                    <div>Parcentage</div>
                    <div>20%</div>
                  </div>
                  <div className="bg-violet-400 text-violet-500 mx-2 rounded h-3.5  ">
                    .
                  </div>
                  <div className="font-bold flex justify-between  px-2">
                    <div>Parcentage</div>
                    <div>20%</div>
                  </div>
                  <div className="bg-violet-400 text-violet-500 mx-2 rounded h-3.5  ">
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TextRevel>
      <div className="p-5 m-5 border rounded-md text-center shadow-sm ">
        <p className=" text-lg font-semibold">
          Enter the student name to get the datax
        </p>
        <input
          className="border mx-5 border-black rounded-sm"
          type="text"
          value={searchName}
          onChange={inputhandelchange}
        />
        <button
          className="border-0 bg-violet-300 px-4 py-2 rounded-md hover:bg-violet-500 hover:text-white "
          onClick={handleClick}>
          Click
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
      })}{" "}
      <TextRevel>
        <div className="m-5 p-5 border rounded-md  shadow-sm">
          <p className=" font-bold text-lg">System Used today</p>
          This will contain that whoe used the system and for how much time
          <p>I will make the updata as soon as possioble </p>
        </div>
      </TextRevel>
      <TextRevel>
        <div className="m-5 p-5 border rounded-md">
          <p className="font-bold text-lg ">Point System</p>
          <div className=" flex justify-between">
            <div>
              <p>Top players Point</p>
              <ul>
                <li>list of Students</li>
                <li>Student Name1</li>
                <li>Student Name2</li>
                <li>Student Name3</li>
              </ul>
            </div>
            <div>
              <div>Badges and Achievements:</div>
              <div>Points and Rewards:</div>
            </div>
          </div>
        </div>
      </TextRevel>
      <div className="m-5 p-5 rounded-md">
        <p className=" font-bold text-lg"> Low Attedancc alert</p>
        <p>
          This Section will show list of student who are having low rate of
          attedence in lab
        </p>
      </div>
    </div>
  );
}

export default MarkAttedanceAdmin;
