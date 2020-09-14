import React, { useState, useEffect } from 'react';

import Day from './components/Day';
import List from './components/List';
import ThemeContext from './context';
import './App.css';

// 330216f9e3042b8a57a7865c3de67865
function App() {
  const KEY = '330216f9e3042b8a57a7865c3de67865';
  const [city, setCity] = useState('Moscow');
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const [oldcity, setOldCity] = useState('');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function dataWhetherCity() {
      const respons = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      if (respons.ok) {
        const result = await respons.json();
        setList([...list, result]);
        setOldCity('');
      } else {
        setList(list);
        setOldCity('Такого города нет');
      }
    }
    dataWhetherCity();
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
