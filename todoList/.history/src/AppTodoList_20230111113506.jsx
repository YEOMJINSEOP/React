import React from 'react';
import styles from './AppTodoList.module.css';
import TodoBox from './components/TodoBox/TodoBox';

function AppTodoList() {
  return (
    <div className={styles.background}>
      <TodoBox/>
    </div>
  );
}

export default AppTodoList;
