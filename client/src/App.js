import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Welcome from './components/welcome'


class App extends Component {
  render() {
      return (
        <Router> 
        <div className="App">
          <Navbar />
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/heroes" exact component={Heroes}/>
          <Route path="/heroes/:id"  component={Hero}/>  
          </Switch>
          <Welcome/>

        
        </div>
      </Router>
   
  );
}
}

export default App;
