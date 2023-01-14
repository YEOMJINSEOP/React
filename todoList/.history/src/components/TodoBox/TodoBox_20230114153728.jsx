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

  const handleDelete = (delTodo) => {
    setTodos((prev) => todos.filter((todo) => todo !== delTodo));
  }

  const handleActive = (checkTodo) => {
      setTodos((todos) => todos.map((todo) => {
        if(todo.id === checkTodo.id){
          return {...todo, active: !(todo.active)};
        }
        else{
          return todo;
        }
      }))
    }

  
  const [filter, setFilter] = useState('All');

  const handleFilter = (category) => {
    setFilter(category);
  }

  return (
    <div className={styles.todoBox}>
      <TodoHeader filter={filter} handleFilter={handleFilter}/>
      <ul className={styles.todoList}> 
          {todos.map((todo) => {
            if(filter === 'All'){
              return <li key={todo.id}><Todo todo={todo} handleActive={handleActive} handleDelete={handleDelete}/></li>
            }
            else if(filter === 'Active' && todo.active === true){
                return <li key={todo.id}><Todo todo={todo} handleActive={handleActive} handleDelete={handleDelete}/></li>
            }
            else if(filter === 'Completed' && todo.active === false){
                return <li key={todo.id}><Todo todo={todo} handleActive={handleActive} handleDelete={handleDelete}/></li>
            }
            else{
              return
            }
          })}
      </ul>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  );
}

export default TodoBox;