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
  
  const [filter, setFilter] = useState('All');

  const handleFilter = (category) => {
    setFilter(category);
  }

  const handleCategory = (filter) => {
    console.log('filter', filter);
    switch(filter){
      case 'All':
        return todos
      case 'Active':
        const todosActive = todos.filter((todo) => todo.active === true);
        return todosActive;
      case 'Completed':
        const todoscompleted = todos.filter((todo) => todo.active === false);
        return todoscompleted;
      default:
        return todos
    }
  }



  return (
    <div className={styles.todoBox}>
      <TodoHeader handleFilter={handleFilter}/>
      <ul className={styles.todoList}> 
          {handleCategory(filter).map((todo) => {
            return <li key={todo.id}><Todo todo={todo} handleActive={handleActive} handleDelete={handleDelete}/></li>
          })}
      </ul>
      <TodoFooter onAdd={handleAdd}/>
    </div>
  );
}

export default TodoBox;