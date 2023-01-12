import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({todo, handleDelete}) {
  const [isCompleted, setIsCompleted] = useState(false);  

  return (
    <div className={isCompleted ? styles.todoCompleted : styles.todo}>
      <input className={styles.checkBox} type="checkbox" id='todoCheck' onClick={() => {
        setActive((prev) => !prev);        
      }} />
      <span className={styles.content}>{todo}</span>
      <button onClick={
        () => {
          console.log('delete', todo);
          handleDelete(todo);
      }
    }><FaTrash className={styles.removeBtn}/></button>
    </div>
  );
}

export default Todo;