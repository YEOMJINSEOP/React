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
      setTodos((prev) => todos.map((todo) => {
        if(todo.content === checkTodo.content){
          return {id: todo.id, content: todo.content, active: !(todo.content)};
        }
        else{
          return todo;
        }
      }))
    }
  
  const [filter, setFilter] = useState(true);

  const handleFilter = (category) => {
    switch(category){
      case 'All':
        setFilter(true);
        break;
      case 'Active':
        setFilter(true);
        break;
      case 'Completed':
        setFilter(false);
        break;
    }
    setFilter(category);
  }



  return (
    <div className={styles.todoBox}>
      <TodoHeader handleFilter={handleFilter}/>
      <ul className={styles.todoList}> 
          {todos.filter((todo) => {
            return todo.active === filter
          })
          .map((todo) => {
            return <li key={todo.id}><Todo todo={todo} handleActive={handleActive} handleDelete={handleDelete}/></li>
          })}
      </ul>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  );
}

export default TodoBox;