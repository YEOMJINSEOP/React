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
    setTodos(todos.filter((todo) => {
      console.log('🔫',todos);
      console.log('todo:', todo, 'content:', content);
      return todo !== content
    }));
  }
  return (
    <div className={styles.todoBox}>
      <TodoHeader/>
      <Todo todo={todo} handleDelete={handleDelete}/>
      {/* <ul className={styles.todoList}> 
          {todos.map((todo, idx) => {
            console.log('🔥',todos);
            return <li key={idx}><Todo todo={todo} handleDelete={handleDelete}/></li>
          })}
      </ul> */}
      <TodoFooter onAdd={handleAdd}/>
    </div>
  );
  }

export default TodoBox;