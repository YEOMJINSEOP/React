import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <button className={styles.logo} type='button'>🚀</button>
      <div className={styles.search}>
        <input className={styles.searchBox} type="text" placeholder='Search...' />
        <button type='submit' className={styles.searchBtn}>🔍</button>
      </div>
    </div>
  );
}

export default Header;