import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoFooter from '../TodoFooter/TodoFooter';

function TodoBox(props) {
  const [todos, setTodos] = useState([]);
  // const handleAdd = (todo) => {
  //   setTodos((prev) => 
  //     [...prev, todo]
  //   )
  // }
  return (
    <div className={styles.todoBox}>
      <TodoHeader/>
      <div className={styles.todoList}>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  );
  }

export default TodoBox;