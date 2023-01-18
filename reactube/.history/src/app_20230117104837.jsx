import React from 'react';
import './app.css';
import VideoList from './components/videoList/VideoList';
import{QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoList/>
    </QueryClientProvider>
  )
}

export default App;
