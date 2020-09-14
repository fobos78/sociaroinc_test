import React, { useState, useContext, useEffect } from 'react';

import ThemeContext from '../../context';
import './List.css';

function List() {
  const { data, setData, list, setList, city, setCity, KEY } = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  const [oldcity, setOldCity] = useState('');
  console.log('data>>>>', data);

  function inputChange(event) {
    setSearch(event.target.value);
  }
  function delCity(id) {
    const newList = list.filter((el) => el.id !== id);
    setList(newList);
  }
  function addCity() {
    setCity(search);
    setSearch('');
  }
  function choiceCity(id) {
    const actualCity = list.find((el) => el.id === id);
    setData(actualCity);
  }
  useEffect(() => {
    async function dataWhetherCity() {
      const respons = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      if (respons.ok) {
        const result = await respons.json();
        console.log('result', result);
        setList([...list, result]);
        setOldCity('');
      } else {
        setList(list);
        setOldCity('Такого города нет');
      }
    }
    dataWhetherCity();
  }, [city, KEY, setList]);
  useEffect(() => {
    const actualCity = list.find((el) => el.name === 'Moscow');
    setData(actualCity);
  }, [setData]);
  return (
    <div className="List">
      <h3>{oldcity}</h3>
      <div>
        <input onChange={inputChange} value={search} />
        <button type="button" onClick={addCity}>Добавить город</button>
      </div>
      {
        list.map((el) => (
          <div key={el.name} className="listCity">
            <h4 onClick={() => { choiceCity(el.id); }}>Город:{el.name}</h4>
            <h4>Температура:{Math.floor(el.main.temp - 272)}C</h4>
            <button type="button" onClick={() => { delCity(el.id); }}>X</button>
          </div>
        ))
      }
    </div>
  );
}

export default List;
