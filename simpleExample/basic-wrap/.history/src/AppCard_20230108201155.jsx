import React from 'react';
export default function AppCard() {
  return (
    <>
      <Menu>
        <p>라면🍜</p>
        <p>예약 손님</p>
        <ul> 
          <li>라이언님</li>
          <li>무지님</li>
        </ul>
      </Menu>

      <Menu>
        <h1>Card2</h1>
        <p>설명</p>
      </Menu>

      <Menu>
        <article></article>
      </Menu>
    </>
  );
}

function Menu({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      오늘의 메뉴
      {children}
    </div>
  );
}
