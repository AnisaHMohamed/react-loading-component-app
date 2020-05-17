import '../styles/Skeleton.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="App">
    <ul className="contentWrapper">
      {data.length > 0 &&
        data.map((item) => {
          return (
            <li key={item.id} className="skeleton-item">
              <div>
                <img className="skeleton-img" src={item.avatar} />
              </div>
              <div className="skeleton-info">
                <p className="skeleton-name">
                  <strong>
                    {item.first_name} {item.last_name}
                  </strong>
                </p>
                <p className="skeleton-email">{item.email}</p>
              </div>
            </li>
          );
        })}
    </ul>
  </div>







   
  );
};

export default Users;