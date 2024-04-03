import { useEffect, useState } from "react";

function MarkAttedence() {
  const [isStudentData, setIsStudentData] = useState([
    {
      first_name: "",
      last_name: "",
      email: "@gmail.com",
      address: "",
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
  console.log(isStudentData);
  return (
    <div className="w-full">
      <div className=" text-4xl text-center mt-4">
        <h1>Mark Attednece</h1>
      </div>
    </div>
  );
}

export default MarkAttedence;
