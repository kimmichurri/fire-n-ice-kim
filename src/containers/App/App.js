import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.getHouses();
  } 

  getHouses = async () => {
    const url = 'http://localhost:3001/api/v1/houses'
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error
      }
      const results = await response.json();
      console.log(results);
    } catch(error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

export default App;
