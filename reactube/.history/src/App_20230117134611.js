import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import VideoList from './components/videoList/VideoList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoDetail from './components/videoDetail/VideoDetail';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <VideoList/>,
      errorElement: 'error!😺'
    },
    {
      path: '/detail',
      element: <VideoDetail/>,
      errorElement: 'error!😺 in VideoDetail'
    }
  ])

  const queryClient = new QueryClient()
  return (
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
        <VideoList/>
      </QueryClientProvider>
    </RouterProvider>
  );
}

export default App;
