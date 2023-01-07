import React from 'react';
import styles from './nameCard.module.css';

function NameCard(props) {

  return (
    <div className={styles.nameCard}>
      <img src='https://images.unsplash.com/photo-1671725501835-afb7bd1f21ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'>
        
      </img>
    </div>
  );
}

export default NameCard;
