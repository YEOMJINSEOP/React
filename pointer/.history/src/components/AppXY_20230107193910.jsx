import React from 'react';
import { useState } from 'react';
import './AppXY.css';

function AppXY(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div className='background' onMouseMove={() => {console.log('hi!')}}>
      <div className='pointer'></div>
    </div>
  );
}

export default AppXY;