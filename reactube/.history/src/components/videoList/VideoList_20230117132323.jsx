import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Video from '../video/Video';
import styles from './VideoList.module.css';

function VideoQuery(props) {
  const {isLoading, error, data} = useQuery(
    ['videos'],
    () => 
    axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=US&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ')
    .then(res =>{
      console.log(res);
      console.log(res['data']['items']);
      return res['data']['items']
    })
  )

  if(isLoading) return 'Loading...'

  if(error) return 'An error has occurred: ' + error.message
  
  
  return (
    <div className={styles.listContainer}>
      <ul className={styles.videoList}>
        {
          data.map((videoInfo) => {
            let id = videoInfo['id']
            let imgSrc = videoInfo['snippet']['thumbnails']['high']['url'];
            let title = videoInfo['snippet']['title'].trim();
            let channel = videoInfo['snippet']['channelTitle'];
            let publishTime = videoInfo['snippet']['publishedAt'];
            return (
              <li className={styles.video} key={videoInfo['etag']}>
                <Video id={id} imgSrc={imgSrc} title={title} channel={channel} publishTime={publishTime} />               
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default VideoQuery;