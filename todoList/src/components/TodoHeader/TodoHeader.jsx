import React from 'react';
import {BiSun} from 'react-icons/bi';
import styles from './TodoHeader.module.css';

function TodoHeader(props) {
  return (
      <header>
        <BiSun className={styles.darkThemeBtn}/>
        <div className={styles.filterBtns}>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </header>
  );
}

export default TodoHeader;