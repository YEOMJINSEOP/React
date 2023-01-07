import React from 'react';
import { useState } from 'react';
import './Counter.css';

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div class='countBox'>
        <span class='counter'>{count}</span>
        <button class='btn' onClick={() => {
          setCount(count+1);
          setCount(count+1);
          setCount(count+1);
        }}>Click!</button>
      </div>
    </>
  );
}

export default Counter;