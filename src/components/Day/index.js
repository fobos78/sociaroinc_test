import React, { useContext } from 'react';

import ThemeContext from '../../context';
import './Day.css';

function Day() {
  const { data, setData, list, setList, city, setCity, KEY } = useContext(ThemeContext);
  return (
    <div className="Day">
      Day
    </div>
  );
}

export default Day;
