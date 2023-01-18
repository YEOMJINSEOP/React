import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

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
      <ul>
        {
          data.map((videoInfo) => {
            return <li key={data['etag']}>{videoInfo['snippet']['title']}</li>
          })
        }
      </ul>
    </div>
  );
}

export default VideoQuery;