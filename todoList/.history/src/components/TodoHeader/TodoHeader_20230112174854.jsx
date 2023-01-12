import React from 'react';
import {BiSun} from 'react-icons/bi';
import styles from './TodoHeader.module.css';

function TodoHeader({handleFilter}) {
  
  const handleFilterBtn = (e) => {
    console.log(e.target.innerHTML);
  }

  return (
      <header>
        <BiSun className={styles.darkThemeBtn}/>
        <div className={styles.filterBtns}>
          <button onClick={(e) => {handleFilter(e.target.innerHTML)}}>All</button>
          <button onClick={handleFilterBtn}>Active</button>
          <button onClick={handleFilterBtn}>Completed</button>
        </div>
      </header>
  );
}

export default TodoHeader;