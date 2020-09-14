import React, { useContext } from 'react';

import ThemeContext from '../../context';
import './Night.css';

function Night() {
  const { data, setData, list, setList, city, setCity, KEY } = useContext(ThemeContext);
  return (
    <>
      <div className="Day">
        {
          data
          && (
            <div>
              <h2>{data.name}-Night</h2>
              <div>
                <h3>min-{data.main.temp_min}</h3>
                <h3>max-{data.main.temp_max}</h3>
                <h3>clouds-{data.clouds.all}%</h3>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Night;
