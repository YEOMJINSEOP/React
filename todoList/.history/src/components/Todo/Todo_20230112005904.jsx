import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({content}) {
  const [active, setActive] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.todo}>
      <label className={styles.checkBoxLabel} htmlFor='todoCheck'></label>
      <input className={styles.checkBox} type="checkbox" id='todoCheck' onClick={() => {
        setIsChecked((prev) => !prev);        
      }} />
      <span className={styles.content}>{content}</span>
      <button><FaTrash className={styles.removeBtn}/></button>
    </div>
  );
}

export default Todo;