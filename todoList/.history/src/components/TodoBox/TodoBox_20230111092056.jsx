import React from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
import {FaSun} from 'react-icons/fa';
import TodoHeader from '../TodoHeader/TodoHeader';

function TodoBox(props) {
  return (
    <div className={styles.todoBox}>
      <TodoHeader/>
      <div className={styles.todoList}>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
      <footer className={styles.footer}>
        <div className={styles.todoInput}>
          <input type="text" />
          <button>add</button>
        </div>
      </footer>
    </div>
  );
}

export default TodoBox;