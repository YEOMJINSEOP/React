import React from 'react';
import { useNavigate } from 'react-router';
import styles from './Video.module.css';

function Video({id, imgSrc, title, channel, publishTime}) {
  const navigate = useNavigate();
  const getVideoDetil = () => {
    navigate(`/https://www.youtube.com/watch?v=${id}`);
    console.log('hi');
  }
  return (
    <div onClick={getVideoDetil}>
      <img src={imgSrc}></img>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channel}</p>
        <p className={styles.publishTime}>{publishTime}</p>
      </div>          
    </div>
  );
}

export default Video;