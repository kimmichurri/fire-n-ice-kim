import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

export class CardContainer extends Component {
  render() {
    const displayHouses = this.props.houses.map((house) => {
      console.log(house)
      return <Card {...house} key={house.name} />
    });
    return (
      <div>
        {this.props.loading && <Loader />}
        {displayHouses}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses,
  loading: state.loading
});

export default connect (mapStateToProps, null)(CardContainer);