import React from 'react';
import { useState } from 'react';
import './CounterApp.css';

function CounterApp() {
  const [count, setCount] = useState(0);
  return(
    <>
      <div className='box'>
        <span className='count'>{count}</span>
      </div>
    </>
  )
}

export default CounterApp;
