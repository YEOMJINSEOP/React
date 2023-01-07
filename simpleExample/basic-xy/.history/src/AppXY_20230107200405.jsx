import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {

  const [cordX, setCordX] = useState(0);
  const [cordY, setCordY] = useState(0);

  return (
    <div className='container' onMouseMove={(e) => {setCordX(e.screenX); setCordY(e.screenY)}}>
      <div className='pointer' />
    </div>
  );
}
