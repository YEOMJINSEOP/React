import React from 'react';
import { useState } from 'react';
import './AppXY.css';

function AppXY(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);



  return (
    <div className='background' onMouseMove={(e) => {setX(e.screenX); setY(e.screenY);}}>
      <div className='pointer' style={{left: `${x}`, top: `${y}`}}></div>
    </div>
  );
}

export default AppXY;