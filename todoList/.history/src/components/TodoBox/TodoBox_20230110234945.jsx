import React from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
function TodoBox(props) {
  return (
    <div className={styles.todoBox}>
      <header>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </header>
      <div className={styles.todoList}>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
      <footer></footer>
    </div>
  );
}

export default TodoBox;