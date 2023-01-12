import React, { useState } from 'react';
import { useEffect } from 'react';
import {BiSun} from 'react-icons/bi';
import styles from './TodoHeader.module.css';

function TodoHeader({filter, handleFilter}) {

  const [btnClicked, setBtnClicked] = useState('All');
    
  return (
      <header>
        <BiSun className={styles.darkThemeBtn}/>
        <div className={styles.filterBtns}>
          <button className={btnClicked === 'All' ? styles.btnClicked : styles.btnNotClicked} onClick={(e) => {handleFilter(e.target.innerHTML)}}>All</button>
          <button className={btnClicked === 'Active' ? styles.btnClicked : styles.btnNotClicked} onClick={(e) => {handleFilter(e.target.innerHTML)}}>Active</button>
          <button className={btnClicked === 'Completed' ? styles.btnClicked : styles.btnNotClicked} onClick={(e) => {handleFilter(e.target.innerHTML)}}>Completed</button>
        </div>
      </header>
  );
}

export default TodoHeader;