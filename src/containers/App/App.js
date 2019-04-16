import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { houseData } from '../../actions';

export class App extends Component {

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
      const houses = await response.json();
      console.log('houses', houses);
      this.props.houseData(houses);
    } catch(error) {
      console.log(error.message)
      //this is where you will want to dispatch error.message to be set in store
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

export const mapDispatchToProps = (dispatch) => ({
  houseData: (houses) => dispatch(houseData(houses))
});

export default connect(null, mapDispatchToProps)(App);
