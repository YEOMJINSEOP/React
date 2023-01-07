import React from 'react';
import { useState } from 'react';
import './CounterApp.css';

function CounterApp() {
  const [count, setCount] = useState(0);
  return(
    <>
      <div className='box'>
        <span className='count'>{count}</span>
        <button onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}>Click</button>
      </div>
    </>
  )
}

export default CounterApp;
