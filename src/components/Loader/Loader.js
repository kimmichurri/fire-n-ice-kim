import React from 'react';
import wolf from '../../assets/wolf.gif';

export default function Loader() {
  return (
    <div>
      <h1>Loading...</h1>
      <img src={wolf}/>
    </div>
  )
}