import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoFooter from '../TodoFooter/TodoFooter';

function TodoBox(props) {
  const [todos, setTodos] = useState([]);
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