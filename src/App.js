import React, { useState, useEffect } from 'react';

import Day from './components/Day';
import List from './components/List';
import ThemeContext from './context';
import './App.css';

// 330216f9e3042b8a57a7865c3de67865
function App() {
  const KEY = '330216f9e3042b8a57a7865c3de67865';
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const [oldcity, setOldCity] = useState('');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function dataWhetherCity() {
      const respons = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      if (respons.ok) {
        const result = await respons.json();
        localStorage[`${city}`] = city;
        console.log(city);
        setList([...list, result]);
        setOldCity('');
      } else {
        setOldCity('Такого города нет');
      }
    }
    for (let i = 0; i < localStorage.length; i++) {
      dataWhetherCity();
      setCity(() => localStorage.key(i));
      console.log('localStorage.key', i, localStorage.key(i));
      // console.log('city', city);
    }
  }, [city, KEY, setList]);

  return (
    <div className="App">
      <ThemeContext.Provider value={{
        data, setData, list, setList, city, setCity, oldcity, setOldCity, flag, setFlag, KEY,
      }}
      >
        {data &&
          <Day />
        }
        <List />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
