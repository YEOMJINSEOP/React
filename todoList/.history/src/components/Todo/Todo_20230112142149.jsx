import React, { useState } from 'react';
import { useEffect } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({content, handleActive, handleDelete}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? styles.todoCompleted : styles.todo}>
      <input className={styles.checkBox} type="checkbox" id='todoCheck' onClick={() => {
        handleActive(content);
      }} />
      <span className={styles.content}>{content}</span>
      <button onClick={
        () => {
          handleDelete(content);
      }
    }><FaTrash className={styles.removeBtn}/></button>
    </div>
  );
}

export default Todo;