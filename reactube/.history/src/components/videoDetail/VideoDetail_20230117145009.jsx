import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

function VideoDetail() {
  const params = useParams();
  console.log(params['videoId']);

  const videoData = params['videoId']['data']['item'][0]['snippet'];

  axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params['videoId']}&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ`)
    .then(res =>{
      console.log(res);
      console.log(res['data']['items']);
      return res['data']['items']
  })

  return (
    <div>
      VideoDetail
    </div>
  );
}

export default VideoDetail;