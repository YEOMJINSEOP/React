import React from 'react';
import { useState } from 'react';
import styles from './TodoFooter.module.css';

function TodoFooter({onAdd}) {
  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(content);
    setContent('');
  }

  const handleInputOnEnter = (e) => {
    if(e.key === 'Enter' && e.nativeEvent.isComposing == false){
      handleInputOnC
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.todoInput}>
        <input 
          type="text" 
          value={content} 
          onChange={handleInputChange}
          onKeyUp= {}
          />
        <button onClick={handleSubmit}
        >add</button>
      </div>
    </footer>
  );
}

export default TodoFooter;