import React from 'react';
import './app.css';
import{QueryClient, QueryClientProvider} from '@tanstack/react-query'
import VideoList from './components/videoList/VideoList';
import Header from './components/header/Header';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header/>
      <VideoList/>
    </QueryClientProvider>
  )
}

export default App;
