import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';

function VideoDetail() {
  const params = useParams();
  const [videoData, setVideoData] = useState('');

  axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params['videoId']}&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ`)
    .then(res =>{
      setVideoData(res['data']['items'][0]['snippet']);
  })

  return (
    <div>
      {videoData.title}
      {videoData.channelTitle}
    </div>
  );
}

export default VideoDetail;