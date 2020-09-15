import React, { useState, useEffect } from 'react';

import Day from './components/Day';
import List from './components/List';
import ThemeContext from './context';
import './App.css';

function App() {
  const [key, setKey] = useState('');
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const [oldcity, setOldCity] = useState('');
  const [flag, setFlag] = useState(false);
  const [i, setI] = useState(0);

  function pause(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
  }

  async function dataWhetherCity() {
    const respons = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    await pause(100);
    if (respons.ok) {
      const result = await respons.json();
      localStorage[`${city.toLowerCase()}`] = city.toLowerCase();
      setList([...list, result]);
      setOldCity('');
    } else {
      setOldCity('');
    }
    if (i < localStorage.length) {
      setI(() => i + 1);
    }
  }
  async function myKey() {
    const respons = await fetch('/api/key');
    const result = await respons.json();
    setKey(result.KEY);
  }

  useEffect(() => {
    dataWhetherCity();
    myKey();
    setCity(localStorage.key(i));
  }, [city, key, i]);

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
