import React, { useState } from 'react';
import { useEffect } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({todo, handleActive, handleDelete}) {

  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    if(todo.active === false){
      setIsCompleted(true);
    }
    else{
      setIsCompleted(false);
    }
  }, [isCompleted])

  return (
    <div className={isCompleted ? styles.todoCompleted : styles.todo}>
      <input className={styles.checkBox} checked={isCompleted ? true : false} type="checkbox" onChange={}={() => {
        setIsCompleted((prev) => !prev);
        handleActive(todo);
      }} />
      <span className={styles.content}>{todo.content}</span>
      <button onClick={
        () => {
        handleDelete(todo);
      }
    }><FaTrash className={styles.removeBtn}/></button>
    </div>
  );
}

export default Todo;