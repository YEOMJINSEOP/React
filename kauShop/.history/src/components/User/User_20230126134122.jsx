import React from 'react';

function User(props) {
  return (
    <div>
        <img  
          className={styles.avatar} 
          src={user.photoURL}
        />
        <span className={styles.userName}>{user.displayName}</span>
    </div>
  );
}

export default User;