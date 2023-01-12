import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({todo, handleDelete}) {
  const [active, setActive] = useState(true);  
  const [content, setContent] = useState(content);
  return (
    <div className={styles.todo}>
      <input className={styles.checkBox} type="checkbox" id='todoCheck' onClick={() => {
        setActive((prev) => !prev);        
      }} />
      <span className={styles.content}>{content}</span>
      <button onClick={
        ({content}) => handleDelete({content})}
        ><FaTrash className={styles.removeBtn}/></button>
    </div>
  );
}

export default Todo;