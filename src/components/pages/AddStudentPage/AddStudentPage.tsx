import { useState } from "react";

function AddStudentPage() {
  const [first_name, setFirstname] = useState<string>("");
  const [last_name, setLastname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [address, setaddress] = useState<string>("");
  const [gender, setgender] = useState<string>("");
  const [roll_no, setRollNo] = useState<number>(0);
  const [enrollment_no, setEnrollmentNO] = useState<number>(0);
  const [year_admission, setYearAdmission] = useState<number>(0);
  const [phone, setphone] = useState<number>(0);
  const [sem, setSem] = useState<number>(0);
  const [batch, setBatch] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const hendleOnSubmit = async (e: any) => {
    e.preventDefault();
    const students = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      address: address,
      gender: gender,
      roll_no: roll_no,
      enrollment_no: enrollment_no,
      year_admission: year_admission,
      phone: phone,
      sem: sem,
      batch: batch,
    };
    const response = await fetch("http://localhost:4000/api/students", {
      method: "POST",
      body: JSON.stringify(students),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.message);
    }
    if (response.ok) {
      setFirstname("");
      setLastname("");
      setemail("");
      setaddress("");
      setgender("");
      setRollNo(0);
      setEnrollmentNO(0);
      setYearAdmission(0);
      setphone(0);
      setSem(0);
      setBatch(0);
      setError("THE STUDENT ID BEEN ADDED");

      console.log("new workout added", json);
    }
  };

  return (
    <>
      <div className="w-full p-5">
        <h1 className="text-3xl">Add Students</h1>
        <form className="w-full flex gap-4">
          <div className="w-1/2">
            <div className="mb-5">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First Name
              </label>
              <input
                type="first_name"
                id="first_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last Name
              </label>
              <input
                required
                type="text"
                id="last_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="roll_no"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Roll Number
              </label>
              <input
                type="number"
                id="roll_no"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setRollNo(parseInt(e.target.value));
                }}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="enrollment_no"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Enrollment Number
              </label>
              <input
                required
                type="text"
                id="enrollment_no"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setEnrollmentNO(parseInt(e.target.value));
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="year_admission"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Gender
              </label>
              <select
                id="year_admission"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setgender(e.target.value);
                }}
                required
              >
                <option>SELECT</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className=" w-1/2">
            <div className="mb-5">
              <label
                htmlFor="year_admission"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Year Admission
              </label>
              <select
                id="year_admission"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setYearAdmission(parseInt(e.target.value));
                }}
              >
                <option>SELECT</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="Address"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Address
              </label>
              <textarea
                id="message"
                className=" resize-none h-[133px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Please enter your full address....."
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setphone(parseInt(e.target.value));
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="sem"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Sem
              </label>
              <select
                id="sem"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setSem(parseInt(e.target.value));
                }}
              >
                <option>SELECT</option>
                <option>1 sem</option>
                <option>2 sem</option>
                <option>3 sem</option>
                <option>4 sem</option>
                <option>5 sem</option>
                <option>6 sem</option>
              </select>
            </div>
            <div className=" mb-5">
              <label
                htmlFor="batch"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Batch
              </label>
              <select
                id="batch"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setBatch(parseInt(e.target.value));
                }}
              >
                <option>SELECT</option>
                <option>1 batch</option>
                <option>2 batch</option>
                <option>3 batch</option>
                <option>4 batch</option>
                <option>5 batch</option>
                <option>6 batch</option>
              </select>
            </div>
          </div>
        </form>{" "}
        <button
          type="submit"
          onClick={hendleOnSubmit}
          className="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Register new account
        </button>
        {error && <div className="error">{error} </div>}
      </div>
    </>
  );
}

export default AddStudentPage;
