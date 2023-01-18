import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import VideoList from './components/videoList/VideoList';
import { createBrowserRouter } from 'react-router-dom';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <VideoList/>,
      errorElement: 'error!😺'
    },
    {
      path: '/detail/:videoId',
      element: <VideoDetail/>,
      errorElement: 'error!😺 in VideoDetail'
    }
  ])

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <VideoList/>
    </QueryClientProvider>
  );
}

export default App;
