import { ChangeEvent, useState } from "react";

function TestingAddWorkout() {
  const [title, setTitles] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [load, setLoad] = useState<string>("");
  const [error, setError] = useState<string>("");

  const hendleOnSubmit = async (e: any) => {
    e.preventDefault();
    const workout = {
      title: title,
      reps: reps,
      load: load,
    };
    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.message);
    }
    if (response.ok) {
      setTitles("");
      setLoad("");
      setReps("");
      setError("");
      console.log("new workout added", json);
    }
  };

  return (
    <div>
      <form action="" onSubmit={hendleOnSubmit}>
        <label htmlFor="title">New Title</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTitles(e.target.value);
          }}
          value={title}
        />
        <label htmlFor="">reps</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setReps(e.target.value);
          }}
          value={reps}
        />
        <label htmlFor="">load</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setLoad(e.target.value);
          }}
          value={load}
        />
        <button type="submit">submit</button>
        {error && <div className="error">{error} </div>}
      </form>
    </div>
  );
}

export default TestingAddWorkout;
