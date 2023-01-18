import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

function VideoDetail({videoId}) {
  const params = useParams();
  console.log(params);
  const {isLoading, error, data} = useQuery(
    ['videoDetail'],
    () => 
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ`)
    .then(res =>{
      console.log(res);
      console.log(res['data']['items']);
      return res['data']['items']
    })
  )
  return (
    <div>
      VideoDetail
    </div>
  );
}

export default VideoDetail;