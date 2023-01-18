import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import App from './App';
import Detail from './pages/Detail';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/detail/:videoId',
    element: <Detail/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
  </React.StrictMode>
);