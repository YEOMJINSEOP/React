import React, { useState } from 'react';
import { useEffect } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({todo, handleDelete}) {
  const [isCompleted, setIsCompleted] = useState(false);  
  const handleCheck = useEffect(() => {
    setIsCompleted((prev) => !prev);        
  }, [isCompleted])

  return (
    <div className={isCompleted ? styles.todoCompleted : styles.todo}>
      <input className={styles.checkBox} type="checkbox" id='todoCheck' onClick={() => {
        handleCheck
      }} />
      <span className={styles.content}>{todo}</span>
      <button onClick={
        () => {
          handleDelete(todo);
      }
    }><FaTrash className={styles.removeBtn}/></button>
    </div>
  );
}

export default Todo;