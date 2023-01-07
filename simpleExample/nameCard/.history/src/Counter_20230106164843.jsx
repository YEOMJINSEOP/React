import React from 'react';
import { useState } from 'react';
import './Counter.css';

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
      <div className='countBox'>
        <span className='counter'>{count}</span>
        <button className='btn' onClick={() => {
          setCount(count+1);
          setCount(count+1);
          setCount(count+1);
        }}>Click!</button>
      </div>
  );
}

export default Counter;