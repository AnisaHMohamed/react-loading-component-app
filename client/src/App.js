import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Heroes from "./components/Heroes";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Welcome from "./components/welcome";
import Home from "./components/Home";
import Users from "./components/Users";


const App = () => {


    return (
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/heroes" exact component={Heroes} />
            <Route path="/users" exact component={Users} />
            <Route path="/heroes/:id" component={Hero} />
          </Switch>
        </div>
      </Router>
    );
  }


export default App;
