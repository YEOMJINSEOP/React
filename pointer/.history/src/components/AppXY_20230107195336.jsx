import React, { useEffect } from 'react';
import { useState } from 'react';
import './AppXY.css';

function AppXY(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    handleCoord()
  }, [x, y])

  const handleCoord = () => {
    console.log({x}, {y})
    return {left: {x}, top: {y}}
  }

  return (
    <div className='background' onMouseMove={(e) => {setX(e.screenX); setY(e.screenY);}}>
      <div className='pointer' onMouseMove={`style={handleCoord()}`}></div>
    </div>
  );
}

export default AppXY;