import React from 'react';
import './app.css';
import{QueryClient, QueryClientProvider} from '@tanstack/react-query'
import VideoList from './components/videoList/VideoList';
import Header from './components/header/Header';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import VideoDetail from './components/videoDetail/VideoDetail';
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
const queryClient = new QueryClient();
function App() {
  return (
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
        <Header/>
        <VideoList/>
      </QueryClientProvider>
    </RouterProvider>
  )
}

export default App;
