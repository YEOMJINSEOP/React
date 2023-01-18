import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

function VideoQuery(props) {
  const {isLoading, error, data} = useQuery(
    ['videos'],
    () => 
    axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ')
    
  )

  if(isLoading) return 'Loading...'

  if(error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <ul>
      
      </ul>
    </div>
  );
}

export default VideoQuery;