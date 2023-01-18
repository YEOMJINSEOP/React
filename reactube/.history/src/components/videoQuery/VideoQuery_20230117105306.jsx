import { useQuery } from '@tanstack/react-query';
import React from 'react';

function VideoQuery(props) {
  const {isLoading, error, data} = useQuery({
    queryKey: ['videos'],
    queryFn: () => 
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyDrzaZqzrVllcJGJEqROqUvoqoBsIo2DkQ')
    .then(res => res.json())
  })

  if(isLoading) return 'Loading...'

  if(error) return 'An error has occurred: ' + error.message

  return (
    <div>
      {data}    
    </div>
  );
}

export default VideoQuery;