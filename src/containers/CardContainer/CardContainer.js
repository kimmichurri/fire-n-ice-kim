import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';

export class CardContainer extends Component {
  render() {
    const displayHouses = this.props.houses.map((house) => {
      console.log(house)
      return <Card {...house} key={house.name} />
    });
    return (
      <div>
        {displayHouses}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses
});

export default connect (mapStateToProps, null)(CardContainer);