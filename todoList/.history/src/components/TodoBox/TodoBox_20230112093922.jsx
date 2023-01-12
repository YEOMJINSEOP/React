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
  }
  const handleDelete = (content) => {
    setTodos((prev) => prev.filter((todo) => {
      console.log('todo:', todo, 'content:', content);
      return todo !== content
    }));
  }
  return (
    <div className={styles.todoBox}>
      <TodoHeader/>
      <ul className={styles.todoList}> 
          <Todo todo={등산하기} handleDelete={handleDelete}/>
          <Todo todo={숙제하기} handleDelete={handleDelete}/>
          <Todo todo={짐싸기} handleDelete={handleDelete}/>
          <Todo todo={등록하기} handleDelete={handleDelete}/>
          {todos.map((todo, idx) => {
            return <li key={idx}><Todo todo={todo} handleDelete={handleDelete}/></li>
          })}
      </ul>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  );
  }

export default TodoBox;