import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import styles from './VideoQuery.module.css';

function VideoQuery(props) {
  const {isLoading, error, data} = useQuery(
    ['videos'],
    () => 
    axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ')
    .then(res =>{
      console.log(res);
      console.log(res['data']['items']);
      return res['data']['items']
    })
  )

  if(isLoading) return 'Loading...'

  if(error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <ul className={styles.videoList}>
        {
          data.map((videoInfo) => {
            return (
              <li key={videoInfo['etag']}>
                <img src={videoInfo['snippet']['thumbnails']['default']['url']}></img>
                <div className={styles.info}>
                  <p>{videoInfo['snippet']['title']}</p>
                  <p>{videoInfo['snippet']['channelTitle']}</p>
                  <p>{videoInfo['snippet']['publishedAt']}</p>
                </div>                          
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default VideoQuery;