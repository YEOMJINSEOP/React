import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function VideoDetail() {
  const params = useParams();
  const [videoData, setVideoData] = useState('');

  // useEffect(()=>{
  //   axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params['videoId']}&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ`)
  //   .then(res =>{
  //     setVideoData(res['data']['items'][0]['snippet']);
  // })
  // }, [])

  useEffect(() => {
    axios.get('/data/videoDetail.json')
    .then(res=>{
      console.log(res['data']['items'][0]);
      setVideoData(res['data']['items'][0]);
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