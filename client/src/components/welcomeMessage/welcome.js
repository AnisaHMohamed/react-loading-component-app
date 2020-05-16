import React, { Component }  from 'react';
import '../../styles/welcome.css';


class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      hobbies: []
    };
  }
  
  componentDidMount() {
    fetch('/api/hobbies')
      .then(res => res.json())
      .then(hobbies => this.setState({hobbies}, () => console.log('Hobbies fetched...', hobbies)));
  }
  render(){
    
  const name = 'Anisa Mohamed';
  return (
    <div>
    <h2>Welcome to your React App!!!!</h2>
  <h4>A React - Express Starter Pack by {name}</h4>
  <h3>Things I Love &#x1F60A;</h3>

  <ul>
    {this.state.hobbies.map(hobby => 
                                    <li key={hobby.id}>
                                      {hobby.hobby} 
                                      <br/> 
                                      <span role="img">{hobby.emoji}</span> 
                                    </li>
    )}

  </ul>

    </div>
  );
}}

export default Welcome;
