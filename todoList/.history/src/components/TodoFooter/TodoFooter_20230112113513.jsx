import React from 'react';
import { useState } from 'react';
import styles from './TodoFooter.module.css';

function TodoFooter({onAdd}) {
  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.todoInput}>
        <input 
          type="text" 
          value={content} 
          onChange={handleInputChange}
          onKeyUp={
            (e) => {
              if(e.key === 'Enter' && e.isComposing === false){
                e.preventDefault();
                onAdd(content);
                setContent('');
            }}
          }
          />
        <button onClick={(e) => {
          e.preventDefault();
          onAdd(content);
          setContent('');
        }}
        >add</button>
      </div>
    </footer>
  );
}

export default TodoFooter;