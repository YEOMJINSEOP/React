import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function VideoDetail() {
  const params = useParams();
  const [videoData, setVideoData] = useState('');

  useEffect(()=>{
    axios.get(`/Users/yeomjinseop/Documents/GitHub/React/reactube/public/data/videoDetail.json`)
    .then(res =>{
      setVideoData(res['data']['items'][0]['snippet']);
  })
  }, [])

  return (
    <div>
      {videoData.title}
      {videoData.channelTitle}
      {/* {videoData.description} */}
    </div>
  );
}

export default VideoDetail;