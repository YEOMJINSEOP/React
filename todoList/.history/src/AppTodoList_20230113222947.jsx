import React from 'react';
import styles from './AppTodoList.module.css';
import TodoBox from './components/TodoBox/TodoBox';
import DarkModeProvider from './context/DarkModeProvider';

function AppTodoList() {
  return (
    <DarkModeProvider>
      <TodoBox/>
    </DarkModeProvider>
  );
}

export default AppTodoList;
