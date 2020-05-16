import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcomeMessage/welcome'


class App extends Component {
  render() {
      return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome/>
      </header>
    </div>
  );
}
}

export default App;
