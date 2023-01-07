import React from 'react';
import styles from './nameCard.module.css';

function NameCard({name, profileImage}) {

  return (
    <div className={styles.nameCard}>
      <img className={styles.profileImage} 
        src = {profileImage}
        alt = 'profile'
        >
      </img>
      <span className={styles.name}>{name}</span>
    </div>
  );
}

export default NameCard;
