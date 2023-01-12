import React from 'react';
import { useState } from 'react';
import styles from './TodoFooter.module.css';
import {v4 as uuidv4} from 'uuid';

function TodoFooter({onAdd}) {
  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(content === ''){return}
    onAdd({id: uuidv4(), content, active:true});
    setContent('');
  }

  const handleSubmitOnEnter = (e) => {
    if(e.key === 'Enter'){
      handleSubmit(e);
    }
    else{return}
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.todoInput}>
        <input 
          type="text" 
          value={content} 
          maxLength = "24"
          onChange={handleInputChange}
          onKeyUp= {handleSubmitOnEnter}
          />
        <button onClick={handleSubmit}
        >add</button>
      </div>
    </footer>
  );
}

export default TodoFooter;