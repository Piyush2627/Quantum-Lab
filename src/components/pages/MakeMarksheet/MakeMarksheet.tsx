import { useState, useEffect } from "react";
function MakeMarksheet() {
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
    <div className="p-5">
      <p className="text-center text-xl mb-4 ">Marksheet</p>
      <table className="border-2 ">
        <tr>
          <th>Rollnumber</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Emrollment No</th>
        </tr>
        {isStudentData.map((data) => {
          return (
            <tr>
              <td>{data.roll_no}</td>
              <td>
                {data.first_name} {data.last_name}
              </td>
              <td>{data.batch}</td>
              <td>{data.enrollment_no}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default MakeMarksheet;
