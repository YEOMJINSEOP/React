import styles from './search_header.module.css';
import React from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const SearchHeader = (props) => {
  
  const inputRef = useRef();
  const handleSearch = () => {

  }
  const onClick = () => {
    handleSearch();
  }

  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  }
  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input 
        ref={inputRef}
        className={styles.input} 
        type="search" 
        placeholder="Search..."
        onKeyPress={onKeyPress}/>
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src="/images/search.png" alt="search" />
      </button>
    </header>
    ); 
  }

export default SearchHeader;