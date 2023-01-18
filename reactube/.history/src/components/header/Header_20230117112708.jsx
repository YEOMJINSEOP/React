import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <button className={styles.logo}>🚀</button>
      <input className={stlyes.searchBar} type="text" placeholder='Search...' />
    </div>
  );
}

export default Header;