import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../styles/Skeleton.css';

const Heroes = () => {
  useEffect(() => {
    axios
      .get("http://superheroapi.com/api.php/10163089335315156/search/woman")
      .then((res) => setSheroes(res.data.results));
   
  }, []);

  const [sheroes, setSheroes] = useState([]);

  return (
    <div>
    <ul>
      <li><h1>Super Women </h1></li>
    
      {sheroes.map((shero) => (
        <li key={shero.id} className="skeleton-item">
          <Link to={`/heroes/${shero.id}`}>
            <h1>{shero.name}</h1>
          </Link>
          <img
          
            src={shero.image.url}
            alt={shero.name}
            height="300rem"
            width="300rem"
          />
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Heroes;
