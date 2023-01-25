import React from 'react';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import styles from './app.module.css';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  
  const search = query => {
    youtube.search(query).then(console.log);
  };

  //useEffect -> component나 prop이 mount되었거나 update 될 때마다 호출.
  //두번째 인자에 전달하는 데이터만 update될 때마다 호출되게 설정할 수 있다.
  useEffect(() => {
    youtube.mostPopular().then(console.log);
  }, []);
  return (
    <div className="app">
      <SearchHeader onSearch={search} />
      <VideoList videos={videos}/>;
    </div>
  )
}

export default App;
