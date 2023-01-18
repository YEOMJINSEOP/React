import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Videos from './components/Videos';
import VideoDeatil from './components/VideoDeatil';

const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      { index: true, element: <Videos/>},
      { path: 'videos', element: <Videos />},
      { ptah: 'videos/:keyword', element: <Videos />},
      { path: 'videos/watch/:videoId', element: <VideoDeatil/>},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);