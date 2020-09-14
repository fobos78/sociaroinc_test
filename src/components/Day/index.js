import React, { useContext, useEffect } from 'react';

import ThemeContext from '../../context';
import './Day.css';

function Day() {
  const {
    data, setData, list, setList, city, setCity, flag, setFlag, KEY,
  } = useContext(ThemeContext);

  return (
    <>
      {console.log('data', data)}
      <div className="Day">
        {
          data
          && (
            <div>
              <h2>{data.name}</h2>
              <div className="listCityAll">
                <h3>min-{Math.floor(data.main.temp_min - 272)}</h3>
                <h3>max-{Math.floor(data.main.temp_max - 272)}</h3>
                <h3>clouds-{data.clouds.all}%</h3>
                <h3>humidity-{data.main.humidity}</h3>
                <button type="button" onClick={() => setData(false)}>Close</button>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Day;
