import { useEffect, useState } from "react";

function AttendanceHeatMap() {
  const [isdata, setIsdata] = useState<any>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setIsdata(json));
  }, []);
  const newarray = isdata.slice(0, 31);
  console.log(isdata);
  return (
    <div className="flex gap-3 justify-center">
      <div className=" grid grid-cols-6 gap-2 grid-flow-row w-28">
        {newarray.map((item: any) => {
          return (
            <div key={item}>
              <div className=" size-4 rounded-sm  bg-violet-500"></div>
            </div>
          );
        })}
      </div>
      <div className=" grid grid-cols-6 gap-2 grid-flow-row w-28">
        {newarray.map((item: any) => {
          return (
            <div key={item}>
              <div className=" size-4 rounded-sm  bg-violet-500"></div>
            </div>
          );
        })}
      </div>
      <div className=" grid grid-cols-6 gap-2 grid-flow-row w-28">
        {newarray.map((item: any) => {
          return (
            <div key={item}>
              <div className=" size-4 rounded-sm  bg-violet-500"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AttendanceHeatMap;
