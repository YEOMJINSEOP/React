import React from 'react';
import styles from './User.module.css';

function User({user}) {
  const {photoURL, displayName} = user;
  return (
    <div>
        <img  
          className={styles.avatar} 
          src={photoURL}
        />
        <span className={styles.userName}>{displayName}</span>
    </div>
  );
}

export default User;