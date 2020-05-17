import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from './components/Skeleton'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="App">
    <Skeleton
    data={data}/>

     
    </div>
  );
}

export default App;



// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./components/About";
// import Heroes from "./components/Heroes";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Welcome from "./components/welcome";
// import Home from "./components/Home";
// import Users from "./components/Users"


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Navbar />

//         <div className="App">
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/about" exact component={About} />
//             <Route path="/heroes" exact component={Heroes} />
//             <Route path="/heroes/:id" component={Hero} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
