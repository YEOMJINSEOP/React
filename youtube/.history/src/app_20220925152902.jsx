import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);
  
  //useEffect -> component나 prop이 mount되었거나 update 될 때마다 호출.
  //두번째 인자에 전달하는 데이터만 update될 때마다 호출되게 설정할 수 있다.
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <h1>Hello :)</h1>;
}

export default App;
