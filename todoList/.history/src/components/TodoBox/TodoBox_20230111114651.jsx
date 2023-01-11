import React from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
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
      <TodoFooter/>
    </div>
  );
}

export default TodoBox;