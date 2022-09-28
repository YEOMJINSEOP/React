import React from 'react';
import styles from  './search_header.module.css'

const SearchHeader = (props) => {
  return(
    <header className={styles.header}>
      <img src="/images/logo.png" alt="logo" />
      <h1>YumTube</h1>
      <input type="search" placeholder='Search..' />
      <button type="submit">
        <img src="/images/search.png" alt="" />
      </button>
    </header>
  )
};  


export default SearchHeader;