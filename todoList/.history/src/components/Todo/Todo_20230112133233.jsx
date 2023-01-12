import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({todo, handleDelete}) {
  const [active, setActive] = useState(true);  

  return (
    <div className={active ? styles.todo : styles.doneTodo}>
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