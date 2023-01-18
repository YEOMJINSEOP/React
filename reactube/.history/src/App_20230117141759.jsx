import React from 'react';
import './app.css';
import{QueryClient, QueryClientProvider} from '@tanstack/react-query'
import VideoList from './components/videoList/VideoList';
import Header from './components/header/Header';
import VideoDetail from './components/videoDetail/VideoDetail';
import Home from './pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Home/>
      </QueryClientProvider>
  )
}

export default App;
