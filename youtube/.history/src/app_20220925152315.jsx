import React from 'react';
import { useEffect } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [names, setName] = useState('');
  
  //useEffect -> component가 mount되었거나 update 될 때마다 호출.
  //두번째 인자에 전달하는 데이터만 update될 때마다 호출되게 설정할 수 있다.
  useEffect(() => {
    console.log('useEffect');
  }, [name, videos]);
  return <h1>Hello :)</h1>;
}

export default App;
