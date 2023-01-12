import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoBox.module.css';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoFooter from '../TodoFooter/TodoFooter';
import { useEffect } from 'react';

function TodoBox(props) {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
      console.log(todos);
  }, [todos])

  const handleAdd = (todo) => {
    setTodos((prev) => 
      [...prev, {id: todo.id, content: todo.content, active: todo.active }]
    )
  }

  const handleDelete = (delTodo) => {
    setTodos((prev) => todos.filter((todo) => todo !== delTodo));
  }

  const handleActive = (checkTodo) => {
      console.log('✅', checkTodo);
      setTodos((prev) => todos.map((todo) => {
        if(todo.content === checkTodo.content){
          return {id: todo.id, content: todo.content, active: !(todo.content)};
        }
        else{
          return todo;
        }
      }))
    }
  
  const [filter, setFilter] = useState('all');
  const handleFilter = (category) => {
    setFilter((prev) => category);
  }


  return (
    <div className={styles.todoBox}>
      <TodoHeader/>
      <ul className={styles.todoList}> 
          {todos.map((todo) => {
            return <li key={todo.id}><Todo todo={todo} handleActive={handleActive} handleDelete={handleDelete}/></li>
          })}
      </ul>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  );
}

export default TodoBox;