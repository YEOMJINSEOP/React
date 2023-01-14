import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({todo, handleActive, handleDelete}) {

  const {content, active} = todo;
  
  return (
    <div className={styles.todo}>
      <input 
        className={styles.checkBox} 
        type="checkbox" 
        checked={active === false}
        onChange={() => {
          handleActive(todo);
        }}/>
      <span className={styles.content}>{content}</span>
      <button onClick={
        () => {
        handleDelete(todo);
      }
    }><FaTrash className={styles.removeBtn}/></button>
    </div>
  );
}

export default Todo;