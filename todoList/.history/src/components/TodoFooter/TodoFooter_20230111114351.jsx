import React from 'react';

function TodoFooter(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.todoInput}>
        <input type="text" />
        <button>add</button>
      </div>
    </footer>
  );
}

export default TodoFooter;