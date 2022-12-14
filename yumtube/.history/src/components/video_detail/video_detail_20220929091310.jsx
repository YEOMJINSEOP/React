import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = (props) => (
      <section className={styles.detail}>
        <iframe
          className={styles.video} 
          id="ytplayer" 
          type="text/html" 
          width="100%" 
          height="500px"
          src={`https://www.youtube.com/embed/${props.video.id}`}
          frameborder="0" 
          allowfullscreen>
          </iframe>
      </section>
  );

export default VideoDetail;