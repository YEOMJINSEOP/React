import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import VideoList from './components/videoList/VideoList';
function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <VideoList/>
    </QueryClientProvider>
  );
}

export default App;
