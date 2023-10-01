import React, { useEffect, useState } from "react";

import WorkoutDetails from "../Components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workout'); // Use the correct API endpoint
        const json = await response.json();

        if (response.ok) {
          setWorkouts(json);
        } else {
          console.error("API request failed");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
