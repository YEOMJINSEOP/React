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
    if(content === ''){return}
    onAdd(content);
    setContent('');
  }

  const handleSubmitOnEnter = (e) => {
    if(e.key === 'Enter' && e.nativeEvent.isComposing == false){
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