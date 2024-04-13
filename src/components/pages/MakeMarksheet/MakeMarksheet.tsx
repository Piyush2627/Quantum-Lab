import { useState, useEffect, ChangeEvent } from "react";

interface Student {
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

function MakeMarksheet() {
  const [isStudentData, setIsStudentData] = useState<Student[]>([]);
  const [filterData, isFliterData] = useState<Student[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/students")
      .then((response) => response.json())
      .then((data) => setIsStudentData(data));
  }, []);

  const handleInputChange = (
    index: number,
    type: "internal" | "external" | "oral",
    value: string
  ) => {
    const updatedStudents = [...isStudentData];
    updatedStudents[index][type] = Number(value);
    setIsStudentData(updatedStudents);
  };

  const calculateTotal = (student: Student) => {
    return (
      (student.internal || 0) + (student.external || 0) + (student.oral || 0)
    );
  };

  return (
    <div className="p-5">
      <p className="text-center text-xl mb-4">Marksheet</p>
      <div>
        <input
          type="text"
          placeholder="filter the batch"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const newdata = isStudentData.filter((ele) =>
              ele.first_name.includes(value)
            );
            isFliterData(newdata);
          }}
        />
      </div>
      <table className="border-2 w-full">
        <thead>
          <tr className="text-left bg-slate-500 text-white">
            <th className="p-2">Name</th>
            <th className="p-2">Roll Number</th>
            <th className="p-2">Batch</th>
            <th className="p-2">Enrollment No</th>
            <th className="p-2">Internal</th>
            <th className="p-2">External</th>
            <th className="p-2">Oral</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((data, index) => (
            <tr key={index}>
              <td className="p-2">
                {data.first_name} {data.last_name}
              </td>
              <td className="p-2">{data.roll_no}</td>
              <td className="p-2">{data.batch}</td>
              <td className="p-2">{data.enrollment_no}</td>
              <td className="p-2">
                <input
                  type="text"
                  value={data.internal || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(index, "internal", e.target.value)
                  }
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={data.external || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(index, "external", e.target.value)
                  }
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={data.oral || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(index, "oral", e.target.value)
                  }
                />
              </td>
              <td className="p-2">{calculateTotal(data)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MakeMarksheet;
