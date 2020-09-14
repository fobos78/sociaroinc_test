import React, { useState, useEffect } from 'react';

import City from './components/City';
import List from './components/List';
import ThemeContext from './context';
import './App.css';

// 330216f9e3042b8a57a7865c3de67865
function App() {
  const KEY = '330216f9e3042b8a57a7865c3de67865';
  const [city, setCity] = useState('Moscow');
  const [data, setData] = useState({});
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <ThemeContext.Provider value={{
        data, setData, list, setList, city, setCity, KEY,
      }}
      >
        <City />
        <List />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
