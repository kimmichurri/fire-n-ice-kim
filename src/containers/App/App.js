import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { houseData } from '../../actions';
import { isLoading } from '../../actions';
import CardContainer from '../CardContainer/CardContainer';
import Loader from '../../components/Loader/Loader';

export class App extends Component {

  componentDidMount = () => {
    this.getHouses();
  } 

  getHouses = async () => {
    const url = 'http://localhost:3001/api/v1/houses'
    try {
      const response = await fetch(url);
      this.props.isLoading(true);
      if(!response.ok) {
        throw new Error()
      }
      const houses = await response.json();
      console.log('houses', houses);
      this.props.houseData(houses);
      this.props.isLoading(false);
    } catch(error) {
      console.log(error.message)
      //this is where you will want to dispatch an ac to set error message in store
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
        {this.props.loading ? <Loader /> : <CardContainer />}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  loading: state.loading
});

export const mapDispatchToProps = (dispatch) => ({
  houseData: (houses) => dispatch(houseData(houses)),
  isLoading: (boolean) => dispatch(isLoading(boolean))
});

export default connect(null, mapDispatchToProps)(App);
