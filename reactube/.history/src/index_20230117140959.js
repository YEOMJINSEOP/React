import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import VideoDetail from './components/videoDetail/VideoDetail';
import VideoList from './components/videoList/VideoList';
const router = createBrowserRouter([
  {
    path: '/',
    element: <VideoList/>,
  },
  {
    path: '/detail/:videoId',
    element: <VideoDetail/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);