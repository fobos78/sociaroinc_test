import React, { useState, useEffect } from 'react';

import Day from './components/Day';
import List from './components/List';
import ThemeContext from './context';
import './App.css';

// 330216f9e3042b8a57a7865c3de67865
// 8ddb2ae4d480545c1441bb2374c9ff6d
function App() {
  //const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d';
  const [key, setKey] = useState('');
  const [city, setCity] = useState('Moscow');
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const [oldcity, setOldCity] = useState('');
  const [flag, setFlag] = useState(false);

  async function dataWhetherCity() {
    const respons = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    if (respons.ok) {
      const result = await respons.json();
      localStorage[`${city}`] = city;
      setList([...list, result]);
      setOldCity('');
    } else {
      setOldCity('Такого города нет');
    }
  }
  async function myKey() {
    const respons = await fetch('/api/key');
    const result = await respons.json();
    setKey(result.KEY);
    console.log('test', respons);
    console.log('result', result.KEY);
    console.log('key', key);
  }

  useEffect(() => {
    myKey();
  }, [key]);
  useEffect(() => {
    dataWhetherCity();
    // for (let i = 0; i < localStorage.length; i++) {
    //   setCity(localStorage.key(i));
    // }
  }, [city, key]);


  return (
    <div className="App">
      <ThemeContext.Provider value={{
        data, setData, list, setList, city, setCity, oldcity, setOldCity, flag, setFlag, key,
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
