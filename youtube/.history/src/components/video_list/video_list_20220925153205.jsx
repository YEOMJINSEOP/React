import React from 'react';
import Video_item from '../video_item/video_item';

const Video_list = (props) => (
      <ul>
        {props.videos.map(video => <Video_item video={video}></Video_item>)}
      </ul>
  );

export default Video_list;