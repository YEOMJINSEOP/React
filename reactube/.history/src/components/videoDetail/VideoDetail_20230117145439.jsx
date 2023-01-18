import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

function VideoDetail() {
  const params = useParams();
  console.log(params['videoId']);

  axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params['videoId']}&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ`)
    .then(res =>{
      console.log(res);
      console.log(res['data']['items'][0]['snippet']);
      return res['data']['items']
  })

  return (
    <div>
      VideoDetail
    </div>
  );
}

export default VideoDetail;