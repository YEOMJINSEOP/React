import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video}) => (
      console.log(video);
      <h1>{video.snippet.title}</h1>
  );

export default VideoDetail;