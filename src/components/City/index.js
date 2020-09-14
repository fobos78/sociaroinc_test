import React from 'react';

import Day from '../Day';
import Night from '../Night';
import './City.css';

function City() {

  return (
    <div className="City">
      <Day />
      <Night />
    </div>
  );
}

export default City;
