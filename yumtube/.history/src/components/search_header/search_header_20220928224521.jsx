import React, { useRef } from 'react';
import styles from  './search_header.module.css'

const SearchHeader = ({onSearch}) => {

  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch();
  }

  const onClick = () => {
    handleSearch();
  }

  const onKeyDown = (event) => {
    if(event.code === 'Enter'){
      handleSearch();
    }
  }

  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>YumTube</h1>
      </div>
      <input ref={inputRef} className={styles.input} type="search" placeholder='Search..' onKeyDown={onKeyDown}/>
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src="/images/search.png" alt="search" />
      </button>
    </header>
  )
};  


export default SearchHeader;