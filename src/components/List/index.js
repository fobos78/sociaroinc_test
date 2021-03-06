import React, { useState, useContext } from 'react';

import ThemeContext from '../../context';
import './List.css';

function List() {
  const { data, setData, list, setList, city, setCity, oldcity, setOldCity, flag, setFlag, KEY } = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  function inputChange(event) {
    setSearch(event.target.value);
  }
  function delCity(name) {
    const newList = list.filter((el) => el.name !== name);
    setList(newList);
    delete localStorage[name.toLowerCase()];
  }
  function addCity() {
    setCity(search);
    setSearch('');
  }
  function choiceCity(el) {
    setData(el);
  }
  return (
    <div className="List">
      <h3>{oldcity}</h3>
      <div className="inputList">
        <input onChange={inputChange} value={search} />
        <button type="button" onClick={addCity}>Add City</button>
      </div>
      {
        list.map((el) => (
          <div key={Math.random()} className="listCity">
            <h4 onClick={() => choiceCity(el)}>City:{el.name}</h4>
            <h4>Temp:{Math.floor(el.main.temp - 272)}C</h4>
            <button type="button" onClick={() => { delCity(el.name); }}>X</button>
          </div>
        ))
      }
    </div>
  );
}

export default List;
