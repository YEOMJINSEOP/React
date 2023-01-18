import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Video from '../video/Video';
import styles from './VideoList.module.css';

function VideoList({search}) {

  // const {isLoading, error, data} = useQuery(
  //   ['videos'],
  //   () => 
  //   axios.get('/data/videoList.json')
  //   .then(res =>{
  //     console.log(res['data']['items']);
  //     return res['data']['items']
  //   })
  // )

    const {isLoading, error, data} = useQuery(
    ['videos'],
    () => 
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ`)
    .then(res =>{
      console.log(res['data']['items']);
      return res['data']['items']
    })
  )


  // const {isLoading, error, data} = useQuery(
  //   ['videos'],
  //   () => 
  //   axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ`)
  //   .then(res =>{
  //     console.log(res['data']['items']);
  //     return res['data']['items']
  //   })
  // )

  if(isLoading) return 'Loading...'

  if(error) return 'An error has occurred: ' + error.message
  
  
  return (
    <div className={styles.listContainer}>
      <ul className={styles.videoList}>
        {
          data.map((videoInfo) => {
            let id = videoInfo['id']
            let imgSrc = videoInfo['snippet']['thumbnails']['high']['url'];
            let title = videoInfo['snippet']['title'];
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

export default VideoList;