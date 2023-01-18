import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <button className={styles.logo}>🚀</button>
      <input className={styles.searchBox} type="text" placeholder='Search...' />
      <button type='submit'></button>
    </div>
  );
}

export default Header;