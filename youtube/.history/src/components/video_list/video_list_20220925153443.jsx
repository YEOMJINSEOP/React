import React from 'react';
import Video_item from '../video_item/video_item';

const VideoList = (props) => (
      <ul>
        {props.videos.map(video => <Video_item key={video.id} video={video}></Video_item>)}
      </ul>
  );

export default VideoList;