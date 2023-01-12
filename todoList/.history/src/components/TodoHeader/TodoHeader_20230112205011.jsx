import React, { useState } from 'react';
import { useEffect } from 'react';
import {BiSun} from 'react-icons/bi';
import styles from './TodoHeader.module.css';

function TodoHeader({filter, handleFilter}) {

  const [btnClicked, setBtnClicked] = useState('All');

  const handleBtnClick = (e) => {
    const btnName = e.target.innerHTML;
    handleFilter(btnName); 
    setBtnClicked(btnName);
  }

  return (
      <header>
        <BiSun className={styles.darkThemeBtn}/>
        <div className={styles.filterBtns}>
          <button className={btnClicked === 'All' ? styles.btnClicked : styles.btnNotClicked} onClick={(e) => {handleFilter(e.target.innerHTML); setBtnClicked(e.target.innerHTML)}}>All</button>
          <button className={btnClicked === 'Active' ? styles.btnClicked : styles.btnNotClicked} onClick={(e) => {handleFilter(e.target.innerHTML);  setBtnClicked(e.target.innerHTML)}}>Active</button>
          <button className={btnClicked === 'Completed' ? styles.btnClicked : styles.btnNotClicked} onClick={(e) => {handleFilter(e.target.innerHTML);  setBtnClicked(e.target.innerHTML)}}>Completed</button>
        </div>
      </header>
  );
}

export default TodoHeader;