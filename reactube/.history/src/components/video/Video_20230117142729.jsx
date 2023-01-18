import React from 'react';
import { useNavigate } f/vi/RQ0m99laOMQ/hqdefault.jpgrom 'react-router';
import VideoDetail from '../videoDetail/VideoDetail';
import styles from './Video.module.css';

function Video({id, imgSrc, title, channel, publishTime}) {
  const navigate = useNavigate();
  return (
    <div className={styles.video} onClick={() => {
        return <VideoDetail videoId={id} />
      }}>
      <img className={styles.img} src={imgSrc}></img>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.channel}>{channel}</p>
        <p className={styles.publishTime}>{publishTime}</p>
      </div>          
    </div>
  );
}

export default Video;