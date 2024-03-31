import { useEffect, useState } from "react";
import TestingAddWorkout from "./TestingAddWorkout";

function TestingWorkoutPage() {
  const [workouts, setWorkouts] = useState([
    {
      title: "new",
      reps: 40,
      load: 10,
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:4000/api/workouts")
      .then((response) => response.json())
      .then((data) => setWorkouts(data));
  }, []);

  return (
    <div className="w-full">
      <div className="">
        <h1 className=" text-4xl p-4">Add workouts</h1>
        <TestingAddWorkout />
      </div>
      <div className=" flex">
        {workouts.map((workout, index) => (
          <div key={index}>
            <div className="bg-gray-300 m-2 p-3 rounded-md">
              <p className=" text-3xl">{workout.title}</p>
              <p className=" text-xl">Reps:{workout.reps}</p>
              <p className=" text-xl">Load:{workout.load}</p>
            </div>
            {/* Add more properties as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestingWorkoutPage;
