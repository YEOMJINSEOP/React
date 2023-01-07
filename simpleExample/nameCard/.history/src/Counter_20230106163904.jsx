import React from 'react';
import { useState } from 'react';
import './Counter.css';
function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{width:"300px", height:"300px", backgroundColor:"lightblue", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <span class='count'>{count}</span>
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