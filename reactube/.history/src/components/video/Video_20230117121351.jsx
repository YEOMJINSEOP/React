import React from 'react';
import styles from './Video.module.css';

function Video({imgSrc, title, channel, publishTime}) {
  return (
    <div>
      <img src={imgSrc}></img>
      <div className={styles.info}>
        <p>{title}</p>
        <p>{channel}</p>
        <p>{publishTime}</p>
      </div>          
    </div>
  );
}

export default Video;