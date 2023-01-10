import React from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
function TodoBox(props) {
  return (
    <div>
      <header></header>
      <div className={styles.todoContainer}>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
    </div>
  );
}

export default TodoBox;