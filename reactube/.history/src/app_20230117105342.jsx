import React from 'react';
import './app.css';
import VideoList from './components/videoList/VideoList';
import{QueryClient, QueryClientProvider} from '@tanstack/react-query'
import VideoQuery from './components/videoQuery/VideoQuery';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoQuery/>
    </QueryClientProvider>
  )
}

export default App;
