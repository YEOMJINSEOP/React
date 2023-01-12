import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({todo}) {
  const [active, setActive] = useState(true);  
  return (
    <div className={styles.todo}>
      <input className={styles.checkBox} type="checkbox" id='todoCheck' onClick={() => {
        setActive((prev) => !prev);        
      }} />
      <span className={styles.content}>{todo}</span>
      <button><FaTrash className={styles.removeBtn}/></button>
    </div>
  );
}

export default Todo;