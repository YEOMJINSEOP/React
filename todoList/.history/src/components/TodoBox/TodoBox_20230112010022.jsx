import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoFooter from '../TodoFooter/TodoFooter';

function TodoBox(props) {
  const [todos, setTodos] = useState([]);
  const handleAdd = (todo) => {
    setTodos((prev) => 
      [...prev, todo]
    )
    console.log(todos);
  }
  return (
    <div className={styles.todoBox}>
      <TodoHeader/>
      <div className={styles.todoList}>
        {todos.map((todo) => {
          return <Todo content={todo}/>
        })}
      </div>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  );
  }

export default TodoBox;