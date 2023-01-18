import React from 'react';
import { useNavigate } from 'react-router';
import VideoDetail from '../videoDetail/VideoDetail';
import styles from './Video.module.css';

function Video({id, imgSrc, title, channel, publishTime}) {
  const navigate = useNavigate();
  return (
    <div className={styles.video} onClick={() => {
        navigate(`/detail/${id}`)
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