import React from 'react';
import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div class='counterBox'>
        <span>{count}</span>
        <button onClick={() => {
          setCount(count+1);
        }}></button>
      </div>
    </>
  );
}

export default Counter;