import React, { useEffect, useState } from "react";
import "../../styles/welcome.css";

const Welcome = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch("/api/hobbies")
      .then((res) => res.json())
      .then((hobbies) => {
        setHobbies(hobbies);
        console.log("Hobbies fetched...", hobbies);
      });
  }, []);

  const name = "Anisa Mohamed";

  return (
    <div>
      <h2>Welcome to your React App!!!!</h2>
      <h4>A React - Express Starter Pack by {name}</h4>
      <h3>Things I Love &#x1F60A;</h3>

      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>
            {hobby.hobby}
            <br />
            <span role="img">{hobby.emoji}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Welcome;
