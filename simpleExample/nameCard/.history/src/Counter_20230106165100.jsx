import React from 'react';
import { useState } from 'react';
import styles from './Counter.css';

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
      <div className={styles.countBox}>
        <span className={styles.counter}>{count}</span>
        <button className={styles.btn} onClick={() => {
          setCount(count+1);
          setCount(count+1);
          setCount(count+1);
        }}>Click!</button>
      </div>
  );
}

export default Counter;