import React, { useState } from 'react';
import { useEffect } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({todo, handleActive, handleDelete}) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {

  }, [])

  return (
    <div className={isCompleted ? styles.todoCompleted : styles.todo}>
      <input className={styles.checkBox} type="checkbox" id='todoCheck' onClick={() => {
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