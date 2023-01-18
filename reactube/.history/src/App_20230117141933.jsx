import React from 'react';
import './app.css';
import{QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Home from './pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <VideoList/>
      </QueryClientProvider>
  )
}

export default App;
