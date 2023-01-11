import React from 'react';
import { useState } from 'react';
import styles from './TodoFooter.module.css';

function TodoFooter({onAdd}) {
  const [content, setContent] = useState('');

  return (
    <footer className={styles.footer}>
      <div className={styles.todoInput}>
        <input type="text" onChange={(e) => setContent(e.target.value)} />
        <button onClick={onAdd()}>add</button>
      </div>
    </footer>
  );
}

export default TodoFooter;