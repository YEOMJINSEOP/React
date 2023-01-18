import React from 'react';
import styles from './Video.module.css';

function Video({id, imgSrc, title, channel, publishTime}) {

  return (
    <div className={styles.video}>
      <img className={styles.img} src={imgSrc}></img>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.channel}>{channel}</p>
        <p className={styles.publishTime}>{publishTime}</p>
      </div>          
    </div>
  );
}

export default Video;