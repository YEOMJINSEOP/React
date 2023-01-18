import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <button>🚀</button>
      <input type="text" placeholder='Search...' />
    </div>
  );
}

export default Header;