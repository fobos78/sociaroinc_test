import React, { useContext } from 'react';

import ThemeContext from '../../context';
import './Night.css';

function Night() {
  const { data, setData, list, setList, city, setCity, KEY } = useContext(ThemeContext);
  return (
    <div className="Night">
      Night
    </div>
  );
}

export default Night;
