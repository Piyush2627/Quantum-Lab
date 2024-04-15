import { useEffect, useRef, useState } from "react";

interface EvnetModelProps {
  EventModelCloseFunction: () => void;
  EventState: boolean;
}

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

function EventModel({ EventModelCloseFunction, EventState }: EvnetModelProps) {
  const [isStudentData, setIsStudentData] = useState<StudentDataProps[]>([]);
  const ModelInnerContainerRef = useRef<HTMLDivElement>(null);
  const sliceStudentData = isStudentData.slice(0, 3);

  useEffect(() => {
    fetch("http://localhost:4000/api/students")
      .then((response) => response.json())
      .then((data) => setIsStudentData(data));
  }, []);

  useEffect(() => {
    console.log("ModelInnerContainerRef");
  }, [EventState]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ModelInnerContainerRef.current &&
        !ModelInnerContainerRef.current.contains(event.target as Node)
      ) {
        EventModelCloseFunction();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [EventState]);
  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center absolute z-10 bg-opacity-50 bg-transparent  top-0 left-0">
        <div
          ref={ModelInnerContainerRef}
          className="bg-white p-5 max-w-md rounded-md border-2 border-violet-300"
        >
          <div>
            <div className="text-2xl text-center font-bold">Event Name</div>
            <div className="flex justify-between">
              <div className=" my-3 text-lg font-bold">Event decreption </div>
              <div></div>
            </div>
            <div>
              <p className=" text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, unde.
              </p>
            </div>
          </div>
          <div className=" flex justify-between">
            <div>
              {" "}
              <div className="my-3 text-lg font-bold">Date</div>
              <input type="date" />
            </div>
          </div>
          <div>
            <p className="my-3 text-lg font-bold">Students Data</p>
            <p className="my-3 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              voluptas ex suscipit modi, accusantium eos tenetur nobis excepturi
            </p>
          </div>
          <div>
            {sliceStudentData.map((ele, index) => {
              return <div key={index}>{ele.email}</div>;
            })}
          </div>
          <div className="flex justify-end">
            <button
              className="bg-violet-600 text-white py-2 rounded-md px-4"
              onClick={EventModelCloseFunction}
            >
              {" "}
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventModel;
