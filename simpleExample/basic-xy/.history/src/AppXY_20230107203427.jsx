import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  // 서로 연관있는 데이터는 하나의 객체로 상태를 관리해주는 것이 좋다.
  const [position, setPosition] = useState({x: 0, y:0})

  return (
    <div className='container' onPointerMove={(e) => {setPosition((prev) => ({x: e.clientX, y: prev.y}))}}>
      <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
        <b>{`${position.x}, ${position.y}`}</b>
      </div>
    </div>
  );
}
