import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTodoList from './AppTodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTodoList />
  </React.StrictMode>
);