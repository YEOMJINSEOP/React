import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

function VideoDetail() {
  const params = useParams();

  axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params['videoId']}&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ`)
    .then(res =>{
      const videoData = res['data']['items'][0]['snippet'];
      console.log(videoData);
      return videoData;
  })

  return (
    <div>
      {videoData.title}
    </div>
  );
}

export default VideoDetail;