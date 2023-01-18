import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/detail/:videoId',
    element: <VideoDetail/>
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