import React, { useState } from 'react';
import { useEffect } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({todo, handleActive, handleDelete}) {

  const {active} = todo;
  
  useEffect(() => {}, []);

  return (
    <div className={styles.todo}>
      <input className={styles.checkBox} checked={active == 'false'}type="checkbox" onChange={() => {
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