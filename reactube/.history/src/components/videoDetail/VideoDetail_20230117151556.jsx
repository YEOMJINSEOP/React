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
      console.log(res['data']['items'][0]['snippet']);
      setVideoData(res['data']['items'][0]['snippet']);
    })
  }, [])

  return (
    <div>
      <iframe id="player" type="text/html" width="640" height="390"
        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
        frameborder="0">
      </iframe>
      <h2>{videoData.title}</h2>
      <h4>{videoData.channelTitle}</h4>
      <p>{videoData.publishedAt}</p>
    </div>
  );
}

export default VideoDetail;