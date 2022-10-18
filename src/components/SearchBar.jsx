import React from 'react';

import style from './SearchBar.module.css';
import {RiSearch2Line, RiRoadMapLine} from 'react-icons/ri';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <form 
    className={style.searchBar} 
    onSubmit={(e)=>{
      e.preventDefault();
      const input = document.getElementById('cityInput');
      onSearch(input.value);
      input.value = "";
    }}
    >
      <RiRoadMapLine className={style.cityIcon}/>
      <input id='cityInput' className={style.plcHolder} placeholder='Ciudad...' />
      <button className={style.addBtn} type="submit"><RiSearch2Line/></button>
    </form>
  );
};