import { useEffect, useState } from "react";

function MarkAttedence() {
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
  console.log(isStudentData);
  return <div className="w-full">Hello{
  }
  </div>;
}

export default MarkAttedence;
