import React from 'react';
import './app.css';
import{QueryClient, QueryClientProvider} from '@tanstack/react-query'
import VideoQuery from './components/videoList/VideoQuery';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoQuery/>
    </QueryClientProvider>
  )
}

export default App;
