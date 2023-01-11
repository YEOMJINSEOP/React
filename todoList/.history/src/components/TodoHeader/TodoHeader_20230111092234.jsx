import React from 'react';
import {FaSun} from 'react-icons/fa';
import styles from './TodoHeader.module.css';

function TodoHeader(props) {
  return (
      <header>
        <FaSun/>
        <div className={styles.filterBtn}>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </header>
  );
}

export default TodoHeader;