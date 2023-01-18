import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

function VideoQuery(props) {
  const {isLoading, error, data} = useQuery({
    queryKey: ['videos'],
    queryFn: () => 
    axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ')
    .then(res => console.log(res))
  })

  if(isLoading) return 'Loading...'

  if(error) return 'An error has occurred: ' + error.message

  return (
    <div>
    </div>
  );
}

export default VideoQuery;