import React from 'react';
import { useEffect } from 'react';
import {BiSun} from 'react-icons/bi';
import styles from './TodoHeader.module.css';

function TodoHeader({filter, handleFilter}) {

  const [btnClicked, setBtnClicked] = useState('All');
  useEffect(() => {
    setBtnClicked(filter);
  }, [btnClicked])
  
  return (
      <header>
        <BiSun className={styles.darkThemeBtn}/>
        <div className={styles.filterBtns}>
          <button onClick={(e) => {handleFilter(e.target.innerHTML)}}>All</button>
          <button onClick={(e) => {handleFilter(e.target.innerHTML)}}>Active</button>
          <button onClick={(e) => {handleFilter(e.target.innerHTML)}}>Completed</button>
        </div>
      </header>
  );
}

export default TodoHeader;