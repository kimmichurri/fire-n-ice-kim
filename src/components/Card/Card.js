import React from 'react';

export default function Card(props) {
  console.log('props', props)
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.founded}</p>
      <p>{props.seats}</p>
      <p>{props.titles}</p>
      <p>{props.coatOfArms}</p>
      <p>{props.ancestralWeapons}</p>
      <p>{props.words}</p>
    </div>
  )
}