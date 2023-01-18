import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <button className={styles.logo} type='button' onClick={()=>{navigate('/')}}>🚀</button>
      <div className={styles.search}>
        <input className={styles.searchBox} type="text" placeholder='Search...' />
        <button type='submit' className={styles.searchBtn}>🔍</button>
      </div>
    </div>
  );
}

export default Header;