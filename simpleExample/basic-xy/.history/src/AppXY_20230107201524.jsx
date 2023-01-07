import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {

  const [cordX, setCordX] = useState(0);
  const [cordY, setCordY] = useState(0);

  return (
    <div className='container' onPointerMove={(e) => {setCordX(e.clientX); setCordY(e.clientY)}}>
      <div className='pointer' style={{transform: `translate(${x}px, ${y}px)`}}>
        <b>{`${cordX}, ${cordY}`}</b>
      </div>
    </div>
  );
}
