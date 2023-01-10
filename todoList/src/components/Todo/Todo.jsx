import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo(props) {
  const [active, setActive] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [content, setContent] = useState('공부하기');
  return (
    <div className={styles.todo}>
      <input type="checkbox" onClick={() => {
        setIsChecked((prev) => !prev);        
      }} />
      {content}
      <button><FaTrash/></button>
    </div>
  );
}

export default Todo;