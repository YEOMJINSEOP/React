import React from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
import {FaSun} from 'react-icons/fa';

function TodoBox(props) {
  return (
    <div className={styles.todoBox}>
      <header>
        <FaSun/>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </header>
      <div className={styles.todoList}>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
      <footer className={styles.todoInput}>
        <input type="text" />
        <input type="submit" value='add'/>
      </footer>
    </div>
  );
}

export default TodoBox;