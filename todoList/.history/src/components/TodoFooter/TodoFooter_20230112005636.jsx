import React from 'react';
import { useState } from 'react';
import styles from './TodoFooter.module.css';

function TodoFooter({onAdd}) {
  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
    console.log(content);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.todoInput}>
        <input type="text" value={content} onChange={handleInputChange} />
        <button onClick={onAdd}>add</button>
      </div>
    </footer>
  );
}

export default TodoFooter;