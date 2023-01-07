import React from 'react';
import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{width:"300px", height:"300px", backgroundColor:"lightblue", display:"flex"}}>
        <span>{count}</span>
        <button style={{width:"100px", height:"50px", backgroundColor:"orange"}}onClick={() => {
          setCount(count+1);
        }}></button>
      </div>
    </>
  );
}

export default Counter;