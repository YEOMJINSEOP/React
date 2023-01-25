import React from 'react';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);
  
  //useEffect -> component나 prop이 mount되었거나 update 될 때마다 호출.
  //두번째 인자에 전달하는 데이터만 update될 때마다 호출되게 설정할 수 있다.
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4", requestOptions)
      .then(response => response.json(),)
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <div className="app">
      <SearchHeader />
      <VideoList videos={videos}/>;
    </div>
  )
}

export default App;
