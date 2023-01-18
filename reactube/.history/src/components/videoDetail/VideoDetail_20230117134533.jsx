import { useQuery } from '@tanstack/react-query';
import React from 'react';

function VideoDetail({videoId}) {

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