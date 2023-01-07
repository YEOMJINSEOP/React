import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {

  const [cordX, setCordX] = useState(0);
  const [cordY, setCordY] = useState(0);

  return (
    <div className='container' onMouseMove={(e) => {console.log(e.screenX); setCordX(e.screenX); setCordY(e.screenY)}}>
      <div className='pointer' style={{top: `${cordY}`, left: `${cordX}`}} />
    </div>
  );
}
