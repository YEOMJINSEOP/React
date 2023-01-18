import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';

const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      { index: true, element: <Videos/>},
      { path: 'videos', element: <Videos />},
      { ptah: 'videos/:keyword', element: <Videos />},
      { path: 'videos/watch/:videoId', element: <VideoDetail/>},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);