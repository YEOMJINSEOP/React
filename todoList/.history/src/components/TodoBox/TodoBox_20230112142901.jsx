import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoFooter from '../TodoFooter/TodoFooter';

function TodoBox(props) {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos((prev) => 
      [...prev, {content: todo.content, active: todo.active }]
    )
  }

  const handleDelete = (delTodo) => {
    setTodos(todos.filter((todo) => todo !== delTodo));
  }

  const handleActive = (content) => {
      setTodos(todos.map((todo) => {
        if(todo.content == content ){
          return {...todo, active: !todo.active};
        }
        else{
          return todo;
        }
      }))
    }
  

  return (
    <div className={styles.todoBox}>
      <TodoHeader/>
      <ul className={styles.todoList}> 
          {todos.map((todo, idx) => {
            return <li key={idx}><Todo todo={todo} handleActive={handleActive} handleDelete={handleDelete}/></li>
          })}
      </ul>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  );
}

export default TodoBox;